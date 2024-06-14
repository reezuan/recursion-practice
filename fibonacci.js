// FIBONACCI CHALLENGE

// Using iteration, write a function fibs which takes a number and
// returns an array containing that many numbers from the Fibonacci
// sequence. Using an example input of 8, this function should return
// the array [0, 1, 1, 2, 3, 5, 8, 13].

// Now write another function fibsRec which solves the same problem
// recursively.

// Test both versions of your functions by passing in various lengths
// as arguments.

// --------------------------------------------------------------------

// PART 1: USING ITERATION

function fibs(n) {
    let fibArray = [0, 1];

    if (n <= 2) {
        return fibArray[n - 1];
    }

    for (let i = 2; i < n; i++) {
        fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
    }

    return fibArray;
}

// PART 2: USING RECURSION

function fibsRec(n) {
    // Declare base cases.
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    }
    
    // Get the array from the previous Fibonacci number, then
    // concatenate the sum of the last 2 values.
    return fibsRec(n - 1).concat(fibsRec(n - 1)[n - 3] + fibsRec(n - 1)[n - 2]);
}

// --------------------------------------------------------------------

console.log(fibs(20));
console.log(fibsRec(20));