// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((str((if not(bool(int(str(input_bool('B1'))))) then false else bool(input_string('S1')))) in ['', 'Q', 'F', 'F', 'zpr', 'zU', '', 'r9yLK']) && bool(input_string('S3'))) then (input_int('I1') <= int(str(bool(str(input_bool('B2')))))) else input_bool('B3'))

var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);

(function (s7, b20, s15, b1, b32, x19) {
    var b6;
    if (eval("var x3 = parseInt((b1).toString(), 10);(x3) ? true : false")) {
        b6 = false;
    } else {
        b6 = true;
    }
    var x9;
    if (b6) {
        x9 = false;
    } else {
        x9 = !! (s7);
    }
    var s10 = (x9).toString();
    var opts12 = ['', 'Q', 'F', 'F', 'zpr', 'zU', '', 'r9yLK'];
    var b11 = opts12.indexOf(s10) > -1;
    var e14 = "b11";
    var b16 = !! (s15);
    var b17;
    if (eval(e14) && b16) {
        b17 = true;
    } else {
        b17 = false;
    }
    var e31 = "eval(\"(x19 <= Number(eval(\\\"var e24 = \\\\\\\"('' + (eval(\\\\\\\\\\\\\\\"b20\\\\\\\\\\\\\\\"))) ? true : false\\\\\\\";var s25 = '' + (eval(e24));s25\\\")))\")";
    return (b17 ? eval(e31) : b32);
})(input_S1, input_B2, input_S3, input_B1, input_B3, input_I1);
