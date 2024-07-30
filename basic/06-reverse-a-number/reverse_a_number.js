
function reverseANumber(num) {
    let reversedNumber = 0;

    while (num !== 0) {
        let lastDigit = num % 10;
        num = Math.floor(num / 10);
        reversedNumber = reversedNumber * 10 + lastDigit;
    }
    return reversedNumber;
}

module.exports = reverseANumber;