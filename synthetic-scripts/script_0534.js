// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(str(bool(input_int('I1')))) > input_int('I2')) then int(bool(int((if input_bool('B2') then bool(input_int('I2')) else (str((if bool(str(len(input_string('S3')))) then ((str(input_int('I1')) != "f2w") || (int(str(input_int('I1'))) === int((input_string('S1') <= input_string('S3'))))) else input_bool('B3'))) != input_string('S2')))))) else int(input_bool('B2')))

var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");

function fn49(b46, s39, b34, s25, s11, x1, x5) {
    var x17 = x1;
    var x9 = x5;
    var b8 = b46;
    var b6 = Number('' + ((x1) ? true : false)) > x5;
    var b10 = (x9) ? true : false;
    var s38 = '' + (eval("var s26 = s11; var e35 = \"b34\";var x36; if (eval(\"eval(\\\"var s13 = ((s11).length).toString();var b14 = !!(s13);b14\\\")\")) { var x21 = x17; var b19 = false; if ('' + (x17) != \"f2w\") { b19 = true; }var s22 = '' + (x21);var x29 = ~~((s25 <= s26));var b30 = parseInt(eval(\"s22\"), 10); var b31 = x29;var b32 = false; if (b19 || b30 === b31) { b32 = true; } x36 = b32; } else { x36 = eval(e35); }x36"));
    var b40;
    if (s38 != s39) {
        b40 = true;
    } else {
        b40 = false;
    }
    var x48;
    if (b6) {
        x48 = +(Boolean(((b8 ? b10 : b40)) | 0));
    } else {
        var x47 = Number(b46);
        x48 = x47;
    }
    return x48;
}
fn49(input_B2, input_S2, input_B3, input_S1, input_S3, input_I1, input_I2);
