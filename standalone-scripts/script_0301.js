// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then (int(not((str((bool(input_string('S1')) == (int(input_string('S3')) < int(not(not(bool(int(bool(input_string('S1')))))))))) !== input_string('S1')))) - len(str(int(input_string('S3'))))) else int((if true then input_bool('B2') else (input_int('I3') == input_int('I2')))))

var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);

var fn37 = Function('x30', 'x31', 's23', 's18', 'b1', "var b29 = b1; var s4 = s23; var s2 = s18; var s6 = s2; var b3 = Boolean(s2);var x8 = (!!(s6)) | 0;var b9 = !!(x8);var b10; if (b9) { b10 = false; } else { b10 = true; }var b11 = !(b10);var x12 = ~~(b11);var b13 = Number(s4) < x12;var b15; if (b3) { b15 = b13; } else { b15 = !b13; }var s17 = '' + (b15);var b19 = false; if (s17 !== s18) { b19 = true; }var b21; if (b19) { b21 = false; } else { b21 = true; }var x22 = +(b21);var s25 = String(Number(s23));var l26 = (s25).length;x27 = x22; x28 = l26;var b32; if (x30 == x31) { b32 = true; } else { b32 = false; }var x34; if (true) {  x34 = b29; } else { x34 = b32; } return (b1 ? x27 - x28 : Number(x34));");
fn37(input_I3, input_I2, input_S3, input_S1, input_B2);
