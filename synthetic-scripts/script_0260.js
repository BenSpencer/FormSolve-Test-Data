// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then int((int(bool(int(not(bool((if input_bool('B3') then (if not(input_bool('B1')) then input_int('I2') else int(str(input_int('I3')))) else int(input_string('S1')))))))) !== input_int('I3'))) else int(bool(int(str((int((input_bool('B2') !== bool(input_int('I2')))) >= input_int('I1')))))))

var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);

function fn53(x21, s20, x19, b33, b1, x43, b22) {
    var x34 = x19;
    var b18 = b1;
    var x52;
    if (b1) {
        var x29 = x21;
        var x26 = +(eval("var fn17 = Function('b2', 'x11', 's14', 'x12', 'b13', \"var fn10 = function(x5, x6, b3) { var b4 = !(b3);var x9; if (b4) {  x9 = x5; } else { var s7 = (x6).toString(); x9 = parseInt(s7, 10); } return x9; } var x15 = parseInt(s14, 10);var x16; if (b2) { x16 = fn10(x11, x12, b13); } else { x16 = x15; } return x16;\"); var b24 = !(!!(fn17(b18, x19, s20, x21, b22)));b24"));
        var b27 = !! (x26);
        var b30 = false;
        if ((b27) | 0 !== x29) {
            b30 = true;
        }
        var x32 = (b30) ? 1 : 0;
        x52 = x32;
    } else {
        var e46 = "var e41 = \"eval(\\\"eval(\\\\\\\"var b36 = false; if (b33 !== !!(x34)) { b36 = true; }var e38 = \\\\\\\\\\\\\\\"b36\\\\\\\\\\\\\\\";eval(e38)\\\\\\\")\\\")\";var b44 = (eval(e41)) | 0; var b45 = x43;b44 >= b45";
        var x49 = parseInt((eval("eval(e46)")).toString(), 10);
        var x51 = Number(Boolean(x49));
        x52 = x51;
    }
    return x52;
}
fn53(input_I3, input_S1, input_I2, input_B2, input_B3, input_I1, input_B1);
