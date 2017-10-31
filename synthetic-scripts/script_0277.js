// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if bool((input_int('I3') - input_int('I3'))) then (input_string('S3') > "f0x5") else (int(not((if bool(input_string('S2')) then input_bool('B3') else bool(input_int('I3'))))) < int(str(input_bool('B3'))))) then (if not((if true then regex-test(input_string('S2'), /^(Q|[-_ ])*$/) else false)) then (if input_bool('B2') then (input_string('S3') === str(int((if input_bool('B2') then (int(input_string('S2')) in [4, 191, 5, -52, 36]) else input_bool('B2'))))) else (input_int('I2') in [9, 50, 116, 58, 186, 2])) else not(input_bool('B2'))) else bool(input_int('I1')))

var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);

function fn26(x1, s6, b11, s9) {
    var x12 = x1;
    var x2 = x1;
    x3 = x1 - x2;
    var x25;
    if (Boolean(x3)) {
        var b7 = false;
        if (s6 > "f0x5") {
            b7 = true;
        }
        x25 = b7;
    } else {
        var e24 = "var b19 = b11; var e17 = \"var x15; if (Boolean(s9)) {  x15 = b11; } else {  x15 = (eval(\\\"x12\\\")) ? true : false; }var b16; if (x15) { b16 = false; } else { b16 = true; }b16\";var s20 = (b19).toString();var x21 = Number(s20);var b22; if (Number(eval(e17)) < x21) { b22 = true; } else { b22 = false; }b22";
        x25 = eval(e24);
    }
    return x25;
}
function fn72(x66, s28, s30, x27, b60, x61, b29) {
    var s59 = s28;
    var s31 = s30;
    var s62 = s31;
    var b63 = b60;
    var x34;
    if (true) {
        var e33 = "var re32 = new RegExp(\"^(Q|[-_ ])*$\");re32.test(s31)";
        x34 = eval(e33);
    } else {
        x34 = false;
    }
    var b35;
    if (x34) {
        b35 = false;
    } else {
        b35 = true;
    }
    var b64;
    if (b63) {
        b64 = false;
    } else {
        b64 = true;
    }
    var x65;
    if (b35) {
        var fn58 = Function('s37', 'b36', 'x52', 's39', "var b38 = b36; var b45 = b38; var opts43 = [4, 191, 5, -52, 36];var b42 = false; for (var idx44 = 0; idx44 < opts43.length; idx44++) { if (opts43[idx44] == eval(\"Number(s39)\")) { b42 = true; } }var x46; if (b38) { x46 = b42; } else { x46 = b45; }var x47 = +(x46);var b50 = s37; var b51 = '' + (eval(\"x47\"));var opts55 = [9, 50, 116, 58, 186, 2];var b54 = false; for (var idx56 = 0; idx56 < opts55.length; idx56++) { if (opts55[idx56] == eval(\"x52\")) { b54 = true; } }var x57; if (b36) { x57 = b50 === b51; } else { x57 = b54; } return x57;");
        x65 = fn58(s59, b60, x61, s62);
    } else {
        x65 = b64;
    }
    var e70 = "var e67 = \"x66\";Boolean(eval(\"eval(e67)\"))";
    var x71;
    if (fn26(x27, s28, b29, s30)) {
        x71 = x65;
    } else {
        x71 = eval(e70);
    }
    return x71;
}
fn72(input_I1, input_S3, input_S2, input_I3, input_B2, input_I2, input_B3);
