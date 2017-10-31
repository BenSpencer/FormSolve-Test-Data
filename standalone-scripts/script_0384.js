// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(input_string('S2'))) then ((str((int(input_string('S3')) < int(bool(input_string('S2'))))) == str(bool(input_int('I2')))) !== (not(input_bool('B1')) && input_bool('B3'))) else bool(int(not((input_int('I1') < input_int('I3'))))))

var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);

function fn36(b22, b19, x12, s4, x28, s1, x27) {
    var s6 = s1;
    var x2 = Number(s1);
    var b3 = !! (x2);
    var e20 = "b19";
    var b23 = false;
    if (!(eval(e20)) && b22) {
        b23 = true;
    }
    var b25 = false;
    if (eval("var x5 = parseInt(s4, 10);var b7 = !!(s6);var b9 = x5; var b10 = +(b7);var b14 = Boolean(eval(\"x12\"));var s15 = (b14).toString();var b16 = false; if (String(b9 < b10) == s15) { b16 = true; }b16") !== b23) {
        b25 = true;
    }
    var e29 = "x28";
    var b30 = false;
    if (x27 < eval(e29)) {
        b30 = true;
    }
    var x35;
    if (b3) {
        x35 = b25;
    } else {
        x35 = (+(!(b30))) ? true : false;
    }
    return x35;
}
fn36(input_B3, input_B1, input_I2, input_S3, input_I3, input_S2, input_I1);
