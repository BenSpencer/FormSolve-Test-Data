// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B3') != bool((int((bool(str(input_bool('B2'))) == (input_bool('B3') != (not(bool(input_int('I2'))) && input_bool('B2'))))) * int(input_bool('B1'))))) then str(int(not(not(not(bool(len(input_string('S1')))))))) else str((str(int(input_bool('B1'))) > str((input_string('S3') >= str(input_int('I1')))))))

var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

function fn53(x8, s31, b22, s43, b14, b1, x44) {
    var b40 = b22;
    var b7 = b1;
    var b2 = b14;
    var b5 = !! (eval("(b2).toString()"));
    var e6 = "b5";
    var e11 = "eval(\"eval(\\\"x8\\\")\")";
    var b13;
    if ((eval(e11)) ? true : false) {
        b13 = false;
    } else {
        b13 = true;
    }
    var b15;
    if (b13 && b14) {
        b15 = true;
    } else {
        b15 = false;
    }
    var b17 = b7 != b15;
    var x23 = +(b22);
    x24 = ~~ ((eval(e6) == b17)) * x23;
    var b26 = Boolean(x24);
    var e27 = "b26";
    var b28 = false;
    if (b1 != eval(e27)) {
        b28 = true;
    }
    var e38 = "var l32 = (s31).length;var b35; if (!(Boolean(l32))) { b35 = false; } else { b35 = true; }Number(!(b35))";
    var x41 = ~~ (b40);
    var b46;
    if (s43 >= '' + (x44)) {
        b46 = true;
    } else {
        b46 = false;
    }
    var b49 = false;
    if (String(x41) > (b46).toString()) {
        b49 = true;
    }
    var s51 = (b49).toString();
    return (eval("b28") ? String(eval(e38)) : s51);
}
fn53(input_I2, input_S1, input_B1, input_S3, input_B2, input_B3, input_I1);
