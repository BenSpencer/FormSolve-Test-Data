// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not((input_bool('B2') === bool(str(int(bool((if (input_bool('B1') || not((if regex-test(input_string('S2'), /^(n|b[-_ ])?$/) then (input_int('I2') in [82, 6, 20, 28, 189, 144, 1]) else ((str(input_int('I3')) in ['3ZxLR', '2cjg', 'RoS', 'JXZ', 'r']) !== not(not(input_bool('B2'))))))) then input_int('I1') else input_int('I2')))))))) || not(bool(len(str((1 <= int(input_bool('B3')))))))) then input_string('S3') else "RMg")

var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);

var fn49 = Function('s3', 'b1', 'x24', 'x25', 'b2', 'b34', 'x9', 's47', "var b14 = b1; var x5 = x25; var b22; if (b2) { b22 = true; } else { var x19; if ((s3).match(/^(n|b[-_ ])?$/) !== null) { var opts7 = [82, 6, 20, 28, 189, 144, 1];var b6 = false; for (var idx8 = 0; idx8 < opts7.length; idx8++) { if (opts7[idx8] == x5) { b6 = true; } } x19 = b6; } else { var opts12 = ['3ZxLR', '2cjg', 'RoS', 'JXZ', 'r'];var b11 = false; for (var idx13 = 0; idx13 < opts12.length; idx13++) { if (opts12[idx13] == (x9).toString()) { b11 = true; break; } }var b15 = !(b14);var b16 = !(b15);var b17 = b11 !== b16; x19 = b17; }var b21; if (eval(\"x19\")) { b21 = false; } else { b21 = true; } b22 = b21; }var x26; if (b22) { x26 = x24; } else { x26 = x25; }var b31 = false; if (b1 === !!(String(+(!!(x26))))) { b31 = true; }var b45 = !(b31) || eval(\"var e37 = \\\"var x35 = +(b34);eval(\\\\\\\"x35\\\\\\\")\\\";var b38 = 1 <= eval(e37);!(!!(('' + (b38)).length))\");var x48; if (b45) {  x48 = s47; } else { x48 = \"RMg\"; } return x48;");
fn49(input_S2, input_B2, input_I1, input_I2, input_B1, input_B3, input_I3, input_S3);
