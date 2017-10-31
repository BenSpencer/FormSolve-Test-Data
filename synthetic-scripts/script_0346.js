// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(str((str((str(not(input_bool('B3'))) === input_string('S1'))) > str(int((input_int('I1') in [9, 65, 81, 10, 88, 8, 0, 79, 1]))))))) then input_bool('B2') else input_bool('B2'))

var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);

var fn26 = function (s6, b23, x10, b1) {
    var b24 = b23;
    var e5 = "var e2 = \"b1\";'' + (!(eval(e2)))";
    var b7 = eval(e5);
    var b8 = s6;
    var opts12 = [9, 65, 81, 10, 88, 8, 0, 79, 1];
    var b11 = false;
    for (var idx13 = 0; idx13 < opts12.length; idx13++) {
        if (opts12[idx13] == x10) {
            b11 = true;
            break;
        }
    }
    var e15 = "(b11) ? 1 : 0";
    var s16 = String(eval(e15));
    var b17 = false;
    if ((b7 === b8).toString() > s16) {
        b17 = true;
    }
    var s19 = '' + (b17);
    var b20 = (s19) ? true : false;
    var x25;
    if (eval("!(b20)")) {
        x25 = b23;
    } else {
        x25 = b24;
    }
    return x25;
}
fn26(input_S1, input_B2, input_I1, input_B3);
