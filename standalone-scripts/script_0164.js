// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B2')) then regex-test(str(bool(str(len(str(bool(int(str(int(str((input_int('I3') <= int(not(not(not(bool(input_string('S2'))))))))))))))))), /^([a-z]+B|H)tP$/) else input_bool('B3'))

var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");

function fn27(b1, x3, b25, s4) {
    var b2;
    if (b1) {
        b2 = false;
    } else {
        b2 = true;
    }
    var x26;
    if (b2) {
        var b7 = !(eval("var b5 = !!(s4);b5"));
        var b9 = !(!(b7));
        var b11 = x3;
        var b12 = (b9) ? 1 : 0;
        var s16 = '' + (eval("Number('' + (b11 <= b12))"));
        var x17 = parseInt(s16, 10);
        var b22 = Boolean('' + ((String( !! (x17))).length));
        var s23 = '' + (b22);
        var re24 = new RegExp("^([a-z]+B|H)tP$");
        x26 = re24.test(s23);
    } else {
        x26 = b25;
    }
    return x26;
}
fn27(input_B2, input_I3, input_B3, input_S2);
