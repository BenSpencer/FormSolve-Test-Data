// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(input_int('I2'))) then (input_int('I2') > input_int('I1')) else (if ((if false then input_bool('B1') else bool(int((bool(input_string('S1')) === (0 != input_int('I2')))))) != input_bool('B3')) then (input_bool('B1') !== ((input_string('S3') in ['5', '', 'HC', 'Q7qx', '']) && ((if bool(input_int('I3')) then (len(input_string('S3')) < input_int('I1')) else bool(input_int('I1'))) && input_bool('B1')))) else input_bool('B1')))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn52 = function (s9, x36, b21, x1, x30, s26, b24) {
    var x5 = x36;
    var x12 = x1;
    var x4 = x1;
    var b6 = false;
    if (x4 > x5) {
        b6 = true;
    }
    var b49 = b24;
    var b8 = b24;
    var b13 = 0;
    var b14 = x12;
    var b15;
    if (eval("var b10 = (s9) ? true : false;b10") === b13 != b14) {
        b15 = true;
    } else {
        b15 = false;
    }
    var e19 = "((b15) | 0) ? true : false";
    var x20;
    if (false) {
        x20 = b8;
    } else {
        x20 = eval(e19);
    }
    var b42 = b24;
    var e25 = "b24";
    var s34 = s26;
    var opts28 = ['5', '', 'HC', 'Q7qx', ''];
    var b27 = false;
    for (var idx29 = 0; idx29 < opts28.length; idx29++) {
        if (opts28[idx29] == s26) {
            b27 = true;
        }
    }
    var x39 = x36;
    var b32 = Boolean(eval("x30"));
    var e33 = "b32";
    var x41;
    if (eval(e33)) {
        var l35 = (s34).length;
        x41 = (l35 < x36);
    } else {
        var b40 = (x39) ? true : false;
        x41 = b40;
    }
    var b43 = x41;
    var b44 = b42;
    var b47 = eval(e25) !== (b27 && b43 && b44);
    var x51;
    if (!( !! (x1))) {
        x51 = b6;
    } else {
        x51 = ((x20 != b21) ? b47 : b49);
    }
    return x51;
}
fn52(input_S1, input_I1, input_B3, input_I2, input_I3, input_S3, input_B1);
