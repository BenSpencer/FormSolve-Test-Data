// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(input_int('I3'))) then not(not(bool(input_int('I3')))) else ((str(int(str(bool(len(str(int(str(not(not(input_bool('B2'))))))))))) >= input_string('S2')) || (int(str(not(not((1 <= int(input_string('S3'))))))) >= len(str(not(bool(int(bool(input_int('I2'))))))))))

var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn50 = function (x35, s23, x1, b8, s20) {
    var x4 = x1;
    var x49;
    if (((x1).toString()) ? true : false) {
        var b5 = !! (x4);
        var b6;
        if (b5) {
            b6 = false;
        } else {
            b6 = true;
        }
        x49 = !(b6);
    } else {
        var e14 = "(Number(String(!(!(b8))))).toString()";
        var l15 = (eval(e14)).length;
        var b16 = (l15) ? true : false;
        var s17 = '' + (b16);
        var b21 = false;
        if ((Number(s17)).toString() >= s20) {
            b21 = true;
        }
        var e31 = "eval(\"var e26 = \\\"var e24 = \\\\\\\"s23\\\\\\\";Number(eval(e24))\\\";var b27; if (1 <= eval(e26)) { b27 = true; } else { b27 = false; }var b29 = !(b27);b29\")";
        var b32 = !(eval(e31));
        var x34 = parseInt('' + (b32), 10);
        var b38 = Boolean(((x35) ? true : false) | 0);
        var s41 = String(!(eval("b38")));
        var l42 = (s41).length;
        var b43;
        if (x34 >= l42) {
            b43 = true;
        } else {
            b43 = false;
        }
        var b45;
        if (b43) {
            b45 = true;
        } else {
            b45 = b21;
        }
        var e48 = "eval(\"b45\")";
        x49 = eval(e48);
    }
    return x49;
}
fn50(input_I2, input_S3, input_I3, input_B2, input_S2);
