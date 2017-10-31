// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I1')) then ((len(input_string('S1')) > input_int('I1')) === (input_int('I3') === input_int('I3'))) else (int(input_string('S1')) >= ((input_int('I2') + len(str(int(not((not(input_bool('B3')) && bool((len(input_string('S1')) * int(str(input_bool('B1'))))))))))) / (if input_bool('B3') then input_int('I3') else input_int('I2')))))

var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn50 = Function('x19', 'b20', 'x11', 'b27', 'x1', 's17', "var x6 = x1; var x42 = x11; var s3 = s17; var b2 = (x1) ? true : false;var e4 = \"s3\";var l5 = (eval(e4)).length;var e7 = \"x6\";var b8 = false; if (l5 > eval(e7)) { b8 = true; }var x12 = x11; var b13 = x11; var b14 = x12;var s25 = s17; var x43 = x19; var b41 = b20; var e21 = \"b20\";var b22; if (eval(e21)) { b22 = false; } else { b22 = true; }var e23 = \"b22\";var l26 = (s25).length;var s28 = String(b27);var x29 = Number(s28);x30 = l26; x31 = x29;var b32 = !!(x30 * x31);var b33 = false; if (eval(\"eval(e23)\") && b32) { b33 = true; }var s37 = String(~~(!(b33)));var x44; if (b41) { x44 = x42; } else { x44 = x43; }var b47 = Number(s17) >= ((x19 + (s37).length) / x44);var x49; if (b2) { x49 = (eval(\"b8\") === b13 === b14); } else { x49 = b47; } return x49;");
fn50(input_I2, input_B3, input_I3, input_B1, input_I1, input_S1);
