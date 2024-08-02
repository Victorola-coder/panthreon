
function reverseANumber(num) {
    let reversedNumber = 0;

    while (num !== 0) {
        //get the last digit of the number
        let lastDigit = num % 10;
        //get the updated number without the last digit.
        num = Math.floor(num / 10);
        reversedNumber = (reversedNumber * 10 )+ lastDigit;
    }
    return reversedNumber;
}

module.exports = reverseANumber;