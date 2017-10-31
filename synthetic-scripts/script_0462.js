// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if false then not(bool(input_string('S1'))) else (int(not((len(str(input_bool('B2'))) < input_int('I2')))) !== len(str(bool(len(input_string('S2')))))))

var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn22 = function (s13, x7, s1, b4) {
    var x21;
    if (false) {
        var b2 = (s1) ? true : false;
        var b3;
        if (b2) {
            b3 = false;
        } else {
            b3 = true;
        }
        x21 = b3;
    } else {
        var e11 = "var l6 = ((b4).toString()).length;var b8 = l6 < x7;!(b8)";
        var s17 = '' + (eval("var l14 = (s13).length;(l14) ? true : false"));
        var l18 = (s17).length;
        var b19 = false;
        if (~~(eval(e11)) !== l18) {
            b19 = true;
        }
        x21 = b19;
    }
    return x21;
}
fn22(input_S2, input_I2, input_S1, input_B2);
