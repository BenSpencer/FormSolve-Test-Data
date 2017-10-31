// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(str(int(not(not((int(str(((input_bool('B3') == (((if bool(int(bool(input_int('I3')))) then str(bool(len(input_string('S1')))) else "xNcg8") !== input_string('S3')) == not(not(bool(int(not((int(bool(int(input_string('S3')))) != input_int('I3'))))))))) || input_bool('B1')))) < int(bool(input_int('I1')))))))))) then str(bool(input_string('S3'))) else str(input_int('I1')))

var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);

function fn70(b46, x23, b1, s15, s8, x51) {
    var s63 = s15;
    var x67 = x51;
    var e44 = "var e2 = \"b1\";var s19 = s15; var x4 = x23; var b17; if (eval(\"var b5 = Boolean(x4);var l9 = (s8).length;var e10 = \\\"l9\\\";var s12 = String((eval(e10)) ? true : false);(Boolean((b5) ? 1 : 0) ? s12 : \\\"xNcg8\\\")\") !== eval(\"s15\")) { b17 = true; } else { b17 = false; }var b40; if (b17) { b40 = eval(\"var e36 = \\\"var b30; if (eval(\\\\\\\"var e27 = \\\\\\\\\\\\\\\"var x22 = (Boolean(parseInt(s19, 10))) ? 1 : 0;var b25 = x22; var b26 = eval(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"x23\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");b25 != b26\\\\\\\\\\\\\\\";var e28 = \\\\\\\\\\\\\\\"eval(e27)\\\\\\\\\\\\\\\";eval(e28)\\\\\\\")) { b30 = false; } else { b30 = true; }var e34 = \\\\\\\"!!(Number(eval(\\\\\\\\\\\\\\\"b30\\\\\\\\\\\\\\\")))\\\\\\\";var e35 = \\\\\\\"eval(e34)\\\\\\\";eval(e35)\\\";var b37 = !(eval(e36));var b38 = !(b37);b38\"); } else { b40 = !eval(\"var e36 = \\\"var b30; if (eval(\\\\\\\"var e27 = \\\\\\\\\\\\\\\"var x22 = (Boolean(parseInt(s19, 10))) ? 1 : 0;var b25 = x22; var b26 = eval(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"x23\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");b25 != b26\\\\\\\\\\\\\\\";var e28 = \\\\\\\\\\\\\\\"eval(e27)\\\\\\\\\\\\\\\";eval(e28)\\\\\\\")) { b30 = false; } else { b30 = true; }var e34 = \\\\\\\"!!(Number(eval(\\\\\\\\\\\\\\\"b30\\\\\\\\\\\\\\\")))\\\\\\\";var e35 = \\\\\\\"eval(e34)\\\\\\\";eval(e35)\\\";var b37 = !(eval(e36));var b38 = !(b37);b38\"); }var b42; if (eval(\"eval(e2)\")) { b42 = b40; } else { b42 = !b40; }b42";
    var b47;
    if (eval("eval(e44)") || b46) {
        b47 = true;
    } else {
        b47 = false;
    }
    var s49 = (b47).toString();
    var x50 = Number(s49);
    var x53 = (Boolean(x51)) | 0;
    var b54 = x50;
    var b55 = x53;
    var b56;
    if (b54 < b55) {
        b56 = false;
    } else {
        b56 = true;
    }
    var x58 = (!(b56)) ? 1 : 0;
    var x61 = parseInt((eval("x58")).toString(), 10);
    var b64 = !! (s63);
    var e65 = "b64";
    var x69;
    if (Boolean(x61)) {
        x69 = String(eval(e65));
    } else {
        var s68 = String(x67);
        x69 = s68;
    }
    return x69;
}
fn70(input_B1, input_I3, input_B3, input_S3, input_S1, input_I1);
