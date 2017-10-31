// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I2')) then (input_bool('B1') !== ("" == input_string('S3'))) else (bool((if not(not(bool(int(str(input_int('I2')))))) then str(bool(input_string('S2'))) else "Ql")) == not((if not(bool(len(str((bool(int(input_bool('B1'))) != bool(input_string('S3'))))))) then input_bool('B1') else bool(input_int('I2'))))))

var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn43 = function (s26, b23, x1, s16) {
    var x10 = x1;
    var s5 = s26;
    var b4 = b23;
    var x42;
    if (eval("var b2 = Boolean(x1);b2")) {
        var b6 = false;
        if ("" == s5) {
            b6 = true;
        }
        var b8 = b4;
        var b9 = b6;
        x42 = b8 !== b9;
    } else {
        x42 = eval("var x35 = x10; var s11 = '' + (x10);var x12 = Number(s11);var b14 = !((x12) ? true : false);var b15; if (b14) { b15 = false; } else { b15 = true; }var x20; if (b15) {  x20 = eval(\"'' + ((s16) ? true : false)\"); } else { x20 = \"Ql\"; }var e21 = \"x20\";var b22 = !!(eval(e21));var b34 = b23; var b25 = ((b23) ? 1 : 0) ? true : false;var b27 = (s26) ? true : false;var b28 = b25; var b29 = b27;var l31 = ('' + (b28 != b29)).length;var x37; if (!(!!(l31))) {  x37 = b34; } else { x37 = (x35) ? true : false; }var b38 = !(x37);var b39 = b22 == b38;b39");
    }
    return x42;
}
fn43(input_S3, input_B1, input_I2, input_S2);
