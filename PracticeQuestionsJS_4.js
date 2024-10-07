/* PRACTICE QUESTIONS ON STRING FUNCTIONS AND REGULAR EXPRESSIONS */
// Use this file to solve the problems and submit it after filling in your solutions

/*
Name: <your name here>
Assignment: Practice Questions for RE's
Date: October 7,2024 
*/

/*******************************************************************************
 * Example Solution 1 : If we want to check the given string contains value keyin irrespective of the case.
 *
 *  var s1='Keyin College is the best college in NL';
 *  var s2='Three community colleges also include Keyin College';
 *  var s3='Hello do you want to find a good college in NL';
 *
 * 
 *  re.test(s1)  returns true
 *  re.test(s2) returns true
 *  re.test(s3) returns false
 * 
 * 
 *  var re = /keyin/i;
 *
 
 *
 ******************************************************************************/

/*******************************************************************************
 * Problem 1(based on above solution1 - also make use of any of the functions needed including .map(), .forEach() or filter( ). Whichever is applicable in given condition).
 *
 *  An exampe array is give in the problem, you need to filter all elements that contain hello. The funtion getHello recieves the given array in the arguments and
 *  displays only those elements that contain 'hello' in it by using a regular expression.[No return required from function]
 *
 ******************************************************************************/

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

/*******************************************************************************
 * Problem 2(based on above solution1 - also make use of any of the functions needed including .map(), .forEach(),filter( ), replace() etc. Whichever is applicable in given condition).
 *
 *  A string is provided as example, the function replaceTen(str) replaces all occurences of 10 with "Ten" by using regular expression and returns it
 *
 ******************************************************************************/

var strWith10 =
  "There are 10 people in room number 10. Call all of the 10 people outside";

function getHello1(str) {
  str = String(str);
  let Reg = /\b10\b/g;
  return str.replace(Reg, "Ten");
}

console.log(getHello1(strWith10));
/*******************************************************************************
 * Problem 3: clean-up formatting of text.  Specifically, make a given string
 * follow these rules:
 *
 *  - One space vs. two spaces after a period, question mark, or exclamation point
 *  - Single-quotes vs. double-quotes
 *  - Remove any spaces after ( and before )
 *
 * We want to be able to clean-up a string of text to follow some formatting rules.
 * Our function will be passed a string, and we need to correct it to follow the
 * expected format, then return that new version.
 *
 * The cleanUp() function should work like this:
 *
 * cleanUp('This is a sentence.  This is another.') --> returns 'This is a sentence. This is another.'
 * cleanUp('One!  Two?  Three.') --> returns --> 'One! Two? Three.'
 * cleanUp('This is "fun."') --> returns `This is 'fun.'`
 * cleanUp('A ( red) dog arrived.') --> returns 'A (red) dog arrived.'
 * cleanUp('A (red  ) dog arrived.') --> returns 'A (red) dog arrived.'
 * cleanUp('A (    red ) dog arrived.') --> returns 'A (red) dog arrived.'
 *
 * The string to be cleaned-up may contain one, some, or all of these errors,
 * and may contain multiple instances of the same error (e.g., it could be
 * a long string, like a paragraph vs. a single-sentence).
 *
 ******************************************************************************/

function cleanUp(value) {
  // Replace this comment with your code...
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

/*******************************************************************************
 * Problem 4: fix the formatting of Canadian Postal Codes
 *
 * A Canadian Postal Code (see https://en.wikipedia.org/wiki/Postal_codes_in_Canada)
 * is a 6-character string of the following form:
 *
 * A1A 1A1
 *
 * Many databases have postal codes that have been manually entered, and contain
 * formatting errors.  The fixPostalCode() function takes a possible postal code
 * (i.e. a string), attempts to format it, and returns the formatted version.
 * However, not all input postal codes can be formatted, and should be rejected
 * (see below).
 *
 * Here are the formatting rules we can fix, and validation checks we can make:
 *
 *  - Remove any leading/trailing whitespace
 *  - Convert everything to UPPER case letters
 *  - The fourth character might be a space, a dash (-), or be missing. Make it a space
 *  - Make sure the order and format of the letters/numbers is correct
 *
 * There are more than 800K valid postal codes.  The first three-characters of
 * the postal code is called a "Forward Sortation Area," and represents a geographic
 * region, with the first letter representing a province, or part of a province.
 *
 * The first character in a postal code can be any letter except D, F, I, O, Q, W, U, Z
 *
 * The other characters (i.e., letters) in a postal code can be any letter except
 * D, F, I, O, Q or U (i.e., W and Z are allowed)
 *
 * The numbers can be anything between 0 and 9
 *
 * If the string is not a valid postal code, an Error should be thrown.  See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw.
 *
 * HINT: use a Regular Expression to help you check for valid characters/numbers
 *
 *  postalCode - a possible postal code to be formatted
 *  -returns a formatted postal code
 ******************************************************************************/

function fixPostalCode(postalCode) {
  // Replace this comment with your code...
  const postalCodeRegex =
    /^[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ][ -]?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]$/;

  // Remove leading/trailing whitespace and convert everything to upper case
  let fixed = postalCode.trim().toUpperCase();

  // Make sure the characters are valid
  if (!postalCodeRegex.test(postalCode)) {
    throw new Error(`Invalid postal code: ${postalCode}`);
  }

  // If the postal code is only 6 characters, insert a space in the middle
  if (fixed.length === 6) {
    fixed = `${fixed.slice(0, 3)} ${fixed.slice(3)}`;
  }

  // Replace a `-` with a ` ` if necessary
  if (fixed.length === 7) {
    fixed = fixed.replace("-", " ");
  }

  return fixed;
}

