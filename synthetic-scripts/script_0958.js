// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I1')) then (if bool(int(input_bool('B1'))) then not(((input_string('S3') <= str(int(input_bool('B1')))) === bool(input_string('S3')))) else (bool(input_string('S2')) != input_bool('B1'))) else bool(int((if bool(input_int('I2')) then not(input_bool('B2')) else bool(int(str(not(input_bool('B1')))))))))

var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);

function fn39(x1, b28, x26, b21, s12, s19) {
    var b30 = b21;
    var b3 = b21;
    var b7 = b21;
    var x4 = ~~ (b3);
    var e24 = "var b22; if ((s19) ? true : false) { b22 = !b21; } else { b22 = b21; }b22";
    var x25;
    if ((x4) ? true : false) {
        var e17 = "var s6 = s12; var x8 = Number(b7);var s9 = String(x8);var b13 = Boolean(s12);var b14 = (s6 <= s9) === b13;var e16 = \"b14\";eval(e16)";
        x25 = !(eval(e17));
    } else {
        x25 = eval(e24);
    }
    var x38;
    if ((x1) ? true : false) {
        x38 = x25;
    } else {
        var b29;
        if (b28) {
            b29 = false;
        } else {
            b29 = true;
        }
        var b31 = !(b30);
        var s32 = (b31).toString();
        var x33 = Number(s32);
        x38 = Boolean(+(( !! (x26) ? b29 : Boolean(x33))));
    }
    return x38;
}
fn39(input_I1, input_B2, input_I2, input_B1, input_S3, input_S2);
