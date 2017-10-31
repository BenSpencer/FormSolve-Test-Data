// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if regex-test(input_string('S3'), /^([0-9]|\s*)$/) then input_string('S1') else str((int((if bool(int(input_string('S2'))) then input_string('S2') else str(bool(str(input_int('I1')))))) * (if input_bool('B3') then int((if bool(input_string('S3')) then (input_int('I1') < int(not(input_bool('B2')))) else false)) else input_int('I3')))))

var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn38 = Function('s4', 's1', 's3', 'x22', 'x31', 'b24', 'b16', "var s19 = s1; var e36 = \"var x9 = x22; var s8 = s4; var e7 = \\\"var x5 = parseInt(s4, 10);!!(x5)\\\";var e12 = \\\"var b11 = Boolean('' + (x9));b11\\\";var x14; if (eval(e7)) {  x14 = s8; } else { x14 = String(eval(e12)); }var e17 = \\\"b16\\\";var x32; if (eval(\\\"eval(e17)\\\")) { var e21 = \\\"Boolean(s19)\\\";var x29; if (eval(e21)) { var e23 = \\\"x22\\\";var b25; if (b24) { b25 = false; } else { b25 = true; }var b27 = eval(e23) < Number(b25); x29 = b27; } else {  x29 = false; } x32 = +(x29); } else {  x32 = x31; }var s35 = '' + ((parseInt(x14, 10) * x32));s35\";var x37; if ((s1).match(/^([0-9]|\\s*)$/) !== null) {  x37 = s3; } else { x37 = eval(e36); } return x37;");
fn38(input_S2, input_S3, input_S1, input_I1, input_I3, input_B2, input_B3);
