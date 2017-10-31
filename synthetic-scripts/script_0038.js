// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(input_bool('B1'))) then input_bool('B1') else (if input_bool('B3') then (if (int(input_bool('B3')) > int(bool(len(str(input_bool('B3')))))) then input_bool('B2') else (if bool(input_string('S1')) then regex-test(input_string('S1'), /^(uhJp\srbxxXTHxcb[-_ ]?|_)$/) else input_bool('B3'))) else not((if input_bool('B1') then input_bool('B2') else input_bool('B1')))))

var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn43 = function (s32, b30, b1, b31) {
    var b33 = b1;
    var b6 = b1;
    var x4 = (eval("var e2 = \"b1\";eval(e2)")) | 0;
    var x42;
    if (Boolean(x4)) {
        x42 = b6;
    } else {
        var b7 = b30;
        var b36 = b31;
        var e8 = "b7";
        var x41;
        if (eval(e8)) {
            x41 = (function (b11, b20, s21) {
                var b25 = b11;
                var b9 = b11;
                var x10 = (b9) ? 1 : 0;
                var e12 = "b11";
                var s13 = (eval(e12)).toString();
                var e14 = "s13";
                var b16 = ((eval(e14)).length) ? true : false;
                var b18;
                if (x10 > (b16) | 0) {
                    b18 = true;
                } else {
                    b18 = false;
                }
                var x28;
                if (b18) {
                    x28 = b20;
                } else {
                    var s23 = s21;
                    var b22 = (s21) ? true : false;
                    var re24 = new RegExp("^(uhJp\\srbxxXTHxcb[-_ ]?|_)$");
                    var e26 = "b25";
                    var x27;
                    if (b22) {
                        x27 = re24.test(s23);
                    } else {
                        x27 = eval(e26);
                    }
                    x28 = x27;
                }
                return x28;
            })(b30, b31, s32);
        } else {
            x41 = !(eval("var b37 = b33; var e35 = \"var e34 = \\\"b33\\\";eval(e34)\";(eval(e35) ? b36 : b37)"));
        }
        x42 = x41;
    }
    return x42;
}
fn43(input_S1, input_B3, input_B1, input_B2);
