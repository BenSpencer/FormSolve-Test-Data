// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(str((if bool(input_int('I1')) then (str(input_int('I1')) > str(int(input_bool('B1')))) else input_bool('B3'))))) then (int(not(bool(input_int('I1')))) != int(input_bool('B1'))) else bool(input_int('I2')))

var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);

(function (b28, x32, b16, x1) {
    var x23 = x1;
    var b6 = b28;
    var x35;
    if (eval("var b21 = !(eval(\"var x4 = x1; var x17; if (eval(\\\"Boolean(x1)\\\")) { var e15 = \\\"var e12 = \\\\\\\"eval(\\\\\\\\\\\\\\\"var e8 = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"var x7 = Number(b6);x7\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";var e9 = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"eval(e8)\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";var s10 = String(eval(e9));s10\\\\\\\\\\\\\\\")\\\\\\\";var b13 = false; if ('' + (x4) > eval(e12)) { b13 = true; }b13\\\"; x17 = eval(e15); } else {  x17 = b16; }var b19 = Boolean(String(x17));b19\"));b21")) {
        var e24 = "x23";
        var x27 = ~~ (!(Boolean(eval(e24))));
        var x29 = ~~ (b28);
        x35 = (x27 != x29);
    } else {
        x35 = (eval("x32")) ? true : false;
    }
    return x35;
})(input_B1, input_I2, input_B3, input_I1);
