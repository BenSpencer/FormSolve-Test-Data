// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S2')) then input_bool('B3') else not((input_bool('B1') != bool(int(str((if (int((if bool(str(int(input_bool('B2')))) then input_bool('B2') else (input_string('S3') < str((bool(input_string('S1')) === ((input_string('S2') !== str(input_bool('B3'))) === (str(not(input_bool('B2'))) >= input_string('S1')))))))) != int((input_int('I2') < len(str(int((int(input_string('S2')) !== input_int('I3')))))))) then input_bool('B1') else not(not(bool(input_string('S3')))))))))))

var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);

function fn62(b4, b14, b18, s10, s1, s11, x34, x37) {
    var s13 = s1;
    var b3 = b14;
    var b48 = b4;
    var s49 = s10;
    var s35 = s13;
    var b5 = b18;
    var b9 = b18;
    var s7 = '' + ((b5) ? 1 : 0);
    var s21 = s11;
    var b16 = false;
    if (s13 !== String(b14)) {
        b16 = true;
    }
    var b19 = !(b18);
    var b24 = b16 === ('' + (b19) >= s21);
    var b26 = !! (s11);
    var b27 = b24;
    var s28 = '' + (b26 === b27);
    var b29;
    if (s10 < s28) {
        b29 = true;
    } else {
        b29 = false;
    }
    var e31 = "b29";
    var x32;
    if ((s7) ? true : false) {
        x32 = b9;
    } else {
        x32 = eval(e31);
    }
    var x36 = parseInt(s35, 10);
    var b38;
    if (x36 !== x37) {
        b38 = true;
    } else {
        b38 = false;
    }
    var s41 = '' + (~~(b38));
    var b43 = x34 < (s41).length;
    var b46 = ~~ (x32);
    var b47 = (b43) | 0;
    var x53;
    if (b46 != b47) {
        x53 = b48;
    } else {
        var b50 = (s49) ? true : false;
        var b51 = !(b50);
        x53 = !(b51);
    }
    var x55 = parseInt('' + (x53), 10);
    var b56 = !! (x55);
    var b57 = b4 != b56;
    var e59 = "b57";
    var b60;
    if (eval(e59)) {
        b60 = false;
    } else {
        b60 = true;
    }
    var x61;
    if ( !! (s1)) {
        x61 = b3;
    } else {
        x61 = b60;
    }
    return x61;
}
fn62(input_B1, input_B3, input_B2, input_S3, input_S2, input_S1, input_I2, input_I3);
