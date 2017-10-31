// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I3') == len(input_string('S3'))) then len(input_string('S2')) else (int((if (regex-test(input_string('S2'), /^E-[0-9](PV|Z)*RGI$/) != bool(input_string('S1'))) then bool(int(input_bool('B1'))) else bool(int(str((if input_bool('B3') then input_bool('B3') else (input_bool('B2') == bool(input_string('S3'))))))))) * input_int('I3')))

var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn42 = function (b21, x1, s25, b17, b24, s10, s13) {
    var s3 = s25;
    var s8 = s10;
    var x37 = x1;
    var e2 = "x1";
    var b6 = eval(e2);
    var b7 = (eval("s3")).length;
    var x41;
    if (b6 == b7) {
        x41 = (s8).length;
    } else {
        x41 = eval("var e11 = \"s10\";var b23 = b21; var x29; if (eval(\"b21\")) { x29 = b23; } else { var b26 = !!(s25);var b27; if (b24 == b26) { b27 = true; } else { b27 = false; } x29 = b27; }var x31 = parseInt('' + (x29), 10);var e32 = \"x31\";var e34 = \"Boolean(eval(e32))\";var x35; if (((eval(e11)).match(/^E-[0-9](PV|Z)*RGI$/) !== null != !!(s13))) {  x35 = (eval(\"(b17) ? 1 : 0\")) ? true : false; } else { x35 = eval(e34); }var x36 = +(x35);x38 = x36 * x37;x38");
    }
    return x41;
}
fn42(input_B3, input_I3, input_S3, input_B1, input_B2, input_S2, input_S1);
