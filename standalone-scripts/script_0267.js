// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(str(bool(input_string('S2')))) <= input_int('I2')) then input_string('S2') else str((input_int('I1') == (input_int('I2') % int(input_string('S2'))))))

var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);

(function (x12, x13, s1) {
    var s10 = s1;
    var s14 = s1;
    var x7 = x13;
    var e5 = "var e2 = \"s1\";var b3 = (eval(e2)) ? true : false;String(b3)";
    var x6 = parseInt(eval(e5), 10);
    var x15 = parseInt(s14, 10);
    x16 = x13 % x15;
    var b18 = x12;
    var b19 = x16;
    var x22;
    if ((x6 <= x7)) {
        x22 = eval("s10");
    } else {
        x22 = '' + (eval("b18 == b19"));
    }
    return x22;
})(input_I1, input_I2, input_S2);
