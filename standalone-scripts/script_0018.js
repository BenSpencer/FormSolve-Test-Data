// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(input_bool('B3'))) then len(str(not(not((if regex-test(input_string('S1'), /^tOBo\W([0-9]|KL)tK\s?cOl$/) then bool((str((str(bool(input_int('I2'))) > str((input_int('I1') == 0)))) + str(int(bool(str((not(bool(input_string('S1'))) !== (bool(input_string('S3')) != regex-test(input_string('S3'), /^[A-Z]*\s(V|W)$/))))))))) else not(bool(int(input_bool('B2'))))))))) else input_int('I1'))

var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);

function fn51(b1, x6, x49, s16, s19, b38) {
    var x9 = x49;
    var b3 = !(!(b1));
    var x50;
    if (b3) {
        x50 = (String(!(eval("var s4 = s16; var re5 = /^tOBo\\W([0-9]|KL)tK\\s?cOl$/;var e40 = \"var x39 = (b38) ? 1 : 0;x39\";var b41 = !!(eval(e40));var x43; if (re5.test(s4)) { var e37 = \"var b10; if (x9 == 0) { b10 = true; } else { b10 = false; }var s12 = '' + (b10);var s15 = String((String((x6) ? true : false) > s12));var e32 = \\\"var s22 = s19; var e20 = \\\\\\\"s19\\\\\\\";var b21 = (eval(e20)) ? true : false;var re23 = new RegExp(\\\\\\\"^[A-Z]*\\\\\\\\\\\\\\\\s(V|W)$\\\\\\\");var b24; if (b21) { if (re23.test(s22)) { b24 = false; } else { b24 = true; } } else { if (re23.test(s22)) { b24 = true; } else { b24 = false; } }var b26 = !((s16) ? true : false); var b27 = b24;var e29 = \\\\\\\"'' + (b26 !== b27)\\\\\\\";Number(!!(eval(e29)))\\\";var s33 = '' + (eval(e32));var x34 = s15 + s33;var b36 = Boolean(x34);b36\"; x43 = eval(e37); } else { x43 = !(b41); }var b44; if (x43) { b44 = false; } else { b44 = true; }b44")))).length;
    } else {
        x50 = x49;
    }
    return x50;
}
fn51(input_B3, input_I2, input_I1, input_S1, input_S3, input_B2);
