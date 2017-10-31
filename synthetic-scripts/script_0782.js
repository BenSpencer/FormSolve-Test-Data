// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then (if (int(str((if bool(input_string('S3')) then input_bool('B1') else input_bool('B1')))) < int(not((input_string('S3') >= (str(int(bool(int((if bool(int(bool(len(input_string('S2'))))) then bool(input_int('I2')) else bool(str((input_int('I2') === (len(str(input_int('I3'))) / input_int('I2')))))))))) + str((len(input_string('S2')) in [0, 31, 59, 0, 0]))))))) then input_int('I2') else 1) else int(not(input_bool('B2'))))

var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");

var fn33 = function (s13, x18, x21) {
    var x20 = x18;
    var l14 = (s13).length;
    var b15 = Boolean(l14);
    var x16 = Number(b15);
    var b19 = (x18) ? true : false;
    var x25 = x20;
    var e22 = "x21";
    var s23 = String(eval(e22));
    x26 = (s23).length;
    x27 = x25;
    var b28;
    if (x20 === x26 / x27) {
        b28 = true;
    } else {
        b28 = false;
    }
    var s30 = '' + (b28);
    var x32;
    if ( !! (x16)) {
        x32 = b19;
    } else {
        x32 = (s30) ? true : false;
    }
    return x32;
}
var fn65 = function (x36, b6, x35, b1, s12, s34) {
    var b61 = b1;
    var x59 = x35;
    var s2 = s12;
    var b7 = b6;
    var e4 = "var e3 = \"s2\";eval(e3)";
    var s10 = (( !! (eval(e4)) ? b6 : eval("b7"))).toString();
    var s41 = s34;
    var x37 = Number(fn33(s34, x35, x36));
    var s48 = (eval("var opts45 = [0, 31, 59, 0, 0];var b44 = false; for (var idx46 = 0; idx46 < opts45.length; idx46++) { if (opts45[idx46] == eval(\"(s41).length\")) { b44 = true; break; } }b44")).toString();
    var x49 = String(Number( !! (x37)));
    var x50 = s48;
    var b51 = false;
    if (s12 >= x49 + x50) {
        b51 = true;
    }
    var b53;
    if (b51) {
        b53 = false;
    } else {
        b53 = true;
    }
    var e54 = "b53";
    var x55 = ~~ (eval(e54));
    var b56 = false;
    if (parseInt(s10, 10) < x55) {
        b56 = true;
    }
    var e58 = "b56";
    var x60;
    if (eval(e58)) {
        x60 = x59;
    } else {
        x60 = 1;
    }
    var x64;
    if (b1) {
        x64 = x60;
    } else {
        var b62;
        if (b61) {
            b62 = false;
        } else {
            b62 = true;
        }
        x64 = +(b62);
    }
    return x64;
}
fn65(input_I3, input_B1, input_I2, input_B2, input_S3, input_S2);
