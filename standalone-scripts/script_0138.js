// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((input_int('I2') < len(str(bool(str(input_int('I3'))))))) then (int(str(bool(len(input_string('S2'))))) >= int((if (int(str(input_bool('B2'))) in [1, -39, 0, 5, 0, 41, 1]) then true else (int(bool(input_string('S3'))) == input_int('I2'))))) else input_bool('B1'))

var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");

function fn31(x27, b17, s24) {
    var e18 = "b17";
    var x20 = Number(String(eval(e18)));
    var opts22 = [1, -39, 0, 5, 0, 41, 1];
    var b21 = false;
    for (var idx23 = 0; idx23 < opts22.length; idx23++) {
        if (opts22[idx23] == x20) {
            b21 = true;
        }
    }
    var x30;
    if (b21) {
        x30 = true;
    } else {
        var b25 = !! (s24);
        var x26 = (b25) ? 1 : 0;
        x30 = (x26 == x27);
    }
    return x30;
}
var fn40 = Function('x2', 'b33', 's34', 'b38', 'x1', 's11', "var x32 = x1; var s3 = (x2).toString();var e5 = \"!!(s3)\";var s6 = '' + (eval(e5));var b8; if (x1 < (s6).length) { b8 = true; } else { b8 = false; }var e13 = \"(s11).length\";var x16 = Number(String(Boolean(eval(e13))));var x35 = (fn31(x32, b33, s34)) | 0;var b36; if (x16 >= x35) { b36 = true; } else { b36 = false; }var x39; if (!(b8)) { x39 = b36; } else {  x39 = b38; } return x39;");
fn40(input_I3, input_B2, input_S3, input_B1, input_I2, input_S2);
