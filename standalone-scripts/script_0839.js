// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((int(not(not((str(input_int('I1')) <= "5FBkZ")))) in [0, 1, 7, 0, 1, 1]) != bool(str(not(input_bool('B1'))))) then (if input_bool('B2') then (if not(bool(input_string('S3'))) then input_bool('B2') else not((str(bool(int(input_string('S2')))) <= input_string('S1')))) else bool(len(str(input_int('I3'))))) else input_bool('B2'))

var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");

function fn43(b19, x1, s31, s27, s20, b11, x36) {
    var b41 = b19;
    var b5;
    if ((String(x1) <= "5FBkZ")) {
        b5 = false;
    } else {
        b5 = true;
    }
    var b6;
    if (b5) {
        b6 = false;
    } else {
        b6 = true;
    }
    var opts9 = [0, 1, 7, 0, 1, 1];
    var b8 = false;
    for (var idx10 = 0; idx10 < opts9.length; idx10++) {
        if (opts9[idx10] == ~~(b6)) {
            b8 = true;
            break;
        }
    }
    var e14 = "var e12 = \"b11\";var b13; if (eval(e12)) { b13 = false; } else { b13 = true; }b13";
    var s15 = String(eval(e14));
    var b16 = (s15) ? true : false;
    var b17;
    if (b8) {
        b17 = !b16;
    } else {
        b17 = b16;
    }
    var b24 = b19;
    var e21 = "s20";
    var b22 = !! (eval(e21));
    var b23 = !(b22);
    var x28 = Number(s27);
    var s30 = String(Boolean(x28));
    var b32 = s30 <= s31;
    var b34 = !(b32);
    var x35;
    if (b23) {
        x35 = eval("eval(\"b24\")");
    } else {
        x35 = b34;
    }
    var x40;
    if (b19) {
        x40 = x35;
    } else {
        x40 = !! (('' + (x36)).length);
    }
    var x42;
    if (b17) {
        x42 = x40;
    } else {
        x42 = b41;
    }
    return x42;
}
fn43(input_B2, input_I1, input_S1, input_S2, input_S3, input_B1, input_I3);
