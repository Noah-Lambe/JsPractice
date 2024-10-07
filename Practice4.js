// 1
var salutations = [
  "bye",
  "hello123",
  "newhello",
  "he20llo",
  "hello",
  "abchello",
  "xyzabc",
];

function getHello(arr) {
  let Reg = /\bhello\b/;

  return arr.filter((element) => Reg.test(element));
}

console.log(getHello(salutations));

// 2
var strWith10 =
  "There are 10 people in room number 10. Call all of the 10 people outside";

function getHello1(str) {
  str = String(str);
  let Reg = /\b10\b/g;
  return str.replace(Reg, "Ten");
}

console.log(getHello1(strWith10));

// 3
function cleanUp(value) {
  return value
    .replace(/\. {2}/g, ". ")
    .replace(/! {2}/g, "! ")
    .replace(/\? {2}/g, "? ")
    .replace(/"/g, `'`)
    .replace(/\( +/g, "(")
    .replace(/ +\)/g, ")");
}

console.log(cleanUp("This is a sentence.  This is another."));
console.log(cleanUp("This is a sentence.  This is another."));
console.log(cleanUp("One!  Two?  Three."));
console.log(cleanUp('This is "fun."'));
console.log(cleanUp("A ( red) dog arrived."));
console.log(cleanUp("A (red  ) dog arrived."));
console.log(cleanUp("A (    red ) dog arrived."));

// 4
function fixPostalCode(postalCode) {
  const postalCodeRegex =
    /^[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ][ -]?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]$/;

  let fixed = postalCode.trim().toUpperCase();

  if (!postalCodeRegex.test(postalCode)) {
    throw new Error(`Invalid postal code: ${postalCode}`);
  }

  if (fixed.length === 6) {
    fixed = `${fixed.slice(0, 3)} ${fixed.slice(3)}`;
  }

  if (fixed.length === 7) {
    fixed = fixed.replace("-", " ");
  }

  return fixed;
}

console.log(fixPostalCode("A1A-1A1"));
// console.log(fixPostalCode("a1a 1a1"));
// console.log(fixPostalCode("A1A1A1"));
// console.log(fixPostalCode("A1A"));
// console.log(fixPostalCode("A1A1"));
// console.log(fixPostalCode("A1A 1A"));
// console.log(fixPostalCode("A1A 1A11"));
// console.log(fixPostalCode("A1A 1A1"));
// console.log(fixPostalCode("K1A 0B1"));
// console.log(fixPostalCode("X0X 0X0"));
// console.log(fixPostalCode("B3Z 2Z5"));
// console.log(fixPostalCode("J8X 2Y7"));

// 5
function toProvince(postalCode, useLongForm = false) {
  try {
    fixPostalCode(postalCode);
  } catch (error) {
    return null;
  }

  const firstLetter = postalCode.charAt(0).toUpperCase();

  const provinceLookup = {
    A: { short: "NL", long: "Newfoundland and Labrador" },
    B: { short: "NS", long: "Nova Scotia" },
    C: { short: "PE", long: "Prince Edward Island" },
    E: { short: "NB", long: "New Brunswick" },
    G: { short: "QC", long: "Quebec" },
    H: { short: "QC", long: "Quebec" },
    J: { short: "QC", long: "Quebec" },
    K: { short: "ON", long: "Ontario" },
    L: { short: "ON", long: "Ontario" },
    M: { short: "ON", long: "Ontario" },
    N: { short: "ON", long: "Ontario" },
    P: { short: "ON", long: "Ontario" },
    R: { short: "MB", long: "Manitoba" },
    S: { short: "SK", long: "Saskatchewan" },
    T: { short: "AB", long: "Alberta" },
    V: { short: "BC", long: "British Columbia" },
    X: { short: "NT", long: "Nunavut, Northwest Territories" },
    Y: { short: "YT", long: "Yukon" },
  };

  const province = provinceLookup[firstLetter];
  if (!province) {
    return null;
  }

  return useLongForm ? province.long : province.short;
}

console.log(toProvince("M5W 1E6"));
console.log(toProvince("M5W 1E6", true));
console.log(toProvince("G1A 1A1"));
console.log(toProvince("G1A 1A1", true));
console.log(toProvince("X0A 0H0"));
console.log(toProvince("A1A 1A1"));
console.log(toProvince("A1A 1A1", true));

// 6
function checkFirstChar(value) {
  return /^[A-Z]/.test(value)
    ? "String's first character is uppercase"
    : "String's first character is not uppercase";
}

console.log(checkFirstChar("Keyin"));
console.log(checkFirstChar("keyin"));

// 7
function validEmail(str) {
  const emailRegex =
    /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~]+(\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~]+)*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(str);
}

console.log(validEmail("example@email.com"));
console.log(validEmail("valid.email+123@domain.co"));
console.log(validEmail("invalid.email@domain..com"));
console.log(validEmail(".invalid@domain.com"));
console.log(validEmail("invalid@domain.com."));

// 8
function myTrimFunction(str) {
  return str.replace(/^\s+|\s+$/g, "");
}

console.log(myTrimFunction("     Keyin Collge       "));
console.log(myTrimFunction("        College"));
console.log(myTrimFunction("JavaScript    "));
console.log(myTrimFunction("   Hello World   "));

// 9
function validateHTML(str) {
  const HTMLregex = /^<.+>$/g;
  return HTMLregex.test(str);
}

console.log(validateHTML("b"));
console.log(validateHTML("<b>"));
console.log(validateHTML("<html>"));
console.log(validateHTML("h<tml>"));
