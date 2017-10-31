// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B2') != not((input_string('S2') === str(input_int('I3'))))) then bool(str((input_int('I3') > input_int('I1')))) else (int(str(input_int('I3'))) >= len(str((if input_bool('B1') then int(input_bool('B1')) else (input_int('I2') % input_int('I1')))))))

var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn35 = function (s2, x10, b1, b22, x11, x25) {
    var x26 = x11;
    var x19 = x10;
    var x3 = x10;
    var b5 = s2;
    var b6 = '' + (x3);
    var b7 = !(b5 === b6);
    var b8;
    if (b1) {
        if (b7) {
            b8 = false;
        } else {
            b8 = true;
        }
    } else {
        if (b7) {
            b8 = true;
        } else {
            b8 = false;
        }
    }
    var e16 = "String(eval(\"var b12 = x10 > x11;b12\"))";
    var e17 = "eval(e16)";
    var s20 = (x19).toString();
    var b23 = b22;
    var x29;
    if (b22) {
        x29 = ~~ (b23);
    } else {
        x27 = x25 % x26;
        x29 = x27;
    }
    var s30 = String(x29);
    var l31 = (s30).length;
    var b32 = parseInt(s20, 10) >= l31;
    return (b8 ? !! (eval(e17)) : b32);
}
fn35(input_S2, input_I3, input_B2, input_B1, input_I1, input_I2);
