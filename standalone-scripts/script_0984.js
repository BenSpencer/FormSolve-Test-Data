// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(bool(input_int('I3')))) then int(str(input_bool('B3'))) else int(str(input_bool('B1'))))

var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn12 = Function('b5', 'x1', 'b8', "var x3 = (!!(x1)) | 0;var s6 = String(b5);var x10 = parseInt('' + (b8), 10);var x11; if ((x3) ? true : false) { x11 = Number(s6); } else { x11 = x10; } return x11;");
fn12(input_B3, input_I3, input_B1);
