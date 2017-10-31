// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(regex-test(str(input_bool('B1')), /^l(\s?|[-_ ])$/)) then (((input_int('I2') in [45, 2, 1, 1, 84, 3, 0, 96, 1, 0]) === input_bool('B3')) != (input_bool('B1') == ((if not(((if (bool(len(str(bool(int(not(not(input_bool('B1')))))))) == input_bool('B3')) then input_string('S2') else input_string('S3')) < str(bool(input_string('S1'))))) then input_bool('B3') else input_bool('B1')) === not(not(input_bool('B3')))))) else bool(input_string('S1')))

var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn55 = function (b12, s29, x7, s34, s31, b1) {
    var b15 = b1;
    var s52 = s34;
    var s4 = (eval("var e2 = \"b1\";eval(e2)")).toString();
    var b6 = !((s4).match(/^l(\s?|[-_ ])$/) !== null);
    var x54;
    if (b6) {
        var b26 = b12;
        var opts9 = [45, 2, 1, 1, 84, 3, 0, 96, 1, 0];
        var e11 = "opts9.indexOf(x7) > -1";
        var b13 = false;
        if (eval(e11) === b12) {
            b13 = true;
        }
        var b16 = b15;
        var b43 = b26;
        var b40 = b26;
        var b41 = b16;
        var l24 = (eval("var b17 = !(b16);var b18 = !(b17);var e20 = \"Number(b18)\";'' + ((eval(e20)) ? true : false)")).length;
        var b25 = Boolean(l24);
        var b27;
        if (b25) {
            b27 = b26;
        } else {
            b27 = !b26;
        }
        var x32;
        if (b27) {
            var e30 = "s29";
            x32 = eval(e30);
        } else {
            x32 = s31;
        }
        var e33 = "x32";
        var s36 = (Boolean(s34)).toString();
        var b37;
        if (eval(e33) < s36) {
            b37 = true;
        } else {
            b37 = false;
        }
        var b39;
        if (b37) {
            b39 = false;
        } else {
            b39 = true;
        }
        var x42;
        if (b39) {
            x42 = b40;
        } else {
            x42 = b41;
        }
        var b44;
        if (b43) {
            b44 = false;
        } else {
            b44 = true;
        }
        var b45;
        if (b44) {
            b45 = false;
        } else {
            b45 = true;
        }
        var b50 = b13;
        var b51 = (b15 == (x42 === b45));
        x54 = b50 != b51;
    } else {
        x54 = (s52) ? true : false;
    }
    return x54;
}
fn55(input_B3, input_S2, input_I2, input_S1, input_S3, input_B1);
