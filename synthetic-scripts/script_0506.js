// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((str(input_int('I1')) >= replace(input_string('S1'), "pcFCI", "EyT8"))) then int(bool(int((input_bool('B3') != (input_int('I3') !== (int(bool(str((if (input_string('S2') != input_string('S3')) then true else (input_bool('B3') != not(input_bool('B1'))))))) + input_int('I2'))))))) else input_int('I3'))

var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);

function fn38(b15, b16, s12, x1, x10, s11, s3, x25) {
    var x36 = x10;
    var e5 = "(s3).replace(\"pcFCI\", \"EyT8\")";
    var b8 = !(((x1).toString() >= eval(e5)));
    var b9 = b15;
    var e21 = "var b13 = false; if (s11 != s12) { b13 = true; }var x20; if (b13) {  x20 = true; } else { var b17 = !(b16); x20 = (b15 != b17); }x20";
    var s22 = String(eval(e21));
    var b23 = (s22) ? true : false;
    var x24 = Number(b23);
    x26 = x24;
    x27 = x25;
    var b28 = false;
    if (x10 !== x26 + x27) {
        b28 = true;
    }
    var b31;
    if (b9 != eval("b28")) {
        b31 = true;
    } else {
        b31 = false;
    }
    var x33 = (b31) | 0;
    var b34 = (x33) ? true : false;
    var x37;
    if (b8) {
        x37 = (b34) ? 1 : 0;
    } else {
        x37 = x36;
    }
    return x37;
}
fn38(input_B3, input_B1, input_S3, input_I1, input_I3, input_S2, input_S1, input_I2);
