// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then (if bool(str(not((not(not((int((not(bool(input_int('I2'))) != (str(input_int('I2')) <= input_string('S3')))) <= int(input_bool('B3'))))) || (if bool(input_string('S3')) then bool(str(input_bool('B1'))) else (str(input_int('I2')) in ['Y', 'o2', 'OBE37', 'LaFZ'])))))) then str((input_string('S3') > (if input_bool('B2') then str(input_bool('B1')) else input_string('S2')))) else str(int((if input_bool('B3') then input_bool('B1') else input_bool('B1'))))) else input_string('S3'))

var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn59 = function (b23, s21, x2, b40, b1, s43) {
    var s57 = s21;
    var b14 = b1;
    var e56 = "var s39 = s21; var b41 = b23; var b49 = b23; var b48 = b14; var x27 = x2; var s8 = s21; var b20 = !(eval(\"var x5 = x2; var b3 = !!(x2);var b4 = !(b3);var e7 = \\\"(x5).toString()\\\";var b9; if (eval(e7) <= s8) { b9 = true; } else { b9 = false; }var b11 = false; if (b4 != b9) { b11 = true; }var x13 = ~~(b11);var b16 = x13; var b17 = (b14) | 0;var b18; if (b16 <= b17) { b18 = false; } else { b18 = true; }b18\"));var b34; if (b20) { b34 = true; } else { var e24 = \"b23\";var s28 = String(x27);var opts30 = ['Y', 'o2', 'OBE37', 'LaFZ'];var b29 = opts30.indexOf(s28) > -1; b34 = (!!(s21) ? !!('' + (eval(e24))) : eval(\"b29\")); }var b36; if (b34) { b36 = false; } else { b36 = true; }var b38 = !!(String(b36));var x44; if (b40) {  x44 = String(b41); } else {  x44 = s43; }var b45 = s39 > x44;var s47 = '' + (b45);var x55; if (b38) { x55 = s47; } else { x55 = String(eval(\"var b50 = b49; var x51; if (b48) {  x51 = b49; } else {  x51 = b50; }Number(x51)\")); }x55";
    var x58;
    if (b1) {
        x58 = eval(e56);
    } else {
        x58 = s57;
    }
    return x58;
}
fn59(input_B1, input_S3, input_I2, input_B2, input_B3, input_S2);
