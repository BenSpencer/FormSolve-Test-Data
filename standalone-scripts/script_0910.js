// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then int(not((int(bool(int((if false then str(int(input_bool('B3'))) else str((input_int('I2') === input_int('I3'))))))) >= input_int('I2')))) else len(str(bool(((input_int('I3') - input_int('I3')) % input_int('I1'))))))

var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);

var fn13 = Function('b1', 'x4', 'x5', "var x2 = (b1) | 0;var e8 = \"var b6; if (x4 === x5) { b6 = true; } else { b6 = false; }b6\";var e10 = \"'' + (eval(e8))\";var e11 = \"eval(e10)\";var x12; if (false) { x12 = '' + (x2); } else { x12 = eval(e11); } return x12;");

function fn39(b14, x31, x16, x15) {
    var x27 = x16;
    var x38;
    if (true) {
        var x21 = x15;
        var e17 = "fn13(b14, x15, x16)";
        var b24 = !((Number((Number(eval(e17))) ? true : false) >= x21));
        x38 = ~~ (eval("b24"));
    } else {
        var e35 = "var x28 = x27; x32 = (x27 - x28) % x31;!!(x32)";
        var s36 = String(eval(e35));
        var l37 = (s36).length;
        x38 = l37;
    }
    return x38;
}
fn39(input_B3, input_I1, input_I3, input_I2);
