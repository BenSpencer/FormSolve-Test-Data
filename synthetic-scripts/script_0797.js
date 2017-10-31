// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (true === input_bool('B1')) then input_bool('B1') else input_bool('B2'))

var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);

var fn8 = function (b1, b6) {
    var b5 = b1;
    var b3;
    if (true === eval("b1")) {
        b3 = true;
    } else {
        b3 = false;
    }
    return (b3 ? b5 : b6);
}
fn8(input_B1, input_B2);
