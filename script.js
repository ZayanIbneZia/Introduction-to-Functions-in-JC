var num1 = 10;
var num2 = 7;
var add_result = num1 + num2;
document.getElementById("add_result").innerHTML = add_result;

var a = 50;
var b = 10;
a += b;
document.getElementById("assignment").innerHTML = a;

function addTWOnumbers() {
    var x = 30;
    var y = 20;
    document.getElementById("add_2_nums").innerHTML = x + y;
}
addTWOnumbers();

function multiplyTWOnumbers() {
    var x = 4.5;
    var y = 5.5;
    return x * y;
}
var multiply_result = multiplyTWOnumbers();
document.getElementById("multiply_2_nums").innerHTML = multiply_result;

function findevenorodd(num) {
    if (num % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
var num = 52;
document.write(findevenorodd(num));
