// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(("" + str((if (if not((int((int(input_string('S3')) === int(input_string('S3')))) < input_int('I3'))) then true else (input_string('S3') < "3e")) then bool(len(str(not(not(bool(str(bool((if input_bool('B2') then int(input_bool('B1')) else int((bool(str(bool(input_string('S2')))) != input_bool('B3')))))))))))) else not((str(not(regex-test(input_string('S2'), /^xX\dd(w|[A-Z])*D$/))) != input_string('S2'))))))) then 1 else input_int('I3'))

var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");

function fn59(b21, b29, s1, s23, b20, x11) {
    var x56 = x11;
    var s43 = s23;
    var s16 = s1;
    var e10 = "var s3 = s1; var e7 = \"(Number(s1) === parseInt(s3, 10))\";var e9 = \"(eval(e7)) | 0\";eval(e9)";
    var b17 = s16;
    var b18 = "3e";
    var s47 = s43;
    var re44 = /^xX\dd(w|[A-Z])*D$/;
    var b45 = !(re44.test(s43));
    var s46 = '' + (b45);
    var b48 = false;
    if (s46 != s47) {
        b48 = true;
    }
    var b50 = !(b48);
    var x51;
    if ((!((eval(e10) < eval("x11"))) ? true : b17 < b18)) {
        x51 = !! ((eval("var x22 = ~~(b21);var x33; if (b20) { x33 = x22; } else { var e28 = \"eval(\\\"var b24 = (s23) ? true : false;('' + (b24)) ? true : false\\\")\";var b30 = eval(e28); var b31 = b29;var x32 = (b30 != b31) ? 1 : 0; x33 = x32; }var b36 = !!((Boolean(x33)).toString());var b37 = !(b36);var s39 = (!(b37)).toString();s39")).length);
    } else {
        x51 = b50;
    }
    var x53 = "";
    var x54 = (x51).toString();
    var x58;
    if (Boolean(x53 + x54)) {
        x58 = 1;
    } else {
        x58 = eval("x56");
    }
    return x58;
}
fn59(input_B1, input_B3, input_S3, input_S2, input_B2, input_I3);
