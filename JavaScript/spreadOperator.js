var employeeDetails = {
    name: "Mayank",
    age: 20,
    designation: "Developer",
    address: "Delhi"
}

var newObject = {
    ...employeeDetails,
    age: 100,
    bonus: 10
}

console.log(employeeDetails.name)