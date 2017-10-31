// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B1') != input_bool('B1')) then ((if (input_int('I1') in [1, 0, 0, 27, 1, 4]) then input_int('I1') else (if bool(int(((input_bool('B1') || not(not(input_bool('B2')))) || not(input_bool('B2'))))) then int(input_bool('B1')) else (input_int('I1') * int(str(input_int('I2')))))) in [-33, 9, 1, 0, 0, 18, 0, -51, 93, 8]) else (input_string('S3') <= input_string('S3')))

var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);

function fn47(s42, x11, b1, x31, b14) {
    var b12 = b1;
    var e5 = "var b2 = b1; var b3 = false; if (b1 != b2) { b3 = true; }b3";
    var s43 = s42;
    var b44 = false;
    if (s42 <= s43) {
        b44 = true;
    }
    var x46;
    if (eval(e5)) {
        var x30 = x11;
        var x6 = x11;
        var e7 = "x6";
        var opts9 = [1, 0, 0, 27, 1, 4];
        var b8 = false;
        for (var idx10 = 0; idx10 < opts9.length; idx10++) {
            if (opts9[idx10] == eval(e7)) {
                b8 = true;
                break;
            }
        }
        var x38;
        if (b8) {
            x38 = x11;
        } else {
            var b28 = b12;
            var b20 = b14;
            var e13 = "b12";
            var b16;
            if (eval("b14")) {
                b16 = false;
            } else {
                b16 = true;
            }
            var b17 = !(b16);
            var b23;
            if ((eval(e13) || b17)) {
                b23 = true;
            } else {
                var b21 = !(b20);
                var e22 = "b21";
                b23 = eval(e22);
            }
            var x26 = ~~ (eval("b23"));
            var x37;
            if ( !! (x26)) {
                x37 = ~~ (b28);
            } else {
                var e33 = "var s32 = '' + (x31);s32";
                x35 = x30;
                x36 = parseInt(eval(e33), 10);
                x37 = x35 * x36;
            }
            x38 = x37;
        }
        var opts40 = [-33, 9, 1, 0, 0, 18, 0, -51, 93, 8];
        var b39 = opts40.indexOf(x38) > -1;
        x46 = b39;
    } else {
        x46 = b44;
    }
    return x46;
}
fn47(input_S3, input_I1, input_B1, input_I2, input_B2);
