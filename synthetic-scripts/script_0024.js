// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if (((input_int('I2') % len(str(input_int('I2')))) <= input_int('I2')) || not((not(not(not(input_bool('B3')))) === input_bool('B1')))) then true else input_bool('B1')) then (int(input_string('S3')) in [1, 85, 2, 3, 5]) else (input_string('S3') < str(not(bool(input_int('I3'))))))

var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);

function fn43(s29, b17, x35, x1, b11) {
    var s34 = s29;
    var b26 = b17;
    var e25 = "var e13 = \"!(b11)\";var e18 = \"b17\";var b19 = false; if (eval(\"!(!(eval(e13)))\") === eval(e18)) { b19 = true; }var b22; if (!(b19)) { b22 = true; } else { var x8 = x1; var x2 = x1; var l5 = (String(eval(\"x2\"))).length;x6 = x1 % l5;var b9 = x6; var b10 = x8; b22 = b9 <= b10; }var e24 = \"b22\";eval(e24)";
    var x28;
    if (eval(e25)) {
        x28 = true;
    } else {
        x28 = eval("b26");
    }
    var x42;
    if (x28) {
        var x30 = parseInt(s29, 10);
        var opts32 = [1, 85, 2, 3, 5];
        var b31 = opts32.indexOf(x30) > -1;
        x42 = b31;
    } else {
        var b38 = !(eval("Boolean(x35)"));
        var s39 = '' + (b38);
        var b40 = false;
        if (s34 < s39) {
            b40 = true;
        }
        x42 = b40;
    }
    return x42;
}
fn43(input_S3, input_B1, input_I3, input_I2, input_B3);
