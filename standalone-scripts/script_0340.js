// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if (if (-53 === input_int('I2')) then false else not(input_bool('B1'))) then true else (if input_bool('B3') then bool(str(input_int('I3'))) else not(input_bool('B3')))) then (if (int(input_string('S3')) >= 0) then not(not(input_bool('B1'))) else (input_int('I3') == len(str((input_string('S2') < str(input_bool('B1'))))))) else input_bool('B2'))

var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);

(function (x1, b14, b4, s46, s45, b47, x44) {
    var b43 = b4;
    var x8 = x44;
    var b2 = -53 === x1;
    var b5;
    if (b4) {
        b5 = false;
    } else {
        b5 = true;
    }
    var x6;
    if (b2) {
        x6 = false;
    } else {
        x6 = b5;
    }
    var b7 = b14;
    var e13 = "var e12 = \"var b11 = (eval(\\\"(x8).toString()\\\")) ? true : false;b11\";eval(e12)";
    var x16;
    if (b7) {
        x16 = eval(e13);
    } else {
        var b15;
        if (b14) {
            b15 = false;
        } else {
            b15 = true;
        }
        x16 = b15;
    }
    var x48;
    if ((x6 ? true : x16)) {
        var fn42 = function (b23, x28, s30, s18) {
            var b31 = b23;
            var e20 = "parseInt(s18, 10)";
            var x41;
            if ((eval(e20) >= 0)) {
                x41 = eval("var b24; if (b23) { b24 = false; } else { b24 = true; }!(eval(\"b24\"))");
            } else {
                var e38 = "var s32 = (b31).toString();var b33 = s30 < s32;var e35 = \"b33\";var s36 = String(eval(e35));var l37 = (s36).length;l37";
                var b39;
                if (eval("x28") == eval(e38)) {
                    b39 = true;
                } else {
                    b39 = false;
                }
                x41 = b39;
            }
            return x41;
        }
        x48 = fn42(b43, x44, s45, s46);
    } else {
        x48 = b47;
    }
    return x48;
})(input_I2, input_B3, input_B1, input_S3, input_S2, input_B2, input_I3);
