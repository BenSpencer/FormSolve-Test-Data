// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(not(not((int(input_string('S2')) < int(bool((input_int('I1') + int(not((input_int('I3') != input_int('I2'))))))))))) == int(input_string('S2'))) then bool(int(input_bool('B3'))) else not(((int(input_bool('B2')) === (if (65 != input_int('I2')) then input_int('I1') else int(input_bool('B1')))) !== true)))

var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);

(function (b36, x32, b30, x3, b27, x4, s1) {
    var x35 = x3;
    var x5 = x32;
    var s21 = s1;
    var b18 = !(eval("var e14 = \"var x13 = ~~(((x3 + (!((x4 != x5))) | 0)) ? true : false);x13\";var b15 = Number(s1); var b16 = eval(e14);b15 < b16"));
    var b19 = !(b18);
    var x20 = ~~ (b19);
    var b25;
    if (x20 == eval("eval(\"Number(s21)\")")) {
        b25 = true;
    } else {
        b25 = false;
    }
    var x28 = (b27) | 0;
    var b29 = (x28) ? true : false;
    var x45;
    if (b25) {
        x45 = b29;
    } else {
        var x31 = ~~ (b30);
        var x39;
        if ((65 != x32)) {
            x39 = x35;
        } else {
            var e37 = "b36";
            var x38 = Number(eval(e37));
            x39 = x38;
        }
        var b40;
        if (x31 === x39) {
            b40 = true;
        } else {
            b40 = false;
        }
        var b42 = b40;
        var b43 = true;
        var b44;
        if (b42 !== b43) {
            b44 = false;
        } else {
            b44 = true;
        }
        x45 = b44;
    }
    return x45;
})(input_B1, input_I2, input_B2, input_I1, input_B3, input_I3, input_S2);
