/**
 * @function alphaNumericPalindrome
 * @description alphaNumericPalindrome should return true if the string has alphanumeric characters that form a palindrome,
 * regardless of special characters and letter case.
 * @param {string} str the string to check
 * @returns {boolean}
 * @see [Palindrome](https://en.wikipedia.org/wiki/Palindrome)
 * @example
 * The function alphaNumericPalindrome() receives a string with varying formats
 * like "racecar", "RaceCar", and "race CAR".
 * The string can also have special characters
 * like "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
 *
 * But the catch is, we have to check only if the alphanumeric characters
 * form a palindrome, i.e., remove spaces, symbols, punctuation, etc.
 * The case of the characters doesn't matter.
 */
const alphaNumericPalindrome = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Argument should be string')
  }

  // Remove all non-alphanumeric characters and convert to lowercase
  const newStr = str.replace(/[^a-z0-9]+/gi, '').toLowerCase()

  const midIndex = newStr.length >> 1 // x >> y = floor(x / 2^y)

  for (let i = 0; i < midIndex; i++) {
    if (newStr.at(i) !== newStr.at(~i)) {
      // ~n = -(n + 1), used to get characters from the end
      return false
    }
  }

  return true
}

export default alphaNumericPalindrome
