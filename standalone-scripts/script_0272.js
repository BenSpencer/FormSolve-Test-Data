// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I1') === input_int('I1')) then input_bool('B3') else (if regex-test(input_string('S1'), /^([-_ ]|Ty)?$/) then (if bool(input_int('I2')) then not((len(str((bool(int(str(not(input_bool('B1'))))) != regex-test(input_string('S3'), /^(\W*|fG)\S[0-9]VaM$/)))) < input_int('I2'))) else bool(int(bool(int(str(bool(int((input_bool('B1') || bool(int((int(not(input_bool('B3'))) < input_int('I2'))))))))))))) else (int((int(input_string('S3')) <= input_int('I1'))) === int((input_string('S1') !== str(int((input_int('I2') === int(input_bool('B3'))))))))))

var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);

var fn71 = Function('s16', 'b10', 'b28', 's55', 'x1', 'x23', "var x49 = x1; var b5 = b28; var x2 = x1; var b3 = x1; var b4 = x2;var s47 = s16; var x56 = x23; var b57 = b28; var s6 = s55; var x31 = x23; var x8 = x23; var b27 = b10; var b9 = (x8) ? true : false;var b24 = false; if ((eval(\"var e11 = \\\"b10\\\";var b12; if (eval(e11)) { b12 = false; } else { b12 = true; }var s13 = (b12).toString();var x14 = parseInt(s13, 10);var b15 = Boolean(x14);var re17 = /^(\\\\W*|fG)\\\\S[0-9]VaM$/;String((b15 != re17.test(s16)))\")).length < x23) { b24 = true; }var b26; if (b24) { b26 = false; } else { b26 = true; }var b37; if (b27) { b37 = true; } else { var x30 = (!(b28)) ? 1 : 0;var e32 = \"x31\";var x35 = ~~((x30 < eval(e32)));var b36 = (x35) ? true : false; b37 = b36; }var x39 = +(b37);var x46; if (b9) { x46 = b26; } else { x46 = Boolean(+((parseInt((Boolean(x39)).toString(), 10)) ? true : false)); }var x69; if ((s6).match(/^([-_ ]|Ty)?$/) !== null) { x69 = x46; } else { var x48 = parseInt(s47, 10);var e51 = \"eval(\\\"x49\\\")\";var b52 = x48 <= eval(e51);var x54 = +(b52);var e58 = \"b57\";var x62 = +((x56 === +(eval(e58))));var s63 = '' + (x62);var b64 = s55; var b65 = s63;var b67 = x54 === +(b64 !== b65); x69 = b67; } return (b3 === b4 ? b5 : x69);");
fn71(input_S3, input_B1, input_B3, input_S1, input_I1, input_I2);
