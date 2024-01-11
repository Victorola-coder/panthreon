# Challenge: Count Occurrences

## Instructions

Write a function called `countOccurrences()` that takes in a string and a character and returns the number of occurrences of that character in the string.

### Function Signature

```js
/**
 * Returns the number of occurrences of a character in a string.
 * @param {string} str - The string to search.
 * @param {string} char - The character to search for.
 * @returns {number} - The number of occurrences of the character in the string.
 */
function countOccurrences(str: string, char: string): number;
```

### Examples

```js
countOccurrences('hello', 'l'); // 2
countOccurrences('hello', 'z'); // 0
```

### Constraints

- Lowercase and uppercase characters are considered different characters. If you want, you can make the function case insensitive

### Hints- You can loop through a string just like you can loop through an array.

- You can use the `++` operator to increment a variable.
- You could take another approach and use the `split()` method to split the string into an array of substrings based on the given character.

# Note

this work for both number and string literals.
