// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then bool(str(input_bool('B3'))) else (input_int('I2') == int((str((int(str(input_bool('B3'))) <= int(not((if input_bool('B3') then true else not(bool(input_string('S2')))))))) != str(not((input_bool('B1') && (if bool(input_int('I1')) then bool(input_int('I1')) else bool(str(int(input_bool('B2'))))))))))))

var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");

function fn49(x22, s12, x5, b11, b1, b21) {
    var b2 = b11;
    var b30 = b1;
    var s3 = String(b2);
    var x48;
    if (b1) {
        x48 = (s3) ? true : false;
    } else {
        x48 = eval("var b7 = b11; var x10 = parseInt(eval(\"(b7).toString()\"), 10);var x15; if (b11) { x15 = true; } else { var b13 = Boolean(s12); x15 = !(b13); }var b18 = x10 <= (!(x15)) ? 1 : 0;var s20 = '' + (b18);var s41 = '' + (eval(\"var x26 = x22; var e25 = \\\"var e23 = \\\\\\\"x22\\\\\\\";var b24 = !!(eval(e23));b24\\\";var x35; if (eval(e25)) { var e29 = \\\"!!(eval(\\\\\\\"x26\\\\\\\"))\\\"; x35 = eval(e29); } else { var e31 = \\\"b30\\\";var x32 = +(eval(e31)); x35 = !!('' + (x32)); }var b36; if (b21 && x35) { b36 = true; } else { b36 = false; }var e39 = \\\"!(b36)\\\";eval(e39)\"));var b42 = s20; var b43 = s41;var b45; if (eval(\"x5\") == ~~(b42 != b43)) { b45 = true; } else { b45 = false; }b45");
    }
    return x48;
}
fn49(input_I1, input_S2, input_I2, input_B3, input_B2, input_B1);
