// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B3')) then input_int('I2') else len((if (int(input_bool('B1')) in [1, 7, 0, 4, 113, 62, 1]) then str(bool(input_int('I1'))) else "R")))

var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn15 = function (b1, b4, x3, x9) {
    var x5 = Number(b4);
    var opts7 = [1, 7, 0, 4, 113, 62, 1];
    var x12;
    if (opts7.indexOf(x5) > -1) {
        var s11 = ((x9) ? true : false).toString();
        x12 = s11;
    } else {
        x12 = "R";
    }
    var x14;
    if (!(b1)) {
        x14 = x3;
    } else {
        x14 = (x12).length;
    }
    return x14;
}
fn15(input_B3, input_B1, input_I2, input_I1);
