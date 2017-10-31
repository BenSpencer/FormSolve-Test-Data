// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I1')) then str(not(not((input_int('I1') <= int((int((input_bool('B1') == not(input_bool('B3')))) === input_int('I2'))))))) else str(input_bool('B1')))

var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn24 = function (x1, b21, b6, x12) {
    var x3 = x1;
    var b5 = b21;
    var b7;
    if (b6) {
        b7 = false;
    } else {
        b7 = true;
    }
    var b8 = b5;
    var b9 = b7;
    var e10 = "b8 == b9";
    var b13 = (eval(e10)) | 0;
    var b14 = x12;
    var x15 = ~~ (b13 === b14);
    var b16 = eval("x3") <= x15;
    var b19 = !(!(b16));
    var s20 = (b19).toString();
    return ( !! (x1) ? s20 : String(b21));
}
fn24(input_I1, input_B1, input_B3, input_I2);
