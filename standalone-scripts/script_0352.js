// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B3') then (0 >= int(bool(int(input_bool('B2'))))) else (not(not(input_bool('B2'))) === (int(not((input_int('I2') == input_int('I2')))) > input_int('I1')))) then input_bool('B2') else (int(bool(str(not(input_bool('B3'))))) > len(str((if input_bool('B1') then int(input_string('S1')) else len(str(input_bool('B3'))))))))

var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");

function fn26(x13, x20, b2, b1) {
    var b9 = b2;
    var x3 = (b2) | 0;
    var b4 = !! (x3);
    var x5 = +(b4);
    var b6;
    if (0 >= x5) {
        b6 = true;
    } else {
        b6 = false;
    }
    var b12;
    if (!(eval("b9"))) {
        b12 = false;
    } else {
        b12 = true;
    }
    var x14 = x13;
    var b16 = x13;
    var b17 = eval("x14");
    var b18;
    if (b16 == b17) {
        b18 = false;
    } else {
        b18 = true;
    }
    var b23 = b12;
    var b24 = ((b18) ? 1 : 0 > x20);
    return (b1 ? eval("b6") : b23 === b24);
}
var fn51 = function (b29, x28, x27, b30, b38, s39) {
    var b32 = b30;
    var b31 = b29;
    var x50;
    if (fn26(x27, x28, b29, b30)) {
        x50 = b31;
    } else {
        var b41 = b32;
        var e36 = "var s34 = '' + (!(b32));var b35 = Boolean(s34);b35";
        var x37 = +(eval(e36));
        var x40 = parseInt(s39, 10);
        var l44 = (eval("(b41).toString()")).length;
        var b48 = x37;
        var b49 = ('' + ((b38 ? x40 : l44))).length;
        x50 = b48 > b49;
    }
    return x50;
}
fn51(input_B2, input_I1, input_I2, input_B3, input_B1, input_S1);
