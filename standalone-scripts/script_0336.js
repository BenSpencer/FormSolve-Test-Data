// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(int(str((if ((if (input_string('S3') in ['h1A', '', '5']) then (str((int(str(input_int('I2'))) in [1, 127, 0, 0, 0, 0, 1, 1, 0, 1])) > str(input_int('I2'))) else not(bool(str(input_bool('B1'))))) === not((int(str((len(input_string('S2')) < input_int('I2')))) != len(str(bool(str(input_int('I1')))))))) then len(input_string('S3')) else input_int('I2')))))) then (not((input_bool('B1') != bool(int(input_bool('B2'))))) != input_bool('B2')) else (input_bool('B1') && bool(len(input_string('S1')))))

var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);

function fn80(s53, s72, x50, b54, x51, b60, s52) {
    var b59 = b54;
    var b71 = b54;

    function fn49(x34, x15, s27, s1, b20) {
        var x47 = x15;
        var s44 = s1;
        var x29 = x15;
        var e5 = "var opts3 = ['h1A', '', '5'];opts3.indexOf(s1) > -1";
        var x6 = x15;
        var opts12 = [1, 127, 0, 0, 0, 0, 1, 1, 0, 1];
        var b11 = false;
        for (var idx13 = 0; idx13 < opts12.length; idx13++) {
            if (opts12[idx13] == eval("var e8 = \"String(x6)\";parseInt(eval(e8), 10)")) {
                b11 = true;
            }
        }
        var b18 = false;
        if (String(b11) > eval("var s16 = (x15).toString();s16")) {
            b18 = true;
        }
        var x26;
        if (eval(e5)) {
            x26 = b18;
        } else {
            var b25;
            if (Boolean(eval("var s21 = String(b20);eval(\"s21\")"))) {
                b25 = false;
            } else {
                b25 = true;
            }
            x26 = b25;
        }
        var l28 = (s27).length;
        var b30 = l28;
        var b31 = x29;
        var s32 = '' + (b30 < b31);
        var x33 = parseInt(s32, 10);
        var b36 = !! ((x34).toString());
        var s37 = '' + (b36);
        var b39 = x33 != (s37).length;
        var b41;
        if (b39) {
            b41 = false;
        } else {
            b41 = true;
        }
        var b42 = false;
        if (x26 === b41) {
            b42 = true;
        }
        var e46 = "(s44).length";
        return (b42 ? eval(e46) : x47);
    }
    var s55 = String(fn49(x50, x51, s52, s53, b54));
    var x56 = parseInt(s55, 10);
    var b57 = !! (x56);
    var b58 = !(b57);
    var b68 = b60;
    var b67 = !(eval("eval(\"var x61 = ~~(b60);var b62 = !!(x61);var b63 = b59 != b62;b63\")"));
    var b69 = b67;
    var b70 = b68;
    var l73 = (s72).length;
    var b74 = !! (l73);
    var e75 = "b74";
    var b76;
    if (eval(e75)) {
        b76 = b71;
    } else {
        b76 = false;
    }
    var e78 = "b76";
    return (b58 ? b69 != b70 : eval(e78));
}
fn80(input_S3, input_S1, input_I1, input_B1, input_I2, input_B2, input_S2);
