// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then not(bool(input_int('I2'))) else (str(int(str(not(bool(input_int('I1')))))) in ['v', 'aS', '', '5']))

var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);

var fn19 = function (x5, b1, x2) {
    var b3 = Boolean(x2);
    var x18;
    if (b1) {
        x18 = !(b3);
    } else {
        x18 = eval("eval(\"var x11 = parseInt((eval(\\\"eval(\\\\\\\"!(!!(x5))\\\\\\\")\\\")).toString(), 10);var opts14 = ['v', 'aS', '', '5'];opts14.indexOf((x11).toString()) > -1\")");
    }
    return x18;
}
fn19(input_I1, input_B2, input_I2);
