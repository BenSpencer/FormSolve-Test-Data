// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(input_string('S2')) < (if ((int(str(len(str((bool(str(input_bool('B3'))) || bool(len(str(input_int('I1'))))))))) < input_int('I3')) != bool(input_string('S2'))) then (if input_bool('B1') then int(bool(int(str((str(input_bool('B3')) >= (if true then input_string('S1') else str(input_int('I2')))))))) else input_int('I1')) else int(input_bool('B2')))) then (input_int('I1') !== input_int('I3')) else input_bool('B1'))

var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn58 = Function('x35', 'b45', 's1', 'b25', 'b27', 'x43', 'x17', 's34', "var b56 = b25; var x52 = x43; var x53 = x17; var s20 = s1; var x6 = x43; var b3 = b27; var b18 = eval(\"var s7 = '' + (x6);var l8 = (s7).length;var b10; if (Boolean(l8)) { b10 = true; } else {  b10 = ('' + (b3)) ? true : false; }var l13 = ('' + (b10)).length;var s14 = (l13).toString();var x15 = parseInt(s14, 10);x15\") < x17;var b21 = (s20) ? true : false;var e22 = \"b21\";var b23; if (b18) { b23 = !eval(e22); } else { b23 = eval(e22); }var x47; if (b23) { var e26 = \"b25\";var x44; if (eval(e26)) {  x44 = eval(\"var s28 = (b27).toString();var b36 = s28 >= (function(s29, x30) { var x32; if (true) { x32 = s29; } else { x32 = (x30).toString(); } return x32; })(s34, x35) ;var b40 = Boolean(parseInt(String(b36), 10));var x41 = Number(b40);x41\"); } else { x44 = x43; } x47 = x44; } else { x47 = ~~(b45); }var e50 = \"(parseInt(s1, 10) < x47)\";var x57; if (eval(\"eval(e50)\")) {  x57 = (x52 !== x53); } else { x57 = b56; } return x57;");
fn58(input_I2, input_B2, input_S2, input_B1, input_B3, input_I1, input_I3, input_S1);
