/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
  // Write your code here
  let total = 0;

  for (const num of ar) {
    total += num;
  }

  return total;
}