// 1
function area(radius) {
    return Math.PI * radius * radius;
}
console.log(area(5))

// 2
function roll(sides = 6)
{
    return Math.floor(Math.random() * sides) + 1;
}
console.log(roll());
console.log(roll(50));

// 3
function convert(temp = 0)
{
    let fahrenheit = temp * 9/5 + 32;
    console.log(fahrenheit);
}
convert(20);

// 4
function convert(temp, M) {
    if (M === "F") {
        let celsius = (temp - 32) * 5/9;
        console.log(celsius);
    }

    if (M === "C") {
        let fahrenheit = temp * 9/5 + 32;
        console.log(fahrenheit);
    }
}

convert(20, "C");
convert(122, "F");

// 5
function numberS(...arguments) {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < 50) {
            flag = false;
        } else {
            flag = true;
    }
    }
    console.log(flag);
}

numberS(10, 20, 30, 40, 49,);

// 6
function sum(...arguments) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}

sum(10, 20, 30, 40, 50, 45);

// 7
function multiple3(num) {
    if (num % 3 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(multiple3(9));

// 8
function subtractDiscount(price, percentage = 0) {
    let discount = parseFloat(percentage) / 100;
    let discountedPrice = price - (price * discount);

    console.log(`$${discountedPrice}`);
}
subtractDiscount(100, 10);

// 9
function calculateTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    let hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    let days = Math.floor(hours / 24);
    hours = hours % 24; 
    if (remainingSeconds > 30) {
        minutes++;
        remainingSeconds = 0;
        if (minutes === 60) {
            minutes = 0;
            hours++;
            if (hours === 24) {
                hours = 0;
                days++;
            }
        }
    }

    console.log(days, hours, minutes);
}
calculateTime(123456);

// 10
function calculateTime1(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    let hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    let days = Math.floor(hours / 24);
    hours = hours % 24; 
    if (remainingSeconds > 30) {
        minutes++;
        remainingSeconds = 0;
        if (minutes === 60) {
            minutes = 0;
            hours++;
            if (hours === 24) {
                hours = 0;
                days++;
            }
        }
    }

    let daysUnits = "days";
    if (days === 1) {
        daysUnits = "day";
    }

    let hoursUnits = "hours";
    if (hours === 1) {
        hoursUnits = "hour";
    }

    let minutesUnits = "minutes";
    if (minutes === 1) {
        minutesUnits = "minute";
    }
    
    console.log(`${days} ${daysUnits}, ${hours} ${hoursUnits}, ${minutes} ${minutesUnits}`);
}
calculateTime1(2512345);