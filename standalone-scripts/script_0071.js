// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str((input_int('I2') * input_int('I2')))) then int(str((input_string('S2') == str(int(str(int((((len(input_string('S2')) + (if input_bool('B3') then input_int('I1') else 1)) % (int(input_bool('B1')) * 58)) in [183, 139, 4, 0, 1, 45, -58])))))))) else input_int('I2'))

var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn15 = Function('b12', 'x13', " return (b12 ? x13 : 1);");
var fn46 = Function('x17', 's10', 'b16', 'x1', 'b20', "var x44 = x1; var e8 = \"eval(\\\"var x2 = x1; x3 = x1; x4 = x2;var s5 = '' + (x3 * x4);var b6 = !!(s5);b6\\\")\";var x41 = parseInt(eval(\"var s9 = s10; var e34 = \\\"var e29 = \\\\\\\"x18 = (s10).length + fn15(b16, x17);var x21 = ~~(b20);x22 = x21 * 58;var opts27 = [183, 139, 4, 0, 1, 45, -58];var b26 = opts27.indexOf((x18 % x22)) > -1;b26\\\\\\\";var s31 = '' + ((eval(e29)) ? 1 : 0);eval(\\\\\\\"eval(\\\\\\\\\\\\\\\"s31\\\\\\\\\\\\\\\")\\\\\\\")\\\";var x35 = Number(eval(e34));var b37 = false; if (s9 == String(x35)) { b37 = true; }String(b37)\"), 10);var e42 = \"x41\";var e43 = \"eval(e42)\"; return (eval(e8) ? eval(e43) : x44);");
fn46(input_I1, input_S2, input_B3, input_I2, input_B1);
