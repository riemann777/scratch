
console.log(getNthFibonacciNumber(0) === 1); 
console.log(getNthFibonacciNumber(1) === 1);
console.log(getNthFibonacciNumber(2) === 2);
console.log(getNthFibonacciNumber(3) === 3);
console.log(getNthFibonacciNumber(4) === 5);
console.log(getNthFibonacciNumber(5) === 8);
console.log(getNthFibonacciNumber(6) === 13);
console.log(getNthFibonacciNumber(7) === 21);


function getNthFibonacciNumber(n) {

    if (n === 0 || n === 1) {

        return 1;
    }

    return getNthFibonacciNumber(n-2) + getNthFibonacciNumber(n-1);

}