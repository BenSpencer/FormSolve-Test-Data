// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (0 > int(input_bool('B1'))) then input_bool('B1') else (int((int(not(not((if not(bool(input_string('S2'))) then not((not(bool(input_int('I2'))) && input_bool('B2'))) else not(input_bool('B2')))))) !== input_int('I1'))) == (len(str(input_int('I1'))) / int(regex-test(str(input_int('I2')), /^(\D|WUn)[-_ ]+ m$/)))))

var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);

(function (b1, x25, s6, b12, x32) {
    var b5 = b1;
    var x2 = +(b1);
    var b3 = 0;
    var b4 = x2;
    var x40;
    if (b3 > b4) {
        x40 = b5;
    } else {
        var x29 = x25;
        var x9 = x32;
        var b18 = b12;
        var b8 = !((s6) ? true : false);
        var e16 = "eval(\"var b10 = !!(x9);var b11 = !(b10);var b13; if (b12) { b13 = b11; } else { b13 = false; }b13\")";
        var b17;
        if (eval(e16)) {
            b17 = false;
        } else {
            b17 = true;
        }
        var b19 = !(b18);
        var x20;
        if (b8) {
            x20 = b17;
        } else {
            x20 = b19;
        }
        var b21;
        if (x20) {
            b21 = false;
        } else {
            b21 = true;
        }
        var b22;
        if (b21) {
            b22 = false;
        } else {
            b22 = true;
        }
        var b26;
        if (eval("+(b22)") !== x25) {
            b26 = true;
        } else {
            b26 = false;
        }
        var x28 = +(b26);
        var s30 = String(x29);
        var l31 = (s30).length;
        var re34 = new RegExp("^(\\D|WUn)[-_ ]+ m$");
        x36 = l31;
        x37 = ~~ (re34.test('' + (x32)));
        var b38;
        if (x28 == x36 / x37) {
            b38 = true;
        } else {
            b38 = false;
        }
        x40 = b38;
    }
    return x40;
})(input_B1, input_I1, input_S2, input_B2, input_I2);
