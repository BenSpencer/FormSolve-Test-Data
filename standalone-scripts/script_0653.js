// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(not(bool(int(not(not((if bool(str(input_bool('B2'))) then input_bool('B1') else (if not(input_bool('B3')) then input_bool('B1') else input_bool('B1'))))))))) > input_int('I1')) then input_string('S3') else str(input_int('I1')))

var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn31 = function (s27, b15, x24, b16, b14) {
    var x28 = x24;
    var x23 = +(eval("var fn13 = Function('b1', 'b10', 'b5', \"var b4 = b10; var s2 = (b1).toString();var b9 = b10; var e8 = \\\"eval(\\\\\\\"var b6; if (b5) { b6 = false; } else { b6 = true; }b6\\\\\\\")\\\";var x11; if (eval(e8)) { x11 = b9; } else { x11 = b10; }var x12; if ((s2) ? true : false) { x12 = b4; } else { x12 = x11; } return x12;\"); !(Boolean(Number(!(!(fn13(b14, b15, b16))))))"));
    var b25 = x23 > x24;
    var x30;
    if (b25) {
        x30 = s27;
    } else {
        x30 = (x28).toString();
    }
    return x30;
}
fn31(input_S3, input_B1, input_I1, input_B3, input_B2);
