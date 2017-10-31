// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not(bool(input_int('I2'))) || bool(int(input_string('S1')))) then false else not(bool((if bool(input_int('I2')) then str(int((((int((int(not(bool(input_string('S2')))) == input_int('I3'))) * len(input_string('S2'))) + input_int('I2')) == int(str(input_int('I1')))))) else str((input_string('S3') in ['B2', 'a4uz', 'UQqk', 't8h', '', 'Y', 'LBx']))))))

var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);

(function (x1, s4, x17, s12, x29, s37) {
    var x10 = x1;
    var b2 = !! (x1);
    var b3;
    if (b2) {
        b3 = false;
    } else {
        b3 = true;
    }
    var e5 = "s4";
    var b7 = !! (Number(eval(e5)));
    var b8 = b3;
    var b9 = b7;
    var x26 = x10;
    var b11 = Boolean(x10);
    var s22 = s12;
    var x16 = Number(!(eval("var b13 = !!(s12);b13")));
    var b18 = x16 == x17;
    var l23 = (s22).length;
    x24 = ~~ (eval("b18")) * l23;
    var e30 = "x29";
    var x35 = (((x24 + x26) == parseInt(String(eval(e30)), 10))) | 0;
    var opts39 = ['B2', 'a4uz', 'UQqk', 't8h', '', 'Y', 'LBx'];
    var s41 = String(opts39.indexOf(s37) > -1);
    var x42;
    if (b11) {
        x42 = '' + (x35);
    } else {
        x42 = s41;
    }
    var b43 = Boolean(x42);
    var b44 = !(b43);
    var x45;
    if (b8 || b9) {
        x45 = false;
    } else {
        x45 = b44;
    }
    return x45;
})(input_I2, input_S1, input_I3, input_S2, input_I1, input_S3);
