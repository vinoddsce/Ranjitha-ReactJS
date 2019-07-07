// Arrow Functions

// function display() {
//     console.log("Hello !!!!");
// }
// display();


var display = function (name) {
    console.log("Hello !!!!", name);
}
display("Vinod");


// var fun_name = () => {
// }

var displayArr = (name) => {
    console.log("Hello Arrow !!!!", name);
}
displayArr("Kumar");


var yearOfBirth = 2000;

function Person(name, yearOfBirth, isMarried, designation) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.isMarried = isMarried;
    this.designation = designation;
    this.display = function () {
        console.log(this.name, this.yearOfBirth, this.isMarried, this.designation);
    }
    this.calculateAge = function (currentYear) {
        function calAge(currentYear) {
            return (currentYear - this.yearOfBirth);
        }
        console.log("Age Is :", calAge(currentYear));
        var calAgeArr = (currentYear) => {
            return (currentYear - this.yearOfBirth);
        }
        console.log("Age Is :", calAgeArr(currentYear));
    }
}

var vinod = new Person("Vinod", 1990, false, "Teacher");
vinod.display();
vinod.calculateAge(2019);