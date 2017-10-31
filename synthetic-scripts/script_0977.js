// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S3')) then not(not(((len(str(bool(input_string('S1')))) != input_int('I2')) || input_bool('B3')))) else bool(int((true !== input_bool('B1')))))

var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);

var fn29 = function (b23, x14, b17, s1, s9) {
    var e7 = "eval(\"var e2 = \\\"s1\\\";eval(\\\"Boolean(eval(\\\\\\\"eval(e2)\\\\\\\"))\\\")\")";
    var b15 = eval("var b10 = !!(s9);('' + (b10)).length") != x14;
    var e18 = "b17";
    var b19 = b15 || eval(e18);
    var b21;
    if (b19) {
        b21 = false;
    } else {
        b21 = true;
    }
    var b22;
    if (b21) {
        b22 = false;
    } else {
        b22 = true;
    }
    var b24 = false;
    if (true !== b23) {
        b24 = true;
    }
    var b27 = ((b24) | 0) ? true : false;
    var x28;
    if (eval("eval(e7)")) {
        x28 = b22;
    } else {
        x28 = b27;
    }
    return x28;
}
fn29(input_B1, input_I2, input_B3, input_S3, input_S1);
