// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool((int(input_bool('B1')) - int(not(not(not(input_bool('B3')))))))) then bool(str((input_string('S2') > str((regex-test((if bool(str(bool(input_int('I2')))) then str(len(str(bool(input_int('I3'))))) else input_string('S2')), /^\WVMtZ(U|clT crl[A-Z]dL)u\s*I$/) !== (len(input_string('S3')) == int(input_bool('B3')))))))) else input_bool('B2'))

var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

function fn49(s15, b35, b47, b1, x17, s33, x21) {
    var b4 = b35;
    var e14 = "var b6; if (!(b4)) { b6 = false; } else { b6 = true; }var b12 = !!(eval(\"(eval(\\\"~~(b1)\\\") - Number(!(b6)))\"));!(b12)";
    var e45 = "var s30 = s15; var b18 = !!(x17);var s19 = '' + (b18);var s29 = String(eval(\"eval(\\\"var l26 = (eval(\\\\\\\"var e22 = \\\\\\\\\\\\\\\"x21\\\\\\\\\\\\\\\";String((eval(e22)) ? true : false)\\\\\\\")).length;l26\\\")\"));var x31; if (!!(s19)) { x31 = s29; } else {  x31 = s30; }var b37 = (s33).length == ~~(b35);var b39 = false; if ((x31).match(/^\\WVMtZ(U|clT crl[A-Z]dL)u\\s*I$/) !== null !== b37) { b39 = true; }var s41 = (b39).toString();var s44 = ((eval(\"s15\") > s41)).toString();s44";
    var b46 = Boolean(eval(e45));
    var x48;
    if (eval(e14)) {
        x48 = b46;
    } else {
        x48 = b47;
    }
    return x48;
}
fn49(input_S2, input_B3, input_B2, input_B1, input_I2, input_S3, input_I3);
