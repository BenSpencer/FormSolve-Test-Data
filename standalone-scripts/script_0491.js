// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(input_int('I3')) <= str((int(input_string('S3')) * input_int('I1')))) then (input_string('S3') <= str(int(not(bool(str(input_int('I3'))))))) else bool(str(int(input_bool('B2')))))

var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);

var fn28 = Function('x6', 's13', 'b23', 'x1', "var s4 = s13; var x14 = x1; var e2 = \"x1\";var s3 = '' + (eval(e2));var s9 = String((Number(s4) * x6));var b10 = false; if (s3 <= s9) { b10 = true; }var s15 = String(x14);var b17 = !((s15) ? true : false);var x18 = Number(b17);var s19 = '' + (x18);var x27; if (eval(\"b10\")) { x27 = (s13 <= eval(\"s19\")); } else { var s25 = String(~~(b23)); x27 = !!(s25); } return x27;");
fn28(input_I1, input_S3, input_B2, input_I3);
