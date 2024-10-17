// console.log("JavaScript file is linked correctly!");

window.addEventListener("DOMContentLoaded", function () {
  class Transaction {
    constructor(description, amount, options) {
      this.description = description;
      this.amount = amount;
      this.options = options;
    }

    addTransactionToList(transaction) {
      if (
        transaction.description === "" ||
        transaction.amount === "" ||
        transaction.options === ""
      ) {
        this.showAlert("No field should be empty", "error");
      } else {
        let tr = document.createElement("tr");
        tr.innerHTML = `
              <td>${transaction.description}</td>
              <td>${transaction.amount}</td>
              <td>${transaction.options}</td>
              <td><button class="delete" onclick="app.deleteTransaction(this)">Delete</button></td>`;

        document.querySelector("#list").appendChild(tr);
        this.clearFields();
      }
    }

    clearFields() {
      document.querySelector("#description").value = "";
      document.querySelector("#amount").value = "";
      document.querySelector("#type").value = "expense"; // Set default value for the select element
    }

    showAlert(message, className) {
      let alert = document.createElement("div"); // Use <div> instead of <alert>
      alert.className = className;
      alert.innerText = message;
      alert.id = "box";
      document.querySelector("#alerts").appendChild(alert);

      setTimeout(function () {
        document.querySelector("#box").remove();
      }, 3000);
    }

    deleteTransaction(elemToDelete) {
      if (elemToDelete.className === "delete") {
        var description =
          elemToDelete.parentElement.previousElementSibling.textContent;
        elemToDelete.parentElement.parentElement.remove();
        Store.removeTransaction(description);
        this.showAlert("Transaction successfully deleted", "success");
      } else {
        this.showAlert("Wrong area clicked! Click on Delete", "error");
      }
    }
  }

  class Store {
    static addTransaction(transaction) {
      let transactions = Store.getTransactions(); // Corrected method name
      transactions.push(transaction);
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }

    static getTransactions() {
      let transactions;

      if (localStorage.getItem("transactions") === null) {
        transactions = [];
      } else {
        transactions = JSON.parse(localStorage.getItem("transactions"));
      }
      return transactions;
    }

    static displayTransactions() {
      let transactions = Store.getTransactions(); // Corrected method name
      transactions.forEach((transaction) => {
        let transactionObj = new Transaction();
        transactionObj.addTransactionToList(transaction);
      });
    }

    static removeTransaction(description) {
      let transactions = Store.getTransactions();
      transactions = transactions.filter(
        (transaction) => transaction.description !== description
      );
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }
  }

  let form = document.querySelector("#form1");
  form.addEventListener("submit", function (e) {
    let description = document.querySelector("#description").value;
    let amount = document.querySelector("#amount").value;
    let options = document.querySelector("#type").value;

    let transaction = new Transaction(description, amount, options);

    transaction.addTransactionToList(transaction);
    Store.addTransaction(transaction);
    transaction.showAlert("Transaction successfully added", "success");

    e.preventDefault();
  });

  document.querySelector("#area").addEventListener("click", function (evt) {
    if (evt.target.tagName === "BUTTON") {
      let transaction = new Transaction();
      transaction.deleteTransaction(evt.target);
    }
    evt.preventDefault();
  });

  Store.displayTransactions(); // Display existing transactions when page loads
});
