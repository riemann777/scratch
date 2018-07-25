console.log(getFactorialFor(2) === 2);
console.log(getFactorialFor(3) === 6);
console.log(getFactorialFor(4) === 24);
console.log(getFactorialFor(5) === 120);
console.log(getFactorialFor(6) === 720);

function getFactorialFor(n) {

    if (n === 1) {

        return 1;
    }

    return n * getFactorialFor(n-1);
}