// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I2') != len(str(len(str(not(bool(len(str(input_int('I2')))))))))) then len(str(not(not((input_bool('B1') !== input_bool('B2')))))) else ((int(input_bool('B3')) / 176) - int(input_bool('B2'))))

var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);

function fn33(x1, b24, b14, b16) {
    var b28 = b16;
    var x2 = x1;
    var l4 = (String(x2)).length;
    var e5 = "l4";
    var b6 = !! (eval(e5));
    var b7;
    if (b6) {
        b7 = false;
    } else {
        b7 = true;
    }
    var s8 = '' + (b7);
    var l9 = (s8).length;
    var l11 = (String(l9)).length;
    var b12;
    if (x1 != l11) {
        b12 = true;
    } else {
        b12 = false;
    }
    var x29 = Number(b28);
    var x32;
    if (b12) {
        var e15 = "b14";
        var b17 = eval(e15) !== b16;
        var b19;
        if (b17) {
            b19 = false;
        } else {
            b19 = true;
        }
        var b20 = !(b19);
        var l22 = ((b20).toString()).length;
        x32 = eval("l22");
    } else {
        x32 = ((~~(b24) / 176) - x29);
    }
    return x32;
}
fn33(input_I2, input_B3, input_B1, input_B2);
