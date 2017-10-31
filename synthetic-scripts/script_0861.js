// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then int(bool(input_int('I1'))) else int((len((if ((input_int('I1') % int(bool(input_string('S2')))) == input_int('I3')) then str(input_int('I2')) else input_string('S2'))) >= int(input_string('S1')))))

var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");

(function (s20, x18, x14, s25, x2, b1) {
    var x7 = x2;
    var e5 = "var e3 = \"x2\";Boolean(eval(e3))";
    var e28 = "eval(\"eval(\\\"s25\\\")\")";
    var x32 = +((eval("var s8 = s20; x12 = x7 % (eval(\"(s8) ? true : false\")) | 0;var e15 = \"x14\";var b16; if (x12 == eval(e15)) { b16 = true; } else { b16 = false; }var s19 = '' + (x18);var e21 = \"s20\";var l23 = ((b16 ? s19 : eval(e21))).length;l23") >= parseInt(eval(e28), 10)));
    var x33;
    if (b1) {
        x33 = +(eval(e5));
    } else {
        x33 = x32;
    }
    return x33;
})(input_S2, input_I2, input_I3, input_S1, input_I1, input_B3);
