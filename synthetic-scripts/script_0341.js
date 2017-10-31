// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((bool((int(input_bool('B2')) / input_int('I2'))) && (str(bool(input_int('I1'))) > str(input_int('I2'))))) then bool(int(not((not(not(not((input_string('S3') > (if input_bool('B3') then str(int((int((if bool(int(str(bool(input_int('I3'))))) then "xKZOR" else (if input_bool('B3') then str(int((str(input_bool('B2')) + input_string('S3')))) else input_string('S1')))) in [0, 1, 50, 10, 0]))) else str(input_int('I1'))))))) && input_bool('B1'))))) else bool(input_int('I1')))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn67 = function (b1, b55, x11, b20, x47, s19, s38, x21) {
    var x61 = x47;
    var x7 = x47;
    var b29 = b1;
    var x3 = x11;
    var b9 = (eval("x7")) ? true : false;
    var s10 = '' + (b9);
    var b13 = s10;
    var b14 = (x11).toString();
    var b15;
    if (b13 > b14) {
        var x2 = ~~ (b1);
        x4 = x2;
        x5 = x3;
        b15 = !! (x4 / x5);
    } else {
        b15 = false;
    }
    var s31 = s19;
    var b28 = b20;
    var b27 = Boolean(eval("Number('' + (eval(\"(x21) ? true : false\")))"));
    var x40;
    if (b27) {
        x40 = "xKZOR";
    } else {
        var x39;
        if (b28) {
            var x32 = '' + (b29) + s31;
            var x34 = Number(x32);
            var s36 = (eval("x34")).toString();
            x39 = eval("s36");
        } else {
            x39 = s38;
        }
        x40 = x39;
    }
    var opts43 = [0, 1, 50, 10, 0];
    var b42 = opts43.indexOf(parseInt(x40, 10)) > -1;
    var x45 = (b42) ? 1 : 0;
    var b50 = false;
    if (s19 > (b20 ? '' + (x45) : (x47).toString())) {
        b50 = true;
    }
    var b53 = !(!(b50));
    var b56 = !(b53);
    var b57 = b55;
    var b58 = !(b56 && b57);
    var e65 = "var e64 = \"var b62 = (x61) ? true : false;var e63 = \\\"b62\\\";eval(e63)\";eval(e64)";
    var x66;
    if (!(eval("b15"))) {
        x66 = Boolean(+(b58));
    } else {
        x66 = eval(e65);
    }
    return x66;
}
fn67(input_B2, input_B1, input_I2, input_B3, input_I1, input_S3, input_S1, input_I3);
