// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then (input_int('I2') == len(str((if bool(input_int('I1')) then (if input_bool('B3') then bool(input_int('I2')) else input_bool('B1')) else bool(int(str(input_int('I1')))))))) else (if input_bool('B3') then not(bool(int((int(input_string('S3')) in [88, -62, -83, 50])))) else (input_int('I1') < int((input_int('I1') > input_int('I1'))))))

var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn44 = Function('x14', 'b24', 'b1', 'x3', 's25', "var x34 = x14; var b8 = b24; var b11 = b1; var x9 = x3; var x4 = x14; var e6 = \"eval(\\\"x4\\\")\";var b7 = !!(eval(e6));var e13 = \"var x12; if (b8) { var b10 = !!(x9); x12 = b10; } else {  x12 = b11; }x12\";var e18 = \"var s15 = '' + (x14);var b17 = Boolean(Number(s15));b17\";var x19; if (b7) { x19 = eval(e13); } else { x19 = eval(e18); }var l21 = ((x19).toString()).length;var b22 = x3 == l21;var e30 = \"var opts28 = [88, -62, -83, 50];var b27 = false; for (var idx29 = 0; idx29 < opts28.length; idx29++) { if (opts28[idx29] == Number(s25)) { b27 = true; } }b27\";var x31 = (eval(e30)) | 0;var b33; if ((x31) ? true : false) { b33 = false; } else { b33 = true; }var x35 = x34; var x36 = x35; var b37 = x35 > x36;var x39 = (b37) | 0;var b40 = x34 < x39;var x43; if (eval(\"b1\")) { x43 = b22; } else { x43 = (b24 ? b33 : b40); } return x43;");
fn44(input_I1, input_B3, input_B1, input_I2, input_S3);
