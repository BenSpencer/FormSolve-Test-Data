// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((int(bool(int((if bool((if bool(int((if not((input_bool('B1') === input_bool('B1'))) then (int(input_bool('B1')) != 3) else bool(input_int('I2'))))) then input_string('S2') else input_string('S1'))) then false else bool(len(str(int(not((input_int('I1') < 0)))))))))) > input_int('I2')) !== not(input_bool('B3'))) then "9TRv" else str(input_bool('B3')))

var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn31 = function (s17, x10, s15, b1, x21) {
    var b6 = b1;
    var b2 = b1;
    var b3;
    if (b1 === b2) {
        b3 = true;
    } else {
        b3 = false;
    }
    var b5 = !(b3);
    var x12;
    if (b5) {
        var b8 = (b6) ? 1 : 0;
        var b9 = 3;
        x12 = b8 != b9;
    } else {
        x12 = Boolean(x10);
    }
    var x13 = ~~ (x12);
    var b14 = Boolean(x13);
    var x18;
    if (b14) {
        x18 = eval("s15");
    } else {
        x18 = s17;
    }
    var b19 = Boolean(x18);
    var e20 = "b19";
    var x30;
    if (eval(e20)) {
        x30 = false;
    } else {
        x30 = eval("var b22 = x21 < 0;(((Number(!(b22))).toString()).length) ? true : false");
    }
    return x30;
}
var fn56 = Function('b35', 'x36', 's32', 'b46', 's34', 'x33', "var b51 = b46; var x43 = x33; var b44 = (eval(\"var e37 = \\\"fn31(s32, x33, s34, b35, x36)\\\";var x38 = +(eval(e37));var b39 = Boolean(x38);var e40 = \\\"b39\\\";eval(e40)\")) ? 1 : 0 > x43;var e47 = \"b46\";var b49; if (b44 !== !(eval(e47))) { b49 = true; } else { b49 = false; }var x55; if (b49) { x55 = \"9TRv\"; } else { var e54 = \"eval(\\\"'' + (b51)\\\")\"; x55 = eval(e54); } return x55;");
fn56(input_B1, input_I1, input_S1, input_B3, input_S2, input_I2);
