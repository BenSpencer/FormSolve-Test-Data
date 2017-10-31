// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B2')) then str((str(input_int('I2')) in ['pJ', '', 'S', 'SF', 'aD', 'Kn', 'bXhJZ', 'C'])) else str(input_bool('B1')))

var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn13 = function (b10, b1, x4) {
    var x12;
    if (eval("var b2; if (b1) { b2 = false; } else { b2 = true; }b2")) {
        var s5 = '' + (x4);
        var opts7 = ['pJ', '', 'S', 'SF', 'aD', 'Kn', 'bXhJZ', 'C'];
        var b6 = false;
        for (var idx8 = 0; idx8 < opts7.length; idx8++) {
            if (opts7[idx8] == s5) {
                b6 = true;
                break;
            }
        }
        var s9 = (b6).toString();
        x12 = s9;
    } else {
        var s11 = String(b10);
        x12 = s11;
    }
    return x12;
}
fn13(input_B1, input_B2, input_I2);
