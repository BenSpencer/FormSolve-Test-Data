// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if not(((input_string('S1') === str(int(input_string('S2')))) != (int(str(not(not(bool(input_int('I3')))))) < input_int('I3')))) then true else bool(len(str(input_int('I1'))))) then (str(not(input_bool('B2'))) in ['v1', '8No', 'lByh', 'vDy', 'bQd']) else (if input_bool('B2') then bool(input_int('I2')) else bool(int((input_bool('B2') || input_bool('B2'))))))

var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);

function fn46(x22, x16, x35, s3, b27, s1) {
    var b34 = b27;
    var x9 = x16;
    var e11 = "var b10 = !!(x9);b10";
    var b12 = !(eval(e11));
    var b13;
    if (b12) {
        b13 = false;
    } else {
        b13 = true;
    }
    var x15 = Number((b13).toString());
    var b17 = false;
    if (x15 < x16) {
        b17 = true;
    }
    var s23 = (x22).toString();
    var l24 = (s23).length;
    var b25 = (l24) ? true : false;
    var b38 = b34;
    var e37 = "var b36 = Boolean(x35);b36";
    var x44;
    if (b34) {
        x44 = eval(e37);
    } else {
        var b39 = b38;
        var b40 = false;
        if (b38 || b39) {
            b40 = true;
        }
        var x42 = ~~ (b40);
        x44 = Boolean(x42);
    }
    var x45;
    if ((!((eval("(eval(\"s1\") === '' + (parseInt(s3, 10)))") != b17)) ? true : b25)) {
        var opts32 = ['v1', '8No', 'lByh', 'vDy', 'bQd'];
        var b31 = false;
        for (var idx33 = 0; idx33 < opts32.length; idx33++) {
            if (opts32[idx33] == eval("var b28 = !(b27);'' + (b28)")) {
                b31 = true;
                break;
            }
        }
        x45 = b31;
    } else {
        x45 = x44;
    }
    return x45;
}
fn46(input_I1, input_I3, input_I2, input_S2, input_B2, input_S1);
