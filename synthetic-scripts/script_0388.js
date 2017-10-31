// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then input_string('S3') else str((int((input_int('I2') in [1, 1, 40, 5, 1, 0, 0, -64, 30])) === int((not(not((input_string('S2') >= str(not((int(str(input_int('I1'))) === (int(input_string('S2')) - input_int('I3')))))))) || bool(input_string('S2')))))))

var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");

var fn37 = Function('s3', 's13', 'x10', 'x16', 'b1', 'x4', "var opts6 = [1, 1, 40, 5, 1, 0, 0, -64, 30];var b5 = opts6.indexOf(x4) > -1;var s28 = s13; var s9 = s13; var e14 = \"s13\";var x15 = Number(eval(e14));x17 = x15 - x16;var e19 = \"x17\";var b20 = Number('' + (x10)) === eval(e19);var b22 = !(b20);var b24 = false; if (s9 >= String(b22)) { b24 = true; }var b26; if (b24) { b26 = false; } else { b26 = true; }var b27; if (b26) { b27 = false; } else { b27 = true; }var x32 = +((b27 || (s28) ? true : false));var b33; if (~~(b5) === x32) { b33 = true; } else { b33 = false; }var x36; if (eval(\"b1\")) {  x36 = s3; } else { x36 = (b33).toString(); } return x36;");
fn37(input_S3, input_S2, input_I1, input_I3, input_B1, input_I2);
