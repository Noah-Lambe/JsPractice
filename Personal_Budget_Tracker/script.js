window.addEventListener("DOMContentLoaded", function () {
  class Transaction {
    constructor(description, amount, options) {
      this.id = Date.now();
      this.description = description;
      this.amount = parseFloat(amount); // Convert amount to a float
      this.options = options;
    }

    addTransactionToList(transaction) {
      if (
        transaction.description === "" ||
        isNaN(transaction.amount) || // Check if amount is a valid number
        transaction.options === ""
      ) {
        this.showAlert("Please fill in all fields with valid data", "error");
      } else {
        let tr = document.createElement("tr");
        tr.setAttribute("data-id", transaction.id);
        tr.innerHTML = `
            <td>${transaction.description}</td>
            <td>${transaction.amount.toFixed(2)}</td>
            <td>${transaction.options}</td>
            <td><button class="delete">Delete</button></td>`;

        document.querySelector("#list").appendChild(tr);
        this.clearFields();
      }
    }

    clearFields() {
      document.querySelector("#description").value = "";
      document.querySelector("#amount").value = "";
      document.querySelector("#type").value = "expense";
    }

    showAlert(message, className) {
      let alert = document.createElement("div");
      alert.className = className;
      alert.innerText = message;
      alert.id = "box";
      document.querySelector("#alerts").appendChild(alert);

      setTimeout(function () {
        document.querySelector("#box").remove();
      }, 3000);
    }

    deleteTransaction(elemToDelete) {
      if (elemToDelete.classList.contains("delete")) {
        const transactionRow = elemToDelete.parentElement.parentElement;
        const transactionId = transactionRow.getAttribute("data-id");
        transactionRow.remove();
        Store.removeTransaction(transactionId);
        this.showAlert("Transaction successfully deleted", "success");
        Store.calculateBalance(); // Update balance immediately after deletion
      } else {
        this.showAlert("Wrong area clicked! Click on Delete", "error");
      }
    }
  }

  class Store {
    static addTransaction(transaction) {
      let transactions = Store.getTransactions();
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
      let transactions = Store.getTransactions();
      transactions.forEach((transaction) => {
        let transactionObj = new Transaction();
        transactionObj.addTransactionToList(transaction);
      });
    }

    static removeTransaction(id) {
      let transactions = Store.getTransactions();
      transactions = transactions.filter(
        (transaction) => transaction.id !== parseInt(id)
      );
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }

    static calculateBalance() {
      let transactions = Store.getTransactions();
      let balance = 0;

      transactions.forEach((transaction) => {
        if (transaction.options === "deposit") {
          balance += isNaN(transaction.amount) ? 0 : transaction.amount; // Handle NaN case
        } else if (transaction.options === "expense") {
          balance -= isNaN(transaction.amount) ? 0 : transaction.amount; // Handle NaN case
        }
      });

      // Update the balance display
      document.querySelector(
        ".container > div"
      ).innerText = `Current balance: ${balance.toFixed(2)}`;
    }
  }

  let form = document.querySelector("#form1");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    let description = document.querySelector("#description").value;
    let amount = document.querySelector("#amount").value;
    let options = document.querySelector("#type").value;

    let transaction = new Transaction(description, amount, options);

    // Check if amount is a valid number, show alert if not
    if (isNaN(parseFloat(amount))) {
      transaction.showAlert(
        "Please enter a valid number for the amount.",
        "error"
      );
      return;
    }

    transaction.addTransactionToList(transaction);
    Store.addTransaction(transaction);
    Store.calculateBalance(); // Update balance immediately after adding
    transaction.showAlert("Transaction successfully added", "success");
  });

  document.querySelector("#area").addEventListener("click", function (evt) {
    if (evt.target.tagName === "BUTTON") {
      let transaction = new Transaction();
      transaction.deleteTransaction(evt.target);
    }
    evt.preventDefault();
  });

  // Display existing transactions and calculate the initial balance when page loads
  Store.displayTransactions();
  Store.calculateBalance();
});
