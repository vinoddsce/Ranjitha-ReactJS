var a = [55, -2, 4, 95, 1, 6, 4, 77, 23];



// a.forEach(display);
// function display(value, index) {
//     console.log("Index: ", index, " Value: ", value);
// }


// square(a);
// Impure Function
// function square(a) {
//     console.log("Before, ", a);
//     for (var i = 0; i < a.length; i++) {
//         var n = a[i];
//         a[i] = n * n;
//     }
//     console.log("After, ", a);
// }

// Pure Function
// function square(a) {
//     console.log("Before, ", a);
//     var temp = [];
//     for (var i = 0; i < a.length; i++) {
//         var n = a[i];
//         temp.push(n * n);
//     }
//     console.log("After, ", a);
//     return temp;
// }

// console.log("New Array", square(a));



var result = a.map(function (n) {
    return n * n;
});
console.log("a, ", a);
console.log("result, ", result);

var filtered = a.filter(function (n) {
    if (n > 0) {
        return n;
    }
});
console.log("a, ", a);
console.log("filtered, ", filtered);

