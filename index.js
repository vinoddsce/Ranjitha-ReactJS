
// Prototype

// function Person(name, yearOfBirth, isMarried, designation) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.isMarried = isMarried;
//     this.designation = designation;
// }

// Person.prototype.display = function () {
//     console.log(this.name, this.yearOfBirth, this.isMarried, this.designation);
// }
// Person.prototype.calculateAge = function (currentYear) {
//     function calAge(currentYear) {
//         return (currentYear - this.yearOfBirth);
//     }
//     console.log("Age Is :", calAge(currentYear));
//     var calAgeArr = (currentYear) => {
//         return (currentYear - this.yearOfBirth);
//     }
//     console.log("Age Is :", calAgeArr(currentYear));
// }

// var vinod = new Person("Vinod", 1990, false, "Teacher");
// vinod.display();
// vinod.calculateAge(2019);


// // var employee = Object.create({});
// // console.log("Employee", employee);

// var employee = Object.assign({ yearOfJoining: "2015" }, vinod);
// console.log("employee", employee);




// Bind, Call and Apply


function Person(name, yearOfBirth, isMarried, designation) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.isMarried = isMarried;
    this.designation = designation;
}

Person.prototype.display = function () {
    console.log(this.name, this.yearOfBirth, this.isMarried, this.designation);
}
Person.prototype.calculateAge = function (currentYear) {
    console.log("Age Is :", currentYear - this.yearOfBirth);
}

var vinod = new Person("Vinod", 1990, false, "Teacher");
// vinod.display();
// vinod.calculateAge(2019);


function Employee(name, yearOfBirth, isMarried, designation, yearOfJoin) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.isMarried = isMarried;
    this.designation = designation;
    this.yearOfJoin = yearOfJoin;
}
var employee = new Employee("Kumar", 1980, true, "Teacher", 2015);
// employee.display();
// var displayRef = vinod.display.bind(employee);
// displayRef();

vinod.display();
vinod.display.call(employee);
vinod.display();

vinod.calculateAge.call(employee, 2019);
vinod.calculateAge.apply(employee, [2019]);

