// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not(bool(input_int('I2'))) != input_bool('B2')) then ((int(input_bool('B2')) * int(not((int((input_string('S3') in ['KAGPe', 'q', 'ATNMZ', 'airns', 'c', 'Q', '0e'])) === int((input_bool('B2') || bool(len(str(input_bool('B1')))))))))) <= input_int('I2')) else bool(input_int('I1')))

var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn40 = function (x36, s11, b17, b16, x1) {
    var x33 = x1;
    var b4 = b16;
    var e8 = "eval(\"var b2 = (x1) ? true : false;var b5 = false; if (!(b2) != b4) { b5 = true; }b5\")";
    var e37 = "x36";
    var b38 = (eval(e37)) ? true : false;
    var x39;
    if (eval(e8)) {
        var b9 = b16;
        var opts13 = ['KAGPe', 'q', 'ATNMZ', 'airns', 'c', 'Q', '0e'];
        var b12 = false;
        for (var idx14 = 0; idx14 < opts13.length; idx14++) {
            if (opts13[idx14] == s11) {
                b12 = true;
                break;
            }
        }
        var x15 = (b12) ? 1 : 0;
        var e26 = "eval(\"(eval(\\\"var s18 = '' + (b17);var l19 = (s18).length;var b20 = !!(l19);var b21 = b16; var b22 = b20;b21 || b22\\\")) ? 1 : 0\")";
        var b27;
        if (x15 === eval(e26)) {
            b27 = true;
        } else {
            b27 = false;
        }
        var b29 = !(b27);
        x31 = +(b9) * Number(b29);
        var b34;
        if (x31 <= x33) {
            b34 = true;
        } else {
            b34 = false;
        }
        x39 = b34;
    } else {
        x39 = b38;
    }
    return x39;
}
fn40(input_I1, input_S3, input_B1, input_B2, input_I2);
