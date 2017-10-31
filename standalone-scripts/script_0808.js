// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((if (5 != input_int('I1')) then (bool(input_int('I3')) == (int(input_string('S3')) != int(bool(str(int(str(int(not(input_bool('B1')))))))))) else input_bool('B2'))) then input_string('S3') else str((str(input_int('I1')) <= input_string('S2'))))

var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);

var fn36 = Function('b12', 'b24', 'x1', 's27', 's31', 'x5', "var s8 = s27; var x28 = x1; var e2 = \"x1\";var b3 = 5 != eval(e2);var e9 = \"s8\";var e11 = \"parseInt(eval(e9), 10)\";var x14 = +(!(b12));var s15 = '' + (x14);var x16 = Number(s15);var b18 = !!(String(x16));var x19 = Number(b18);var b20 = false; if (eval(e11) != x19) { b20 = true; }var x25; if (b3) { x25 = (eval(\"var b6 = Boolean(x5);b6\") == b20); } else { x25 = b24; }var b26; if (x25) { b26 = false; } else { b26 = true; }var e29 = \"x28\";var s30 = String(eval(e29));var b32 = s30; var b33 = s31;var x35; if (b26) { x35 = s27; } else { x35 = '' + (b32 <= b33); } return x35;");
fn36(input_B1, input_B2, input_I1, input_S3, input_S2, input_I3);
