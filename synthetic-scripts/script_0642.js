// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S1')) then input_int('I1') else len(str(int((input_int('I3') in [112, 167, 0, 83, 84, 0, 0, 68, 14])))))

var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn12 = function (x4, x3, s1) {
    var b2 = Boolean(s1);
    var x11;
    if (b2) {
        x11 = x3;
    } else {
        var opts6 = [112, 167, 0, 83, 84, 0, 0, 68, 14];
        var b5 = false;
        for (var idx7 = 0; idx7 < opts6.length; idx7++) {
            if (opts6[idx7] == x4) {
                b5 = true;
            }
        }
        var x8 = +(b5);
        var s9 = (x8).toString();
        x11 = (s9).length;
    }
    return x11;
}
fn12(input_I3, input_I1, input_S1);
