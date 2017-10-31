// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(input_string('S3'))) then int(not((input_int('I3') <= len(str((str(int(not(input_bool('B1')))) == input_string('S1'))))))) else len(input_string('S2')))

var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);

function fn31(x4, s16, s27, s1, b5) {
    var x2 = Number(s1);
    var e24 = "var b17 = eval(\"eval(\\\"var e13 = \\\\\\\"var x9 = ~~(eval(\\\\\\\\\\\\\\\"var e7 = \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"var b6; if (b5) { b6 = false; } else { b6 = true; }b6\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\";eval(e7)\\\\\\\\\\\\\\\"));eval(\\\\\\\\\\\\\\\"'' + (eval(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"x9\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"))\\\\\\\\\\\\\\\")\\\\\\\";eval(e13)\\\")\") == s16;var s19 = (b17).toString();var l20 = (s19).length;var b21 = false; if (x4 <= l20) { b21 = true; }var e23 = \"b21\";eval(e23)";
    var x26 = Number(!(eval(e24)));
    var x30;
    if (Boolean(x2)) {
        x30 = x26;
    } else {
        x30 = eval("(s27).length");
    }
    return x30;
}
fn31(input_I3, input_S1, input_S2, input_S3, input_B1);
