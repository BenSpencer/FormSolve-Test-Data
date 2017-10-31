// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if regex-test(str(int(bool(input_string('S2')))), /^(P|[-_ ]?)H$/) then (len(input_string('S1')) >= int(bool(str(input_bool('B2'))))) else (if not((bool((int(input_string('S3')) + int((str(input_bool('B2')) != input_string('S2'))))) || (input_int('I1') < (if true then input_int('I2') else int(bool(input_string('S2'))))))) then bool(input_int('I1')) else input_bool('B3'))) then input_int('I1') else input_int('I1'))

var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn49 = Function('x27', 'b41', 's7', 'b17', 's15', 's1', 'x28', "var x46 = x27; var x47 = x27; var s19 = s1; var b9 = b17; var e6 = \"var b2 = Boolean(s1);var s4 = ((b2) ? 1 : 0).toString();var re5 = new RegExp(\\\"^(P|[-_ ]?)H$\\\");re5.test(s4)\";var x38 = x27; var s29 = s19; var x16 = Number(s15);var s18 = (b17).toString();x24 = x16 + ((s18 != eval(\"s19\"))) ? 1 : 0;var b26 = (x24) ? true : false;var x31 = ((s29) ? true : false) | 0;var x32; if (true) { x32 = x28; } else { x32 = x31; }var b33 = x27 < x32;var b35 = b26; var b36 = b33;var e40 = \"(x38) ? true : false\";var x45; if (eval(e6)) { var l8 = (s7).length;var s10 = String(b9); x45 = (l8 >= (!!(s10)) ? 1 : 0); } else { x45 = (!(b35 || b36) ? eval(e40) : eval(\"eval(\\\"b41\\\")\")); }var x48; if (x45) {  x48 = x46; } else { x48 = x47; } return x48;");
fn49(input_I1, input_B3, input_S1, input_B2, input_S3, input_S2, input_I2);
