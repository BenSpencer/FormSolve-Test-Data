// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((int(input_bool('B2')) === int(bool(str(input_int('I2')))))) then input_bool('B1') else (if bool(input_int('I3')) then ((int(bool(int(input_bool('B2')))) < (int((if not(input_bool('B1')) then input_bool('B2') else (if bool(int(input_string('S1'))) then (bool(str(int(input_bool('B1')))) !== input_bool('B1')) else input_bool('B2')))) / input_int('I3'))) || regex-test(str(not(input_bool('B2'))), /^(v|[A-Z])?$/)) else input_bool('B2')))

var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);

function fn56(x3, x12, s24, b1, b11) {
    var b15 = b1;
    var b21 = b11;
    var x2 = +(b1);
    var e6 = "var b5 = Boolean((x3).toString());b5";
    var b8 = x2;
    var b9 = +(eval(e6));
    var b10;
    if (b8 === b9) {
        b10 = false;
    } else {
        b10 = true;
    }
    var x55;
    if (b10) {
        x55 = b11;
    } else {
        var b53 = b15;
        var x40 = x12;
        var e14 = "!!(x12)";
        var b47 = b15;
        var b48;
        if (b47) {
            b48 = false;
        } else {
            b48 = true;
        }
        var re50 = new RegExp("^(v|[A-Z])?$");
        var b51;
        if (eval("eval(\"var b23 = b15; var e16 = \\\"b15\\\";var x17 = +(eval(e16));var x19 = (!!(x17)) | 0;var e20 = \\\"x19\\\";var b36 = b23; var b28 = b21; var b22 = !(b21);var x38; if (b22) { x38 = b23; } else { var e27 = \\\"var x25 = parseInt(s24, 10);Boolean(x25)\\\";var b32 = b28; var x29 = (b28) ? 1 : 0;var b31 = !!(String(x29));var e33 = \\\"b32\\\";var x37; if (eval(e27)) { x37 = (b31 !== eval(e33)); } else { x37 = b36; } x38 = x37; }x41 = +(x38) / x40;(eval(e20) < x41)\")")) {
            b51 = true;
        } else {
            b51 = re50.test((b48).toString());
        }
        var x54;
        if (eval(e14)) {
            x54 = b51;
        } else {
            x54 = b53;
        }
        x55 = x54;
    }
    return x55;
}
fn56(input_I2, input_I3, input_S1, input_B2, input_B1);
