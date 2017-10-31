// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int((if bool(int(input_bool('B1'))) then input_bool('B1') else (true !== bool(int(not(bool(str((if not(input_bool('B3')) then input_bool('B3') else not((len(input_string('S3')) in [1, 15, 9, 0, 0, 1, 3, 8, 84]))))))))))) > int(bool(input_int('I2')))) then int(bool(len(input_string('S3')))) else int(not(input_bool('B3'))))

var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn44 = Function('s36', 'b1', 'b40', 'x29', "var b5 = b40; var s9 = s36; var b4 = b1; var b3 = ((b1) | 0) ? true : false;var x26; if (b3) {  x26 = b4; } else { x26 = eval(\"var b8 = b5; var l10 = (s9).length;var opts12 = [1, 15, 9, 0, 0, 1, 3, 8, 84];var b11 = opts12.indexOf(l10) > -1;var b15 = !(eval(\\\"b11\\\"));var x16; if (eval(\\\"var b6; if (b5) { b6 = false; } else { b6 = true; }b6\\\")) { x16 = b8; } else { x16 = b15; }var b20 = !(eval(\\\"((x16).toString()) ? true : false\\\"));var x21 = (b20) ? 1 : 0;var b23; if (true !== !!(x21)) { b23 = true; } else { b23 = false; }b23\"); }var x27 = (x26) | 0;var e28 = \"x27\";var b34 = eval(e28); var b35 = eval(\"var e32 = \\\"var b30 = Boolean(x29);var x31 = ~~(b30);x31\\\";eval(e32)\");var l37 = (s36).length;var b38 = Boolean(l37); return (b34 > b35 ? (b38) | 0 : ~~(!(b40)));");
fn44(input_S3, input_B1, input_B3, input_I2);
