function getFactorial(n) {
    if (typeof n === 'string') {
        n = parseInt(n, 10);
        if (isNaN(n)) return 'not a number';
    }

    if (n <= 1) return 1;
    return n * getFactorial(n - 1);
}

function multiply(x) {
    return function next(y) {
        if (y === undefined) return x;
        return multiply(x * y);
    }
}

multiply.prototype.valueOf = function() {
    return this(true);
}

module.exports = { getFactorial, multiply };
