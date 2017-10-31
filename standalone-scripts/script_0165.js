// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool((input_int('I3') - int((input_bool('B3') != (int(bool(int(input_bool('B1')))) <= len(str(int(((int((input_int('I1') in [1, 0, 4, 0, 0])) <= input_int('I3')) && bool(int(str(input_bool('B2'))))))))))))) then input_string('S1') else str(input_bool('B1')))

var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn36 = function (x1, b3, s32, x7, b15, b2) {
    var b33 = b3;
    var x12 = x1;
    var x6 = Number(Boolean(Number(b3)));
    var opts9 = [1, 0, 4, 0, 0];
    var b8 = opts9.indexOf(x7) > -1;
    var x11 = (b8) ? 1 : 0;
    var b13 = false;
    if (x11 <= x12) {
        b13 = true;
    }
    var b18 = !! (Number((b15).toString()));
    var b19;
    if (b13 && b18) {
        b19 = true;
    } else {
        b19 = false;
    }
    var b24 = false;
    if (x6 <= (String(~~(b19))).length) {
        b24 = true;
    }
    var b26 = b2;
    var b27 = b24;
    var x28 = (b26 != b27) | 0;
    x29 = x1;
    x30 = x28;
    var x35;
    if (Boolean(x29 - x30)) {
        x35 = s32;
    } else {
        x35 = (b33).toString();
    }
    return x35;
}
fn36(input_I3, input_B1, input_S1, input_I1, input_B2, input_B3);
