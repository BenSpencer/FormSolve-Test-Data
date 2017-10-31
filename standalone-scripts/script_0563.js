// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I2')) then int(str(input_bool('B2'))) else (int((input_bool('B3') !== bool(int(input_bool('B1'))))) + int(((int(bool(input_int('I2'))) > input_int('I2')) && bool((if not((if input_bool('B1') then not(input_bool('B3')) else not(input_bool('B3')))) then int((if input_bool('B3') then str(input_bool('B1')) else str(int(not(bool(input_string('S3'))))))) else input_int('I2')))))))

var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

function fn62(x1, b31, b6, s51, b11) {
    var x22 = x1;
    var s7 = (b6).toString();
    var x61;
    if (eval("eval(\"var e2 = \\\"x1\\\";(eval(e2)) ? true : false\")")) {
        x61 = parseInt(s7, 10);
    } else {
        var b9 = b31;
        var b30 = b11;
        var e21 = "var e18 = \"var e13 = \\\"var x12 = +(b11);x12\\\";var b14 = !!(eval(e13));var e17 = \\\"(eval(\\\\\\\"b9\\\\\\\") !== b14)\\\";eval(e17)\";var e20 = \"(eval(e18)) | 0\";eval(e20)";
        var x53 = x22;
        var b49 = b31;
        var b50 = b30;
        var b33 = b31;
        var x35;
        if (b30) {
            var b32;
            if (b31) {
                b32 = false;
            } else {
                b32 = true;
            }
            x35 = b32;
        } else {
            var b34;
            if (b33) {
                b34 = false;
            } else {
                b34 = true;
            }
            x35 = b34;
        }
        var b36;
        if (x35) {
            b36 = false;
        } else {
            b36 = true;
        }
        function fn48(b37, b38, s42) {
            var b43 = (s42) ? true : false;
            var s46 = ((!(b43)) | 0).toString();
            var x47;
            if (b37) {
                x47 = eval("var e39 = \"b38\";var s40 = String(eval(e39));s40");
            } else {
                x47 = s46;
            }
            return x47;
        }
        var x54;
        if (b36) {
            x54 = parseInt(fn48(b49, b50, s51), 10);
        } else {
            x54 = x53;
        }
        var b56;
        if ( !! (x54)) {
            var x26 = x22;
            var e23 = "x22";
            var b24 = Boolean(eval(e23));
            var x25 = +(b24);
            var b27 = x25 > x26;
            var e29 = "b27";
            b56 = eval(e29);
        } else {
            b56 = false;
        }
        x59 = eval(e21) + +(b56);
        x61 = x59;
    }
    return x61;
}
fn62(input_I2, input_B3, input_B2, input_S3, input_B1);
