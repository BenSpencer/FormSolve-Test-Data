// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if bool((if input_bool('B1') then int(str(input_int('I2'))) else input_int('I3'))) then (input_int('I1') in [155, 1, 36, 0, 2]) else bool(input_string('S2'))) then input_int('I2') else int(not(not(not((input_string('S3') >= input_string('S2')))))))

var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");

function fn29(s13, s20, x9, x5, b1, x18) {
    var s21 = s13;
    var x2 = x18;
    var x28;
    if (eval("var opts11 = [155, 1, 36, 0, 2];var e14 = \"s13\";var b15 = !!(eval(e14));((eval(\"(b1 ? Number('' + (x2)) : x5)\")) ? true : false ? opts11.indexOf(x9) > -1 : b15)")) {
        x28 = eval("x18");
    } else {
        var b22 = s20;
        var b23 = s21;
        var b24 = !(b22 >= b23);
        var b25;
        if (b24) {
            b25 = false;
        } else {
            b25 = true;
        }
        var b26 = !(b25);
        var x27 = +(b26);
        x28 = x27;
    }
    return x28;
}
fn29(input_S2, input_S3, input_I1, input_I3, input_B1, input_I2);
