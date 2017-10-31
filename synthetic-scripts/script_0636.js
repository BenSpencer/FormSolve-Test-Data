// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then str(((if (if input_bool('B2') then bool(input_string('S3')) else input_bool('B3')) then (not(input_bool('B1')) != ((bool(str(bool(len(str((if ((input_int('I2') >= int(bool(str((bool(input_string('S3')) === input_bool('B1')))))) !== input_bool('B2')) then input_bool('B3') else true)))))) || input_bool('B2')) || not(not((bool(int(input_bool('B2'))) !== input_bool('B3')))))) else bool(str((input_int('I1') in [1, 6, 1, 25, 70, 87, 1])))) === input_bool('B1'))) else str(int(input_string('S2'))))

var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);

function fn70(s10, b1, x9, x52, s64, b2, b13) {
    var b25 = b1;
    var x69;
    if (b1) {
        var b60 = b13;
        var s3 = s10;
        var b5 = b25;
        var b21 = b2;
        var x6;
        if (b2) {
            x6 = (s3) ? true : false;
        } else {
            x6 = b5;
        }
        var b7 = b13;
        var b8 = !(b7);
        var b41 = b25;
        var b38 = b21;
        var e37 = "var b34 = b21; var e30 = \"var b11 = Boolean(s10);var b14 = eval(\\\"b11\\\"); var b15 = b13;var s16 = String(b14 === b15);var b19 = false; if (x9 >= (Boolean(s16)) | 0) { b19 = true; }var b22; if (b19 !== b21) { b22 = true; } else { b22 = false; }var x26; if (eval(\\\"b22\\\")) { x26 = b25; } else { x26 = true; }Boolean(((x26).toString()).length)\";var e32 = \"String(eval(e30))\";var b35 = false; if (Boolean(eval(e32)) || b34) { b35 = true; }b35";
        var b40 = ((b38) ? 1 : 0) ? true : false;
        var b42;
        if (b40 !== b41) {
            b42 = true;
        } else {
            b42 = false;
        }
        var b44;
        if (b42) {
            b44 = false;
        } else {
            b44 = true;
        }
        var b45;
        if (b44) {
            b45 = false;
        } else {
            b45 = true;
        }
        var e47 = "eval(\"b45\")";
        var b48 = eval(e37) || eval(e47);
        var b50 = false;
        if (b8 != b48) {
            b50 = true;
        }
        var opts54 = [1, 6, 1, 25, 70, 87, 1];
        var e56 = "opts54.indexOf(x52) > -1";
        var b58 = !! ('' + (eval(e56)));
        var b61;
        if ((x6 ? b50 : b58) === b60) {
            b61 = true;
        } else {
            b61 = false;
        }
        var s63 = String(b61);
        x69 = s63;
    } else {
        var e65 = "s64";
        var x66 = parseInt(eval(e65), 10);
        var s68 = '' + (eval("x66"));
        x69 = s68;
    }
    return x69;
}
fn70(input_S3, input_B3, input_I2, input_I1, input_S2, input_B2, input_B1);
