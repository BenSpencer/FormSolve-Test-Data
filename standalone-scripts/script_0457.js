// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then not((input_int('I2') <= input_int('I2'))) else bool(int(str((input_int('I3') <= int(input_bool('B1')))))))

var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);

function fn18(b1, x3, x8) {
    var b9 = b1;
    var e11 = "var x10 = Number(b9);x10";
    var b12 = x8 <= eval(e11);
    var s14 = (b12).toString();
    var b16 = (Number(s14)) ? true : false;
    var x17;
    if (eval("b1")) {
        var x4 = x3;
        var b5;
        if (x3 <= x4) {
            b5 = true;
        } else {
            b5 = false;
        }
        x17 = !(b5);
    } else {
        x17 = b16;
    }
    return x17;
}
fn18(input_B1, input_I2, input_I3);
