// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then not(input_bool('B2')) else ((int(input_bool('B2')) === input_int('I3')) === input_bool('B2')))

var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);

(function (b10, x7, b1) {
    var b2 = b10;
    var b4 = b10;
    var b8 = eval("Number(b4)") === x7;
    var x14;
    if (b1) {
        var b3;
        if (b2) {
            b3 = false;
        } else {
            b3 = true;
        }
        x14 = b3;
    } else {
        x14 = (b8 === eval("b10"));
    }
    return x14;
})(input_B2, input_I3, input_B3);
