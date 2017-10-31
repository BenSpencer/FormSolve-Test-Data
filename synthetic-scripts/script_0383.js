// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B3')) then input_int('I1') else len(str((if (input_string('S2') < input_string('S2')) then (int(bool(input_int('I3'))) > input_int('I2')) else (int(not(bool(input_string('S3')))) <= (if input_bool('B2') then len(str(input_int('I2'))) else input_int('I3')))))))

var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn33 = function (x3, x10, s4, b1, s17, x14, b21) {
    var b2 = !(b1);
    var x32;
    if (b2) {
        x32 = x3;
    } else {
        var x22 = x14;
        var x25 = x10;
        var s7 = s4;
        var e5 = "s4";
        var e6 = "eval(e5)";
        var b8;
        if (eval(e6) < s7) {
            b8 = true;
        } else {
            b8 = false;
        }
        var x12 = ~~ (Boolean(x10));
        var e13 = "x12";
        var b19 = !((s17) ? true : false);
        var x26;
        if (b21) {
            var l24 = ((x22).toString()).length;
            x26 = l24;
        } else {
            x26 = x25;
        }
        var b27;
        if (~~(b19) <= x26) {
            b27 = true;
        } else {
            b27 = false;
        }
        x32 = ('' + ((b8 ? (eval(e13) > x14) : b27))).length;
    }
    return x32;
}
fn33(input_I1, input_I3, input_S2, input_B3, input_S3, input_I2, input_B2);
