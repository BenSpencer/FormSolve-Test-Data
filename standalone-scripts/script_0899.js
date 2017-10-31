// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((int(input_bool('B1')) >= int(input_string('S1')))) then str((if ((input_string('S2') <= "EC") == (regex-test(input_string('S2'), /^\d(t|mM)[a-z]*Inq-$/) == bool(str(bool(str(input_int('I3'))))))) then input_bool('B3') else not(input_bool('B1')))) else str(int(not(bool(input_int('I2'))))))

var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn36 = function (s3, x30, s10, x15, b25, b1) {
    var b26 = b1;
    var x2 = +(b1);
    var x4 = parseInt(s3, 10);
    var b5;
    if (x2 >= x4) {
        b5 = true;
    } else {
        b5 = false;
    }
    var e7 = "b5";
    var e8 = "eval(e7)";
    var b9;
    if (eval(e8)) {
        b9 = false;
    } else {
        b9 = true;
    }
    var s13 = s10;
    var b11 = s10;
    var b12 = "EC";
    var re14 = new RegExp("^\\d(t|mM)[a-z]*Inq-$");
    var s19 = '' + (eval("var s16 = String(x15);var b17 = (s16) ? true : false;b17"));
    var b21 = re14.test(s13);
    var b22 = !! (s19);
    var b23 = b11 <= b12 == b21 == b22;
    var x28;
    if (b23) {
        x28 = b25;
    } else {
        x28 = !(b26);
    }
    var x35;
    if (b9) {
        x35 = '' + (x28);
    } else {
        var b31 = (x30) ? true : false;
        var b32;
        if (b31) {
            b32 = false;
        } else {
            b32 = true;
        }
        var s34 = ((b32) | 0).toString();
        x35 = s34;
    }
    return x35;
}
fn36(input_S1, input_I2, input_S2, input_I3, input_B3, input_B1);
