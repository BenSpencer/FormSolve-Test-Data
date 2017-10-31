// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not((str(input_bool('B1')) in ['AgMQ', 'HAFuw', '', 'W07']))) then (bool(str(input_int('I2'))) != not(not((if (bool(input_string('S1')) || false) then regex-test(input_string('S1'), /^Z(J|\s?)[-_ ]$/) else input_bool('B2'))))) else (if (bool(input_int('I2')) && bool(input_string('S2'))) then input_bool('B2') else (bool(int(bool(input_int('I2')))) === (193 == int(input_bool('B3'))))))

var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn54 = Function('b50', 'x10', 's14', 'b21', 'b1', 's48', "var x51 = x10; var b49 = b21; var s3 = (eval(\"b1\")).toString();var opts5 = ['AgMQ', 'HAFuw', '', 'W07'];var b4 = false; for (var idx6 = 0; idx6 < opts5.length; idx6++) { if (opts5[idx6] == s3) { b4 = true; break; } }var x53; if (eval(\"!(!(b4))\")) { var e13 = \"var b12 = (String(x10)) ? true : false;b12\";var s19 = s14; var b16 = (eval(\"s14\")) ? true : false;var re20 = /^Z(J|\\s?)[-_ ]$/;var b23; if (((b16 || false) ? re20.test(s19) : b21)) { b23 = false; } else { b23 = true; }var b25 = false; if (eval(e13) != !(b23)) { b25 = true; } x53 = b25; } else {  x53 = eval(\"function fn47(s30, b34, b40, x27) { var x35 = x27; var e28 = \\\"x27\\\";var b32 = !!(eval(e28)) && (s30) ? true : false;var b42; if (193 == (b40) | 0) { b42 = true; } else { b42 = false; }var b44 = eval(\\\"Boolean((Boolean(x35)) ? 1 : 0)\\\"); var b45 = b42;var x46; if (b32) {  x46 = b34; } else { x46 = b44 === b45; } return x46; } fn47(s48, b49, b50, x51)\"); } return x53;");
fn54(input_B3, input_I2, input_S1, input_B2, input_B1, input_S2);