console.log(fixPostalCode("A1A 1A1"));
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

/*******************************************************************************
 * Problem 5: convert a valid Canadian Postal Code to a Canadian Province
 *
 * The first letter of a Postal Code tells us which province the Postal Code is
 * from. Here's the list of Provinces/Territories, their 2-letter short form,
 * and the first letter(s) of the Postal Code that matches it:
 *
 * Province Name                    Short Form      First Letter of Postal Code
 * -----------------------------------------------------------------------------
 * Ontario                          ON              K, L, M, N, P
 * Quebec                           QC              G, H, J
 * Nova Scotia                      NS              B
 * New Brunswick                    NB              E
 * Manitoba                         MB              R
 * British Columbia                 BC              V
 * Prince Edward Island             PE              C
 * Saskatchewan                     SK              S
 * Alberta                          AB              T
 * Newfoundland and Labrador        NL              A
 * Nunavut, Northwest Territories   NT              X
 * Yukon                            YT              Y
 *
 * The toProvince() function converts a valid postal code to a province name. Use
 * your fixPostalCode() function from the previous problem to format and validate
 * the `postalCode` argument first. If it is invalid, return `null`. HINT: use try/catch
 * to deal with fixPostalCode() throwing an error, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 *
 * If the `useLongForm` argument is `true`, the province's long-form is
 * returned instead of the short form (default).  For example:
 *
 * toProvince('M5W1E6') returns 'ON'
 * toProvince('M5W 1E6') returns 'ON'
 * toProvince('M5W 1E6', true) returns 'Ontario'
 * toProvince('M5W') returns null
 *
 *  postalCode - a postal code to be validated and used
 * useLongForm - whether to return the long form name
 * returns string- a province (short form by default, or long form if requested)
 ******************************************************************************/

function toProvince(postalCode, useLongForm = false) {
  // Postal code validation using fixPostalCode
  try {
    fixPostalCode(postalCode);
  } catch (error) {
    return null; // Return null if postal code is invalid
  }

  // Extract the first letter of the postal code
  const firstLetter = postalCode.charAt(0).toUpperCase();

  // Province lookup table (short form and long form)
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

  // Find the province based on the first letter
  const province = provinceLookup[firstLetter];
  if (!province) {
    return null; // Return null if the first letter is not in the lookup
  }

  // Return the long or short form of the province name
  return useLongForm ? province.long : province.short;
}

// Testing the toProvince function
console.log(toProvince("M5W 1E6")); // 'ON'
console.log(toProvince("M5W 1E6", true)); // 'Ontario'
console.log(toProvince("G1A 1A1")); // 'QC'
console.log(toProvince("G1A 1A1", true)); // 'Quebec'
console.log(toProvince("X0A 0H0")); // 'NT'
console.log(toProvince("A1A 1A1")); // 'NL'
console.log(toProvince("A1A 1A1", true)); // 'Newfoundland and Labrador'
console.log(toProvince("INVALIDCODE")); // null

/*******************************************************************************
 * Problem 6: A JavaScript function checkFirstChar( value ) that checks whether or not the first character in a string is uppercase.
 *
 * Use regular expression to identify the capitalize letter-
 * Also try to optimize your code as much as possible - for example by replacing an if( ) else if( ){ }[if any] with ternary operators
 * checkFirstChar('Keyin'); returns "String's first character is uppercase"
 * checkFirstChar('keyin'); return "String's first charcter is not uppercase"
 *
 *
 * */

function checkFirstChar(value) {
  return /^[A-Z]/.test(value)
    ? "String's first character is uppercase"
    : "String's first character is not uppercase";
}

console.log(checkFirstChar("Keyin"));
console.log(checkFirstChar("keyin"));

/*******************************************************************************
 * Problem 7: A JavaScript function validEmail( str ) that checks whether or not an email by using a general email regular expression.
 *
 * Use .test( ) function with RE to check the given string.
 *
 * An email contains the following ASCII characters-
 *
 * UpperCase(A-Z) and lowercase(a-z) English letters.
 * Digits (0-9).
 * Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
 * Character .( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.
 *
 * */

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

/*******************************************************************************
 * Problem 8: A JavaScript function myTrimFunction( str ) that works like a .trim( )[built-in funciton] of JavaScript.
 *But myTrimFunction(str) does it by using Regular expression instead.
 *
 * myTrimFunction("     Keyin Collge       "); returns "Keyin College"[with no spaces before and after the string ]
 * myTrimFunction("        College"); returns "College"
 * and upto so on.....
 * */

function myTrimFunction(str) {
  return str.replace(/^\s+|\s+$/g, "");
}

console.log(myTrimFunction("     Keyin Collge       "));
console.log(myTrimFunction("        College"));
console.log(myTrimFunction("JavaScript    "));
console.log(myTrimFunction("   Hello World   "));

/*******************************************************************************
 * Problem 9: A JavaScript function validateHTML( str ) that checks for an html tag.
 * An HTML tag is a combination of "<" "some content" ">". For example <b> is an HTML tag.
 *
 * validateHTML("b"); returns false
 * validateHTML("<b>"); returns true
 * validateHTML("<html>");returns true
 * validateHTML("h<tml>"); returns false
 * */

function validateHTML(str) {
  const HTMLregex = /^<.+>$/g;
  return HTMLregex.test(str);
}

console.log(validateHTML("b"));
console.log(validateHTML("<b>"));
console.log(validateHTML("<html>"));
console.log(validateHTML("h<tml>"));
