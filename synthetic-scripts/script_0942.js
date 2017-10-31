// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(bool(int(input_string('S2'))))) then bool(int((len(input_string('S3')) > 71))) else (input_int('I2') > len(str(bool(int(((input_bool('B1') !== (input_int('I2') !== int((input_string('S2') !== input_string('S2'))))) == input_bool('B1'))))))))

var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn39 = Function('x14', 's1', 's8', 'b15', "var s19 = s1; var e7 = \"var b4 = !!(Number(eval(\\\"s1\\\")));var b5; if (b4) { b5 = false; } else { b5 = true; }!(b5)\";var l9 = (s8).length;var b13 = Boolean(+((l9 > 71)));var x16 = x14; var b29 = b15; var s20 = s19; var x23 = ~~((s19 !== s20));var b24; if (eval(\"eval(\\\"x16\\\")\") !== x23) { b24 = true; } else { b24 = false; }var e26 = \"b24\";var b27 = false; if (b15 !== eval(e26)) { b27 = true; }var b30 = b27 == b29;var b33 = ((b30) | 0) ? true : false;var s34 = (b33).toString();var b36; if (x14 > (s34).length) { b36 = true; } else { b36 = false; } return (eval(e7) ? b13 : b36);");
fn39(input_I2, input_S2, input_S3, input_B1);
