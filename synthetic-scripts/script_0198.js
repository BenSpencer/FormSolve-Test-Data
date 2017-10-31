// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then input_int('I3') else int(((if input_bool('B2') then input_int('I3') else input_int('I2')) === (input_int('I3') + int((if (if (input_int('I1') < (int(not((input_bool('B2') === input_bool('B2')))) / input_int('I1'))) then input_bool('B2') else ((input_int('I3') in [2, 52, 0, 1, 1]) != input_bool('B2'))) then false else (int((input_int('I2') in [160, -13, 0, 0, 53])) >= input_int('I1'))))))))

var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);

var fn51 = Function('b11', 'x31', 'x1', 'x17', "var x23 = x1; var x50; if (true) { x50 = x1; } else { var x5 = x31; var b2 = b11; var x4 = x23; var x6; if (eval(\"b2\")) { x6 = x4; } else { x6 = x5; }var x7 = x23; var e43 = \"var x38 = x17; var b22 = b11; var b27 = b11; var x8 = x17; var e16 = \\\"var b9 = b11; var b12 = eval(\\\\\\\"b9\\\\\\\"); var b13 = b11;var x15 = (!(b12 === b13)) ? 1 : 0;x15\\\";x18 = eval(e16); x19 = x17;var x30; if ((x8 < x18 / x19)) {  x30 = b22; } else { var opts25 = [2, 52, 0, 1, 1];var b24 = false; for (var idx26 = 0; idx26 < opts25.length; idx26++) { if (opts25[idx26] == x23) { b24 = true; break; } }var b28 = b24 != b27; x30 = b28; }var x41; if (x30) {  x41 = false; } else { var e32 = \\\"x31\\\";var opts34 = [160, -13, 0, 0, 53];var b33 = opts34.indexOf(eval(e32)) > -1;var e36 = \\\"b33\\\";var x37 = ~~(eval(e36));var b39; if (x37 >= x38) { b39 = true; } else { b39 = false; } x41 = b39; }var e42 = \\\"x41\\\";eval(e42)\";x45 = x7; x46 = Number(eval(e43));var b47 = x6 === x45 + x46; x50 = +(b47); } return x50;");
fn51(input_B2, input_I2, input_I3, input_I1);
