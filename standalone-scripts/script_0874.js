// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then bool(int(input_string('S3'))) else true)

var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn6 = Function('s2', 'b1', "var x3 = Number(s2);var b4 = !!(x3); return (b1 ? b4 : true);");
fn6(input_S3, input_B2);
