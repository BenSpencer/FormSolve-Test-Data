// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then bool((if bool(input_string('S3')) then input_int('I1') else (if ((int(bool(input_int('I1'))) <= int(str(not(input_bool('B1'))))) == bool(input_string('S1'))) then input_int('I2') else input_int('I3')))) else bool(input_string('S1')))

var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);

function fn40(x32, x34, x33, b1, s30, b29, s31) {
    var s36 = s31;
    var b37 = (s36) ? true : false;
    var x39;
    if (b1) {
        x39 = Boolean((function (b9, s2, s19, x24, x23, x4) {
            var x5 = x4;
            var b3 = Boolean(s2);
            var x27;
            if (b3) {
                x27 = x4;
            } else {
                var b7 = (eval("x5")) ? true : false;
                var x8 = ~~ (b7);
                var e16 = "var e15 = \"var e13 = \\\"var e10 = \\\\\\\"b9\\\\\\\";var b11; if (eval(e10)) { b11 = false; } else { b11 = true; }'' + (b11)\\\";parseInt(eval(e13), 10)\";eval(e15)";
                var b20 = !! (s19);
                var b21;
                if ((x8 <= eval(e16))) {
                    b21 = b20;
                } else {
                    b21 = !b20;
                }
                var x25;
                if (b21) {
                    x25 = x23;
                } else {
                    x25 = x24;
                }
                x27 = eval("x25");
            }
            return x27;
        })(b29, s30, s31, x32, x33, x34));
    } else {
        x39 = eval("b37");
    }
    return x39;
}
fn40(input_I3, input_I1, input_I2, input_B3, input_S3, input_B1, input_S1);
