// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B2') then input_bool('B2') else (bool(str((if input_bool('B3') then ((str(not((if false then input_bool('B1') else (input_int('I2') != input_int('I2'))))) != input_string('S1')) && (input_string('S3') >= str(((input_int('I3') / int(not(bool(len(input_string('S3')))))) % 67)))) else (input_bool('B3') && not(not(input_bool('B3'))))))) && not((str((int((input_int('I2') in [1, 1, -35, -99, 8, 51])) <= input_int('I3'))) <= input_string('S3'))))) then input_int('I2') else input_int('I3'))

var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);

function fn69(b5, b1, x47, s14, b34, x19, s18) {
    var x64 = x47;
    var x67 = x19;
    var b3 = b1;
    var e2 = "b1";
    var s56 = s18;
    var x6 = x47;
    var x52 = x19;
    var b4 = b34;
    var x7 = x6;
    var x11;
    if (false) {
        x11 = b5;
    } else {
        x11 = (x6 != eval("x7"));
    }
    var s13 = String(!(x11));
    var b15;
    if (s13 != s14) {
        b15 = true;
    } else {
        b15 = false;
    }
    var e17 = "b15";
    var b32;
    if (eval(e17)) {
        var s20 = s18;
        var l21 = (s20).length;
        x25 = x19 / Number(!( !! (l21)));
        var s29 = ((x25 % 67)).toString();
        var b30 = false;
        if (s18 >= s29) {
            b30 = true;
        }
        b32 = b30;
    } else {
        b32 = false;
    }
    var b38 = b34;
    var b41;
    if (eval("eval(\"eval(\\\"b34\\\")\")")) {
        var b39;
        if (b38) {
            b39 = false;
        } else {
            b39 = true;
        }
        b41 = !(b39);
    } else {
        b41 = false;
    }
    var e43 = "b41";
    var b46 = ('' + ((b4 ? b32 : eval(e43)))) ? true : false;
    var b60;
    if (eval("var opts49 = [1, 1, -35, -99, 8, 51];var b53; if ((opts49.indexOf(x47) > -1) | 0 <= x52) { b53 = true; } else { b53 = false; }var s55 = String(b53);var b57 = s55 <= s56;b57")) {
        b60 = false;
    } else {
        b60 = true;
    }
    var b61 = false;
    if (b46 && b60) {
        b61 = true;
    }
    var x63;
    if (eval(e2)) {
        x63 = b3;
    } else {
        x63 = b61;
    }
    var x68;
    if (x63) {
        x68 = eval("eval(\"x64\")");
    } else {
        x68 = x67;
    }
    return x68;
}
fn69(input_B1, input_B2, input_I2, input_S1, input_B3, input_I3, input_S3);
