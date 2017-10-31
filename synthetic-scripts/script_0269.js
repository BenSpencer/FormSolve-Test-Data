// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(bool(str(int(str(bool(input_string('S1')))))))) then bool((if input_bool('B3') then str(not((int(str(input_int('I3'))) == int(input_string('S1'))))) else str((str(input_int('I3')) != input_string('S1'))))) else input_bool('B1'))

var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn34 = function (b32, x13, b11, s1) {
    var s18 = s1;
    var s7 = String(eval("var e2 = \"s1\";var b3 = !!(eval(e2));var x5 = Number((b3).toString());x5"));
    var b8 = (s7) ? true : false;
    var s9 = '' + (b8);
    var x24 = x13;
    var s26 = s18;
    var e12 = "b11";
    var x17 = parseInt('' + (eval("eval(\"x13\")")), 10);
    var b22 = !((x17 == Number(s18)));
    var s23 = String(b22);
    var b27 = false;
    if (String(x24) != s26) {
        b27 = true;
    }
    var s29 = String(b27);
    var x30;
    if (eval(e12)) {
        x30 = s23;
    } else {
        x30 = s29;
    }
    var x33;
    if ((s9) ? true : false) {
        x33 = !! (x30);
    } else {
        x33 = b32;
    }
    return x33;
}
fn34(input_B1, input_I3, input_B3, input_S1);
