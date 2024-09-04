/*
objectives:
* define & export functions that satisfy the test cases
* understand difference between the var, let, and const keywords
* understand primitive types number & boolean
* run tests from terminal and also within VS Code
*/


function add(numbers) {
    console.log(numbers);
    return numbers
        .split(',')
        .map(x => parseInt(x))
        .reduce((a, b) => a + b)
}

function addNumbers(a, b) {
    return a + b;
}

exports.add = add;
exports.addNumbers = addNumbers;