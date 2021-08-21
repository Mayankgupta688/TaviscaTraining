function getData(a, b) {
    return a + b;
}

var getData = (a, b) => {
    return a + b
}

var getDataSimplified = (a, b) => a + b


var sum = getDataSimplified(10, 20);

setTimeout(() => {
    console.log("Hello World....")
}, 5000)


setTimeout(function() {
    console.log("Hello World....")
}, 5000)