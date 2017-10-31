// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then int((int(input_string('S3')) !== int(input_bool('B1')))) else int(bool(int(input_string('S3')))))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn16 = Function('s11', 'b5', 'b1', "var s2 = s11; var x3 = parseInt(s2, 10);var e4 = \"x3\";var e6 = \"b5\";var x7 = ~~(eval(e6));var b8 = eval(e4); var b9 = x7;var x10 = +(b8 !== b9);var x12 = parseInt(s11, 10);var b13 = !!(x12); return (b1 ? x10 : Number(b13));");
fn16(input_S3, input_B1, input_B3);
