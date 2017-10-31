// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then not(bool(str(int(bool((if (int(bool(input_string('S3'))) >= len(input_string('S3'))) then input_string('S1') else str(not((input_int('I2') == input_int('I3')))))))))) else input_bool('B2'))

var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);

function fn30(x11, s10, b1, b28, s2, x12) {
    var b27 = !(Boolean(eval("var e9 = \"var s5 = s2; var b3 = (s2) ? true : false;var l6 = (s5).length;((b3) ? 1 : 0 >= l6)\";var x20; if (eval(e9)) {  x20 = s10; } else { var e14 = \"eval(\\\"x12\\\")\";var b15 = false; if (x11 == eval(e14)) { b15 = true; }var b17 = !(b15);var s18 = '' + (b17);var e19 = \"s18\"; x20 = eval(e19); }var b21 = !!(x20);var s24 = String(+(eval(\"b21\")));s24")));
    var x29;
    if (b1) {
        x29 = b27;
    } else {
        x29 = b28;
    }
    return x29;
}
fn30(input_I2, input_S1, input_B1, input_B2, input_S3, input_I3);
