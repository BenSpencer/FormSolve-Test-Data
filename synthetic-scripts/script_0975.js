// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B3') !== input_bool('B1')) then not((if (if not(input_bool('B3')) then false else bool(input_string('S3'))) then (if (str(int(not((int(input_bool('B1')) in [69, 7, 5, 1, -13, 52, -36, 1, -98])))) <= str(int(str(input_bool('B2'))))) then true else bool(input_int('I1'))) else bool(input_int('I2')))) else true)

var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

(function (b10, b1, x31, b20, x28, s7) {
    var b2 = b10;
    var b5 = b1;
    var b3 = b1 !== b2;
    var x35;
    if (b3) {
        var b6;
        if (b5) {
            b6 = false;
        } else {
            b6 = true;
        }
        var x9;
        if (b6) {
            x9 = false;
        } else {
            x9 = Boolean(s7);
        }
        var e27 = "var e24 = \"(parseInt('' + (b20), 10)).toString()\";var b25 = String(~~(!(eval(\"var opts13 = [69, 7, 5, 1, -13, 52, -36, 1, -98];var b12 = false; for (var idx14 = 0; idx14 < opts13.length; idx14++) { if (opts13[idx14] == (b10) | 0) { b12 = true; } }var e15 = \\\"b12\\\";eval(e15)\")))); var b26 = eval(e24);b25 <= b26";
        var x30;
        if (eval(e27)) {
            x30 = true;
        } else {
            x30 = (x28) ? true : false;
        }
        var x33;
        if (x9) {
            x33 = x30;
        } else {
            var b32 = (x31) ? true : false;
            x33 = b32;
        }
        var b34;
        if (x33) {
            b34 = false;
        } else {
            b34 = true;
        }
        x35 = b34;
    } else {
        x35 = true;
    }
    return x35;
})(input_B1, input_B3, input_I2, input_B2, input_I1, input_S3);
