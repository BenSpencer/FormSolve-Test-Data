// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S2')) then ((int(str(int(bool(int(("F" === str(not((if bool(str(int(input_string('S3')))) then input_bool('B1') else not(input_bool('B3'))))))))))) % int(input_string('S1'))) - (if true then int(input_bool('B2')) else int((input_int('I1') >= int((1 <= int(input_bool('B3')))))))) else len(input_string('S3')))

var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);

(function (x31, s23, b32, s1, b8, s3, b28) {
    var s45 = s3;
    var b2 = (s1) ? true : false;
    var x47;
    if (b2) {
        var e44 = "var b9 = b32; var e6 = \"String(parseInt(s3, 10))\";var b10 = !(b9);var b12; if (((eval(e6)) ? true : false ? b8 : b10)) { b12 = false; } else { b12 = true; }var e17 = \"~~((\\\"F\\\" === '' + (b12)))\";var b18 = (eval(e17)) ? true : false;var s20 = String((b18) | 0);var x21 = parseInt(s20, 10);x26 = eval(\"x21\") % Number(eval(\"s23\"));var x36 = ~~((1 <= (b32) | 0));var b37 = x31; var b38 = x36;eval(\"(x26 - (true ? eval(\\\"(b28) | 0\\\") : +(b37 >= b38)))\")";
        x47 = eval(e44);
    } else {
        x47 = (s45).length;
    }
    return x47;
})(input_I1, input_S1, input_B3, input_S2, input_B1, input_S3, input_B2);
