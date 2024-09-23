// 1
function reverseNumber(num) {
    let reverseNum = num.toString().split('').reverse().join('');
    return parseInt(reverseNum);
}
console.log(reverseNumber(12345));

// 2
function alphaOrder(word) {
    let sortedWord = word.split('').sort().join('');
    return sortedWord;
}
console.log(alphaOrder('Noah Lambe'));

// 3
function getExtension(fileName) {
    let ext = fileName.split('.').pop();
    return ext;
}
console.log(getExtension('exampleFile.js'));

// 4
function getDate() {
    let date = new Date();
    let formattedDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
    return formattedDate;
}
console.log(getDate());

// 5
function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
console.log(toTitleCase("this is a title case example"));

// 6
function checkPeriod(string) {
    let regex = /\./;
    if (regex.test(string) == true) {
        msg = "Contains a period"
    }
    else {
        msg = "Does not contain a period"
    }
    return msg;

}
console.log(checkPeriod("lookingForPunctuation.com"));

// 7
// function putSuffix(num1) {
//     let numStr = num1.toString();
//     if (numStr.charAt(numStr.length - 1)) {
//         numStr = (str => str + "st");
//         return numStr(num1);
//     }
// }
// console.log(putSuffix(21));

// 7
function putSuffix(num1) {
    let numStr = num1.toString();
    let suffix;

    switch (numStr.charAt(numStr.length - 1)) {
        case '1':
            suffix = "st";
            break;
        case '2':
            suffix = "nd";
            break;
        case '3':
            suffix = "rd";
            break;
        default:
            suffix = "th";
            break;
    }

    if (numStr.charAt(numStr.length - 2) == 1 && numStr.charAt(numStr.length - 2) == 1) {
        suffix = "th";
    }
    else if (numStr.charAt(numStr.length - 2) == 1 && numStr.charAt(numStr.length - 2) == 2) {
        suffix = "th";
    }
    else if (numStr.charAt(numStr.length - 2) == 1 && numStr.charAt(numStr.length - 2) == 3) {
        suffix = "th";
    }

    return numStr + suffix;
}

console.log(putSuffix(11));
console.log(putSuffix(891));
console.log(putSuffix(912));
console.log(putSuffix(123));
console.log(putSuffix(234));
console.log(putSuffix(345));
console.log(putSuffix(4522));