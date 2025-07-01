const version = "1.0"

function addition (num1, num2) {
    return num1 + num2;
};

function division (num1, num2) {
    if (num2 === 0) {
        return 0;
    }
    return num1 / num2;
};

function multiplication (num1, num2) {
    return num1 * num2;
};

function subtraction (num1, num2) {
    return num1 - num2;
};

module.exports = {
    addition,
    division,
    multiplication,
    subtraction,
    version
}