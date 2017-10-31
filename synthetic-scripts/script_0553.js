// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((if (len(str((not(bool(input_int('I2'))) || not((input_int('I2') in [3, -25, 10, 17, 1, 1, 66]))))) in [0, 3, 0]) then input_bool('B2') else bool(int(input_string('S2')))) !== bool(str(input_int('I1')))) then (if (if not((str(input_bool('B1')) <= input_string('S2'))) then bool(input_string('S1')) else input_bool('B1')) then not(input_bool('B1')) else input_bool('B3')) else input_bool('B2'))

var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");

function fn51(s37, b30, s18, x1, b16, b44, x25) {
    var s32 = s18;
    var b47 = b16;
    var s26 = (x25).toString();
    var b28 = eval("var x4 = x1; var opts6 = [3, -25, 10, 17, 1, 1, 66];var b5 = false; for (var idx7 = 0; idx7 < opts6.length; idx7++) { if (opts6[idx7] == x4) { b5 = true; } }var b9; if (!(b5)) { b9 = true; } else { var b2 = Boolean(x1); b9 = !(b2); }var opts14 = [0, 3, 0];var e19 = \"s18\";var x22; if (opts14.indexOf(((b9).toString()).length) > -1) {  x22 = eval(\"b16\"); } else { x22 = !!(Number(eval(e19))); }var e23 = \"x22\";eval(e23)") !== !! (s26);
    var b41 = b30;
    var b39 = b30;
    var s31 = String(b30);
    var e33 = "s32";
    var b34 = s31 <= eval(e33);
    var b38 = (s37) ? true : false;
    var x40;
    if (!(b34)) {
        x40 = b38;
    } else {
        x40 = b39;
    }
    var x46;
    if (x40) {
        var b43 = !(eval("b41"));
        x46 = b43;
    } else {
        x46 = eval("b44");
    }
    var x50;
    if (b28) {
        x50 = x46;
    } else {
        x50 = eval("eval(\"b47\")");
    }
    return x50;
}
fn51(input_S1, input_B1, input_S2, input_I2, input_B2, input_B3, input_I1);
