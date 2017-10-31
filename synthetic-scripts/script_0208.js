// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S3')) then true else ((input_string('S3') != (if (input_int('I1') != (if not(input_bool('B1')) then input_int('I2') else int(regex-test(str((str(regex-test(input_string('S1'), /^pE(tu|hlNW)?[A-Z]ELv$/)) !== str(bool(input_string('S3'))))), /^\rSz([A-Z]|Q)?h\sAhtG$/)))) then str(int(not((input_bool('B2') !== (not(bool(input_string('S2'))) && bool(str(int((if bool(input_int('I1')) then input_string('S3') else str(input_int('I1'))))))))))) else input_string('S1'))) !== bool(input_string('S3'))))

var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);

(function (s1, s11, b25, x8, b5, x30, s26) {
    var s14 = s1;
    var b2 = Boolean(s1);
    var s53 = s14;
    var s3 = s14;
    var s32 = s14;
    var x4 = x30;
    var s49 = s11;
    var s13 = ((s11).match(/^pE(tu|hlNW)?[A-Z]ELv$/) !== null).toString();
    var b17 = s13 !== String( !! (s14));
    var x22;
    if (eval("var b6 = !(b5);b6")) {
        var e10 = "eval(\"x8\")";
        x22 = eval(e10);
    } else {
        x22 = +((String(b17)).match(/^\rSz([A-Z]|Q)?h\sAhtG$/) !== null);
    }
    var b23 = x4;
    var b24 = x22;
    var x50;
    if (b23 != b24) {
        var s48 = String(Number(eval("var e42 = \"var b28 = !!(eval(\\\"s26\\\"));var x33 = x30; var x36; if (Boolean(x30)) {  x36 = s32; } else { var s34 = (x33).toString();var e35 = \\\"s34\\\"; x36 = eval(e35); }var s38 = '' + (Number(x36));(!(b28) && Boolean(s38))\";var b43; if (b25 !== eval(e42)) { b43 = true; } else { b43 = false; }var b45 = !(b43);b45")));
        x50 = s48;
    } else {
        x50 = s49;
    }
    var e54 = "s53";
    var e55 = "eval(e54)";
    return (b2 ? true : ((s3 != x50) !== Boolean(eval(e55))));
})(input_S3, input_S1, input_B2, input_I2, input_B1, input_I1, input_S2);
