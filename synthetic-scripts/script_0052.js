// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B1') then input_bool('B2') else (if bool(input_string('S3')) then bool((input_int('I1') - int((not(input_bool('B3')) === bool(int(str(bool(str((not((len(str(not(bool(len(input_string('S1')))))) in [14, 97, 75, 4, 1, 0, 163])) == bool(len(str((int(input_string('S1')) >= input_int('I1'))))))))))))))) else input_bool('B2'))) then input_string('S3') else "zMTi3")

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn50 = function (b2, b1, b6, s20, x22, s3) {
    var s48 = s3;
    var b45 = b2;
    var b4 = !! (s3);
    var x5 = x22;
    var b7 = !(b6);
    x42 = x5;
    x43 = +(eval("(b7 === !!(eval(\"var s8 = s20; var e10 = \\\"(s8).length\\\";var b12 = !(Boolean(eval(e10)));var opts17 = [14, 97, 75, 4, 1, 0, 163];var b16 = false; for (var idx18 = 0; idx18 < opts17.length; idx18++) { if (opts17[idx18] == ('' + (eval(\\\"b12\\\"))).length) { b16 = true; } }var x21 = parseInt(s20, 10);var e23 = \\\"x22\\\";var b24 = x21 >= eval(e23);var b30; if (!(b16) == !!((eval(\\\"String(b24)\\\")).length)) { b30 = true; } else { b30 = false; }var x35 = parseInt((Boolean('' + (b30))).toString(), 10);x35\")))"));
    var x46;
    if (b4) {
        x46 = Boolean(x42 - x43);
    } else {
        x46 = b45;
    }
    var x47;
    if (b1) {
        x47 = b2;
    } else {
        x47 = x46;
    }
    var x49;
    if (x47) {
        x49 = s48;
    } else {
        x49 = "zMTi3";
    }
    return x49;
}
fn50(input_B2, input_B1, input_B3, input_S1, input_I1, input_S3);
