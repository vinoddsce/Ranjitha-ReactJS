// Immediatly Invoking Function Execution

(
    function (name, age) {
        console.log("Name, ", name);
        console.log("Age, ", age);
    }
)("Vinod", 28);


var returnedValue = (
    function () {
        return 100;
    }
)();


console.log("returnedValue", returnedValue);