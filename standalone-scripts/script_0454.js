// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if (input_string('S3') <= input_string('S2')) then (int(not((input_string('S1') > str(not(not(input_bool('B2'))))))) < int(str((if (input_int('I3') == input_int('I2')) then input_int('I2') else int(not(input_bool('B3'))))))) else bool(input_int('I1'))) then input_int('I3') else len(str(len(str(len(str(input_bool('B3'))))))))

var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");

var fn43 = function (b22, s2, x17, x30, x18, s7, b8, s1) {
    var b34 = b22;
    var x33 = x17;
    var e5 = "var b3 = false; if (s1 <= s2) { b3 = true; }b3";
    var e6 = "eval(e5)";
    var x32;
    if (eval(e6)) {
        var b11 = !(!(eval("b8")));
        var b13;
        if (s7 > String(b11)) {
            b13 = true;
        } else {
            b13 = false;
        }
        var b15 = !(b13);
        var x21 = x18;
        var b19;
        if (x17 == x18) {
            b19 = true;
        } else {
            b19 = false;
        }
        var x25;
        if (b19) {
            x25 = x21;
        } else {
            var b23;
            if (b22) {
                b23 = false;
            } else {
                b23 = true;
            }
            x25 = (b23) | 0;
        }
        var s26 = String(x25);
        var x27 = Number(s26);
        x32 = ((b15) ? 1 : 0 < x27);
    } else {
        var b31 = (x30) ? true : false;
        x32 = b31;
    }
    var x42;
    if (x32) {
        x42 = x33;
    } else {
        var e40 = "var l38 = ('' + ((String(b34)).length)).length;(l38).toString()";
        var l41 = (eval(e40)).length;
        x42 = l41;
    }
    return x42;
}
fn43(input_B3, input_S2, input_I3, input_I1, input_I2, input_S1, input_B2, input_S3);
