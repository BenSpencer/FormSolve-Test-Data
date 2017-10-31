// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then ((int(input_string('S2')) !== int(str(input_int('I2')))) == input_bool('B2')) else (input_string('S1') in ['c', '', 'No', 'gnXUz']))

var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);

function fn18(b10, s2, s13, x4, b1) {
    var e6 = "'' + (x4)";
    var x7 = parseInt(eval(e6), 10);
    var b11;
    if ((parseInt(s2, 10) !== x7)) {
        b11 = b10;
    } else {
        b11 = !b10;
    }
    var x17;
    if (b1) {
        x17 = b11;
    } else {
        var opts15 = ['c', '', 'No', 'gnXUz'];
        var b14 = false;
        for (var idx16 = 0; idx16 < opts15.length; idx16++) {
            if (opts15[idx16] == s13) {
                b14 = true;
                break;
            }
        }
        x17 = b14;
    }
    return x17;
}
fn18(input_B2, input_S2, input_S1, input_I2, input_B3);
