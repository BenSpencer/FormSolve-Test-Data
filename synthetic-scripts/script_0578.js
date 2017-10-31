// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then (input_int('I3') <= len(input_string('S2'))) else ((int(bool((input_int('I3') % int(input_bool('B3'))))) != int((input_bool('B1') != true))) === (str(int(input_bool('B2'))) < input_string('S3'))))

var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn33 = Function('x2', 'b1', 'b24', 's27', 's3', 'b17', "var b10 = b1; var x9 = x2; var b7 = false; if (x2 <= eval(\"var l4 = (s3).length;eval(\\\"l4\\\")\")) { b7 = true; }var b15 = (eval(\"var x11 = ~~(b10);x12 = x9; x13 = x11;x12 % x13\")) ? true : false;var b18 = b17; var b19 = true;var b21 = ~~(b15); var b22 = Number(b18 != b19);var e23 = \"b21 != b22\";var s26 = '' + (Number(b24));var b28 = s26 < s27;var b30; if (eval(e23) === b28) { b30 = true; } else { b30 = false; } return (b1 ? b7 : b30);");
fn33(input_I3, input_B3, input_B2, input_S3, input_S2, input_B1);
