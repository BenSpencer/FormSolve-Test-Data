// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(str(((str(input_bool('B3')) == str(input_int('I2'))) || not(input_bool('B3')))))) then bool(int(replace(str((len(str(int(str(int(input_bool('B2')))))) > len((if false then str(not(input_bool('B3'))) else str((input_string('S1') <= (if (if input_bool('B1') then bool(int(not(input_bool('B2')))) else input_bool('B1')) then str(int(not(not(input_bool('B3'))))) else input_string('S3')))))))), "vemEy", "I"))) else (input_string('S2') !== input_string('S3')))

var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");

var fn62 = function (b17, s41, s57, b1, s26, x3, b27) {
    var s58 = s41;
    var b23 = b1;
    var b8 = b1;
    var e10 = "eval(\"b8\")";
    var b11;
    if (eval(e10)) {
        b11 = false;
    } else {
        b11 = true;
    }
    var b12;
    if (b11) {
        b12 = true;
    } else {
        var b5 = (b1).toString();
        var b6 = (x3).toString();
        var e7 = "b5 == b6";
        b12 = eval(e7);
    }
    var x61;
    if ((parseInt(String(b12), 10)) ? true : false) {
        var e56 = "var b28 = b17; var s19 = String(Number(b17));var e49 = \"var b35 = b23; var b32 = b27; var b29; if (b28) { b29 = false; } else { b29 = true; }var b31 = !!(Number(b29));var b38 = !(!(eval(\\\"b35\\\")));var x39 = (b38) | 0;var x42; if ((b27 ? b31 : eval(\\\"b32\\\"))) { x42 = (x39).toString(); } else { x42 = s41; }var s45 = ((s26 <= x42)).toString();var x46; if (false) { var b24; if (b23) { b24 = false; } else { b24 = true; } x46 = '' + (b24); } else { x46 = s45; }var l47 = (x46).length;var e48 = \\\"l47\\\";eval(e48)\";var b50 = (String(parseInt(s19, 10))).length > eval(e49);var x54 = Number(((b50).toString()).replace(\"vemEy\", \"I\"));var b55 = Boolean(x54);b55";
        x61 = eval(e56);
    } else {
        x61 = (s57 !== s58);
    }
    return x61;
}
fn62(input_B2, input_S3, input_S2, input_B3, input_S1, input_I2, input_B1);
