// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((str((bool(str(input_bool('B1'))) || input_bool('B2'))) in ['xnUYC', 'kB6J', 'Gxay', 'DBmSQ']) == not(bool(input_string('S1')))) then int(input_string('S1')) else input_int('I3'))

var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn20 = function (x18, b4, s11, b1) {
    var s16 = s11;
    var s2 = '' + (b1);
    var b3 = !! (s2);
    var b5 = b3;
    var b6 = b4;
    var s7 = (b5 || b6).toString();
    var opts9 = ['xnUYC', 'kB6J', 'Gxay', 'DBmSQ'];
    var b8 = false;
    for (var idx10 = 0; idx10 < opts9.length; idx10++) {
        if (opts9[idx10] == s7) {
            b8 = true;
            break;
        }
    }
    var b14 = b8;
    var b15 = !( !! (s11));
    var x19;
    if (b14 == b15) {
        x19 = parseInt(s16, 10);
    } else {
        x19 = x18;
    }
    return x19;
}
fn20(input_I3, input_B2, input_S1, input_B1);
