// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str((if input_bool('B3') then not(((if true then input_string('S1') else str(len(input_string('S1')))) !== input_string('S1'))) else (int(input_bool('B3')) == input_int('I3'))))) then not((((len(str((if bool(input_string('S3')) then bool(input_int('I2')) else not(input_bool('B3'))))) - int(input_string('S3'))) !== len(str(input_int('I1')))) == (input_int('I2') >= input_int('I1')))) else bool((int(bool(input_string('S3'))) % input_int('I2'))))

var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");

(function (x34, x22, s20, b1, s2, x14) {
    var s47 = s20;
    var x50 = x22;
    var b24 = b1;
    var b12 = b1;
    var s8 = s2;
    var b9;
    if (eval("var s3 = s2; var x6; if (true) {  x6 = s2; } else { var s5 = '' + ((s3).length); x6 = s5; }x6") !== s8) {
        b9 = true;
    } else {
        b9 = false;
    }
    var b11 = !(b9);
    var x13 = ~~ (b12);
    var b15 = x13 == x14;
    var b19 = !! (((b1 ? b11 : b15)).toString());
    var x40 = x34;
    var x39 = x22;
    var e33 = "var s29 = s20; var b23 = (x22) ? true : false;var x26; if ((s20) ? true : false) { x26 = b23; } else { var b25; if (b24) { b25 = false; } else { b25 = true; } x26 = b25; }var l28 = ('' + (x26)).length;(l28 - Number(s29))";
    var l36 = (String(x34)).length;
    var b37 = false;
    if (eval(e33) !== l36) {
        b37 = true;
    }
    var b41 = false;
    if (x39 >= x40) {
        b41 = true;
    }
    var e43 = "b41";
    var b44 = false;
    if (b37 == eval(e43)) {
        b44 = true;
    }
    var b46;
    if (b44) {
        b46 = false;
    } else {
        b46 = true;
    }
    var x49 = (Boolean(s47)) | 0;
    var b53 = ((x49 % x50)) ? true : false;
    var x54;
    if (b19) {
        x54 = b46;
    } else {
        x54 = b53;
    }
    return x54;
})(input_I1, input_I2, input_S3, input_B3, input_S1, input_I3);
