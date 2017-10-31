// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(not((input_string('S3') === "Inu")))) then not((int((str((if bool(len(str(input_bool('B1')))) then int(bool(input_int('I2'))) else input_int('I3'))) !== "")) != len(str(input_int('I1'))))) else bool(int((if not((int(input_string('S1')) != int((int(bool(input_int('I2'))) === int(bool(int(str((input_int('I2') - int(input_string('S2'))))))))))) then (input_string('S3') + str(bool(input_int('I2')))) else input_string('S3')))))

var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");

var fn65 = Function('s37', 'x22', 'x12', 's30', 'b8', 'x15', 's1', "var s53 = s1; var x32 = x12; var b2 = s1 === \"Inu\";var e6 = \"(!(b2)).toString()\";var b7 = (eval(e6)) ? true : false;var b11 = !!(('' + (b8)).length);var x16; if (b11) { var b13 = !!(x12);var x14 = (b13) | 0; x16 = x14; } else { x16 = x15; }var s17 = (x16).toString();var e18 = \"s17\";var b19; if (eval(e18) !== \"\") { b19 = true; } else { b19 = false; }var x21 = +(b19);var e26 = \"var e23 = \\\"x22\\\";var s24 = '' + (eval(e23));(s24).length\";var b27 = x21 != eval(e26);var x54 = x32; var s60 = s53; var x36 = x32; var e33 = \"x32\";var x35 = (Boolean(eval(e33))) | 0;var e45 = \"eval(\\\"x39 = x36; x40 = parseInt(s37, 10);var b43 = Boolean(parseInt(String(x39 - x40), 10));b43\\\")\";var x46 = (eval(e45)) | 0;var b47 = x35 === x46;var x49 = +(b47);var b50 = false; if (Number(s30) != x49) { b50 = true; }var b52; if (b50) { b52 = false; } else { b52 = true; }var x58 = s53; var x59 = eval(\"var b55 = Boolean(x54);var s56 = (b55).toString();s56\");var x61; if (b52) { x61 = x58 + x59; } else { x61 = s60; }var b63 = !!(Number(x61)); return (b7 ? !(b27) : b63);");
fn65(input_S2, input_I1, input_I2, input_S1, input_B1, input_I3, input_S3);
