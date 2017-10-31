// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then str(not((if input_bool('B1') then input_bool('B2') else (input_bool('B3') || not(not(bool(int(str(int(input_bool('B3'))))))))))) else str((len(str(int(input_bool('B1')))) * (if not(not(regex-test(input_string('S2'), /^[0-9]*KN(KRn|ce)$/))) then int(not(input_bool('B3'))) else input_int('I2')))))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");

(function (b3, b2, b1, s25, x32) {
    var b29 = b1;
    var b4 = b1;
    var b21 = b2;
    var x39;
    if (b1) {
        var x18;
        if (b2) {
            x18 = b3;
        } else {
            var b5 = b4;
            var b14;
            if (eval("(eval(\"var e6 = \\\"b5\\\";eval(\\\"parseInt(String((eval(e6)) ? 1 : 0), 10)\\\")\")) ? true : false")) {
                b14 = false;
            } else {
                b14 = true;
            }
            var b15;
            if (b14) {
                b15 = false;
            } else {
                b15 = true;
            }
            var b16;
            if (b15) {
                b16 = true;
            } else {
                b16 = b4;
            }
            x18 = b16;
        }
        var b19 = !(x18);
        var s20 = (b19).toString();
        x39 = s20;
    } else {
        var s23 = (~~(b21)).toString();
        var re26 = /^[0-9]*KN(KRn|ce)$/;
        var b27 = !(re26.test(s25));
        var x35;
        if (!(b27)) {
            var b30;
            if (b29) {
                b30 = false;
            } else {
                b30 = true;
            }
            x35 = +(b30);
        } else {
            var e34 = "eval(\"x32\")";
            x35 = eval(e34);
        }
        x36 = (s23).length * x35;
        var s38 = (x36).toString();
        x39 = s38;
    }
    return x39;
})(input_B2, input_B1, input_B3, input_S2, input_I2);
