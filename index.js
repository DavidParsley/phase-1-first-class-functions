
function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("This is a named function.");
    };
}


function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function.");
    };
}

// Example usage:
receivesAFunction(() => console.log("Callback executed!"));

const namedFunc = returnsANamedFunction();
namedFunc();

const anonymousFunc = returnsAnAnonymousFunction();
anonymousFunc();

// Explanation:

//     receivesAFunction: This function takes a callback function as an argument and calls it. You can pass any function to it.

//     returnsANamedFunction: This function returns a named function. You can name it namedFunction, but you can also change the name inside the function definition.

//     returnsAnAnonymousFunction: This function returns an anonymous function that doesn’t have a name.

