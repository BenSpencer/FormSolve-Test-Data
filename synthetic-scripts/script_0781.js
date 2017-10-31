// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then (input_int('I2') + int(input_bool('B1'))) else int((str(input_bool('B2')) in ['', 'mD3QR', 'kt', '', 'Rl', ''])))

var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);

function fn17(b10, x3, b1) {
    var b6 = b1;
    var x7 = ~~ (b6);
    var x16;
    if (eval("b1")) {
        x16 = (eval("eval(\"x3\")") + x7);
    } else {
        var opts13 = ['', 'mD3QR', 'kt', '', 'Rl', ''];
        var b12 = false;
        for (var idx14 = 0; idx14 < opts13.length; idx14++) {
            if (opts13[idx14] == (b10).toString()) {
                b12 = true;
                break;
            }
        }
        var x15 = ~~ (b12);
        x16 = x15;
    }
    return x16;
}
fn17(input_B2, input_I2, input_B1);
