// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B3') && not((int((str(int((bool(input_int('I2')) === bool(len(str(input_bool('B2'))))))) + (if bool(int((if bool(int(input_bool('B2'))) then str(input_bool('B3')) else input_string('S2')))) then input_string('S3') else str(input_int('I1'))))) in [1, 0, 88, 147, 1, 0, 0, 0]))) then str(not(bool(int(bool(int(input_string('S1'))))))) else input_string('S3'))

var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);

function fn27(b16, s19, x24, b12, s23) {
    var x13 = +(b12);
    var b14 = Boolean(x13);
    var e15 = "b14";
    var b22 = (parseInt((eval(e15) ? eval("String(b16)") : s19), 10)) ? true : false;
    var x26;
    if (b22) {
        x26 = s23;
    } else {
        var s25 = '' + (x24);
        x26 = s25;
    }
    return x26;
}
var fn52 = function (s32, b31, s29, b1, x30, x2, s43) {
    var s50 = s32;
    var b28 = b1;
    var b4 = b31;
    var b3 = Boolean(x2);
    var b8 = b3;
    var b9 = !! (('' + (b4)).length);
    var s11 = '' + ((b8 === b9) | 0);
    var x33 = s11;
    var x34 = fn27(b28, s29, x30, b31, s32);
    var x35 = parseInt(x33 + x34, 10);
    var opts37 = [1, 0, 88, 147, 1, 0, 0, 0];
    var b36 = opts37.indexOf(x35) > -1;
    var b39;
    if (b36) {
        b39 = false;
    } else {
        b39 = true;
    }
    var e40 = "b39";
    var b41;
    if (eval(e40)) {
        b41 = b1;
    } else {
        b41 = false;
    }
    var x46 = ~~ ((parseInt(s43, 10)) ? true : false);
    var b48 = !( !! (x46));
    var s49 = (b48).toString();
    return (b41 ? s49 : s50);
}
fn52(input_S3, input_B2, input_S2, input_B3, input_I1, input_I2, input_S1);
