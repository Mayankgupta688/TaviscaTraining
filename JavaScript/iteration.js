var dataArray = ["Mayank", "Anshul", "TechnoFunnel"];

var arrayNumber = [1, 2, 3, 4, 5, 67, 8,96, 34]

// forEach
// simple for loop
// do while
// while
// for of
// $.each

var newArray = dataArray.map(function(data) {
    return "A " + data
})


var evenArray = arrayNumber.filter(function(data) {
    return data % 2 == 0;
})

var sortedData = arrayNumber.sort(function(a, b) {
    return a - b
})

debugger;