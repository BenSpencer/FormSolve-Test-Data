// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S2')) then input_bool('B2') else (if not((input_int('I2') > input_int('I3'))) then (input_int('I1') > (if input_bool('B3') then input_int('I2') else int(str(int(not(bool(int(input_string('S2'))))))))) else bool(int(str(not(bool((len(str(bool(str(not(not(input_bool('B1'))))))) + input_int('I3')))))))))

var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");

(function (x36, x13, x15, b14, b28, b3, s1) {
    var s17 = s1;
    var b2 = (s1) ? true : false;
    var x6 = x15;
    var x7 = x36;
    var e10 = "(x6 > x7)";
    var e16 = "x15";
    var x18 = parseInt(s17, 10);
    var x23 = parseInt('' + (~~(!((x18) ? true : false))), 10);
    var x24;
    if (b14) {
        x24 = eval(e16);
    } else {
        x24 = x23;
    }
    var e25 = "x24";
    var e41 = "var b29 = !(b28);var b30 = !(b29);var s31 = (b30).toString();var b32 = Boolean(s31);x37 = (String(eval(\"b32\"))).length; x38 = x36;!((x37 + x38) ? true : false)";
    var x45;
    if (eval("!(eval(e10))")) {
        x45 = (x13 > eval(e25));
    } else {
        x45 = (Number((eval(e41)).toString())) ? true : false;
    }
    var x46;
    if (b2) {
        x46 = eval("var e4 = \"b3\";eval(e4)");
    } else {
        x46 = x45;
    }
    return x46;
})(input_I3, input_I1, input_I2, input_B3, input_B1, input_B2, input_S2);
