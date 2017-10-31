// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if (bool(len(input_string('S2'))) == bool(str(input_int('I1')))) then not(input_bool('B1')) else bool(input_string('S2'))) then (str(((str(not(not(bool(input_int('I3'))))) > str((input_string('S2') in ['YcI', '0dRZ', '9C8n', 'PEAef', 'BqFx', 'rnVwm', 'N']))) == (input_bool('B1') == bool(input_int('I2'))))) >= str(input_int('I1'))) else false)

var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);

function fn45(x33, b10, x4, s1, x17) {
    var x40 = x4;
    var s23 = s1;
    var b31 = b10;
    var s12 = s1;
    var b3 = !! ((s1).length);
    var s6 = '' + (eval("x4"));
    var b7 = !! (s6);
    var b8;
    if (b3) {
        b8 = b7;
    } else {
        b8 = !b7;
    }
    var b11;
    if (b10) {
        b11 = false;
    } else {
        b11 = true;
    }
    var b13 = Boolean(s12);
    var e15 = "eval(\"b13\")";
    var e22 = "var b18 = (x17) ? true : false;(!(!(b18))).toString()";
    var b29 = false;
    if (eval(e22) > eval("var opts25 = ['YcI', '0dRZ', '9C8n', 'PEAef', 'BqFx', 'rnVwm', 'N'];var s27 = (opts25.indexOf(s23) > -1).toString();s27")) {
        b29 = true;
    }
    var e32 = "b31";
    var b34 = Boolean(x33);
    var b35;
    if (eval(e32) == b34) {
        b35 = true;
    } else {
        b35 = false;
    }
    var b37 = false;
    if (b29 == b35) {
        b37 = true;
    }
    var s39 = String(b37);
    var s41 = '' + (x40);
    var b42;
    if (s39 >= s41) {
        b42 = true;
    } else {
        b42 = false;
    }
    var x44;
    if ((b8 ? b11 : eval(e15))) {
        x44 = b42;
    } else {
        x44 = false;
    }
    return x44;
}
fn45(input_I2, input_B1, input_I1, input_S2, input_I3);
