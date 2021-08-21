// Higher Order Function in JavaScript...

// any function that take a function as parameter or can return a function as output

function salutation() {
    console.log("TechnoFunnel");
}

function calculator(funcRef) {
    function add(a, b) {
        console.log(a + b);
        funcRef();
        return a + b;
    }

    return add;
}

function higherOrder(funReference) {
    funReference();
}

var myCalculation = calculator(salutation);

myCalculation(1, 2)

higherOrder(salutation);