// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((regex-test(str(input_bool('B2')), /^([0-9]\w|b)\t+  $/) == input_bool('B1'))) then (if (if input_bool('B2') then not((bool(input_int('I3')) && (len(input_string('S3')) != int(str(int((input_int('I2') > int(not((str(not(not(input_bool('B1')))) < str(bool(str(input_bool('B1')))))))))))))) else (input_int('I1') in [5, 49, 0, 0, 1, 0])) then len(input_string('S2')) else input_int('I3')) else int(str(input_bool('B1'))))

var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);

var fn52 = function (s44, x11, s13, b16, x15, x39, b1) {
    var b48 = b16;
    var b5 = b16;
    var b10 = b1;
    var e8 = "var e4 = \"var s2 = (b1).toString();var re3 = new RegExp(\\\"^([0-9]\\\\\\\\w|b)\\\\\\\\t+  $\\\");re3.test(s2)\";var b6 = eval(e4); var b7 = b5;b6 == b7";
    var b9;
    if (eval(e8)) {
        b9 = false;
    } else {
        b9 = true;
    }
    var x51;
    if (b9) {
        var x46 = x11;
        var b12 = (x11) ? true : false;
        var b29 = x15 > (eval("var b20 = b16; var b17 = !(b16);var b18; if (b17) { b18 = false; } else { b18 = true; }var s19 = String(b18);var s23 = String(('' + (b20)) ? true : false);var b24 = false; if (s19 < s23) { b24 = true; }!(b24)")) ? 1 : 0;
        var x33 = Number(String((b29) | 0));
        var b34 = (s13).length;
        var b35 = x33;
        var b36 = b12 && b34 != b35;
        var opts41 = [5, 49, 0, 0, 1, 0];
        var x47;
        if ((b10 ? !(b36) : opts41.indexOf(x39) > -1)) {
            x47 = (s44).length;
        } else {
            x47 = x46;
        }
        x51 = x47;
    } else {
        x51 = Number('' + (b48));
    }
    return x51;
}
fn52(input_S2, input_I3, input_S3, input_B1, input_I2, input_I1, input_B2);
