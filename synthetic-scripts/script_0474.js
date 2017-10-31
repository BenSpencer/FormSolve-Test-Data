// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(int((if not(bool(len(input_string('S2')))) then str(input_bool('B3')) else "5v"))) !== str((if not(bool(str(input_bool('B1')))) then not((input_int('I1') <= input_int('I3'))) else not(input_bool('B2'))))) then (if bool(int(input_string('S1'))) then input_bool('B1') else (input_bool('B2') !== input_bool('B3'))) else not(input_bool('B3')))

var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);

function fn45(b13, b38, b25, x17, x18, s33, s1) {
    var b36 = b13;
    var b42 = b38;
    var b5 = b38;
    var b37 = b25;
    var l2 = (s1).length;
    var b4 = !( !! (l2));
    var x10;
    if (b4) {
        x10 = eval("var e7 = \"var e6 = \\\"b5\\\";eval(e6)\";'' + (eval(e7))");
    } else {
        x10 = "5v";
    }
    var s12 = String(Number(x10));
    var b16 = !(((b13).toString()) ? true : false);
    var e27 = "var e26 = \"b25\";eval(e26)";
    var x29;
    if (b16) {
        var e20 = "eval(\"x18\")";
        var b21 = x17 <= eval(e20);
        var e24 = "!(b21)";
        x29 = eval(e24);
    } else {
        x29 = !(eval(e27));
    }
    var x44;
    if ((s12 !== (x29).toString())) {
        var x34 = Number(s33);
        var b35 = Boolean(x34);
        var x41;
        if (b35) {
            x41 = b36;
        } else {
            var b39 = b37;
            var b40 = b38;
            x41 = b39 !== b40;
        }
        x44 = x41;
    } else {
        x44 = !(b42);
    }
    return x44;
}
fn45(input_B1, input_B3, input_B2, input_I1, input_I3, input_S1, input_S2);
