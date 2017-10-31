// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then int(bool(str(input_bool('B2')))) else int((if true then bool(int(input_string('S1'))) else (if (input_bool('B1') || bool(int(input_bool('B3')))) then not(input_bool('B2')) else not(bool((if input_bool('B3') then input_int('I2') else int(input_string('S3')))))))))

var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);

var fn32 = Function('x21', 'b10', 'b1', 's22', 'b11', 's7', "var b17 = b1; var b2 = b1; var b5 = !!((eval(\"b2\")).toString());var x8 = parseInt(s7, 10);var b9 = Boolean(x8);var b20 = b11; var b13 = ((b11) | 0) ? true : false;var b14 = false; if (b10 || b13) { b14 = true; }var e16 = \"b14\";var x28; if (eval(e16)) { var b18 = !(b17); x28 = eval(\"b18\"); } else { var x24; if (b20) { x24 = x21; } else { var x23 = Number(s22); x24 = x23; } x28 = eval(\"!((x24) ? true : false)\"); }var x29; if (true) { x29 = b9; } else { x29 = x28; }var x30 = +(x29); return (b1 ? +(b5) : x30);");
fn32(input_I2, input_B1, input_B2, input_S3, input_B3, input_S1);
