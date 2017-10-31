// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(len(str(input_bool('B1')))) then bool(int((((if bool(input_int('I1')) then int(input_bool('B3')) else int(input_bool('B2'))) + int(input_bool('B3'))) == input_int('I1')))) else input_bool('B2'))

var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn24 = function (b10, b13, x17, b1) {
    var b22 = b10;
    var e5 = "var b4 = Boolean(('' + (b1)).length);b4";
    var x6 = x17;
    var b8 = b13;
    var b7 = (x6) ? true : false;
    x15 = (b7 ? +(b8) : ~~(b10)) + (b13) | 0;
    var b21 = !! (+((x15 == x17)));
    return (eval(e5) ? b21 : b22);
}
fn24(input_B2, input_B3, input_I1, input_B1);
