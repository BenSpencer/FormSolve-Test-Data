// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(((input_int('I2') === input_int('I3')) || bool((int(input_string('S2')) % input_int('I1'))))) then int(not((if not(input_bool('B1')) then input_bool('B2') else false))) else len(str(not((int(input_string('S1')) >= int(bool(int(input_string('S1')))))))))

var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);

(function (b22, x9, x2, s5, b19, x1, s27) {
    var e20 = "b19";
    var b24 = !((!(eval(e20)) ? b22 : false));
    var x26 = (eval("b24")) ? 1 : 0;
    var s30 = s27;
    var e28 = "s27";
    var x29 = parseInt(eval(e28), 10);
    var x32 = parseInt(eval("s30"), 10);
    var b35 = x29;
    var b36 = Number(Boolean(x32));
    var b37;
    if (b35 >= b36) {
        b37 = false;
    } else {
        b37 = true;
    }
    return (eval("eval(\"var b3; if (x1 === x2) { b3 = true; } else { b3 = false; }x10 = eval(\\\"eval(\\\\\\\"Number(s5)\\\\\\\")\\\"); x11 = x9;var e12 = \\\"x10 % x11\\\";var b13 = Boolean(eval(e12));var b14 = false; if (b3 || b13) { b14 = true; }var b16; if (b14) { b16 = false; } else { b16 = true; }b16\")") ? x26 : ('' + (b37)).length);
})(input_B2, input_I1, input_I3, input_S2, input_B1, input_I2, input_S1);
