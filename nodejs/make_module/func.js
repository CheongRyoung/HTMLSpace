const value = require('./var') // node에서 제공해주는 함수
const [odd, even] = require('./var')

function checkOddOrEven(number) {
    if(number % 2) {
        return odd;
    } else {
        return even;
    }

}

module.exports = checkOddOrEven;