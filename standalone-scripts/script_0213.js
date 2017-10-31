// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(len(input_string('S3'))) then ((input_int('I2') + (if bool((if bool(int((input_string('S1') !== str(input_bool('B3'))))) then int(input_bool('B1')) else input_int('I2'))) then int(regex-test(str(int((input_int('I1') > int(not(bool((len(input_string('S3')) * len(input_string('S3'))))))))), /^ePpS(S|f)?[A-Z]X\tH$/)) else input_int('I1'))) in [0, 72, 4, 1, 30, 73]) else not(bool((if bool(input_int('I3')) then int(input_bool('B3')) else (int(str(bool(input_int('I1')))) / input_int('I3'))))))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);

var fn69 = Function('b17', 'x24', 's8', 'x20', 'b11', 's1', 'x50', "var s25 = s1; var x54 = x24; var b52 = b11; var e2 = \"s1\";var l3 = (eval(e2)).length;var e4 = \"l3\";var x60 = x50; var x64; if ((x50) ? true : false) { var x53 = +(b52); x64 = x53; } else { var e63 = \"var b57 = Boolean(eval(\\\"eval(\\\\\\\"x54\\\\\\\")\\\"));(Number((b57).toString()) / x60)\"; x64 = eval(e63); }var b65 = !!(x64);var b66; if (b65) { b66 = false; } else { b66 = true; }var x68; if (eval(\"!!(eval(e4))\")) { var x7 = x20; var x43 = x24; var b13 = eval(\"eval(\\\"s8\\\")\") !== String(b11);var b16 = (Number(b13)) ? true : false;var e21 = \"x20\";var x22; if (b16) { var e18 = \"b17\"; x22 = (eval(e18)) | 0; } else { x22 = eval(e21); }var x44; if ((x22) ? true : false) { var e39 = \"var s27 = s25; var e28 = \\\"s27\\\";x30 = (s25).length * (eval(e28)).length;var b32 = Boolean(x30);var b33; if (b32) { b33 = false; } else { b33 = true; }var x34 = (b33) | 0;var b35 = x24 > x34;var s38 = (+(b35)).toString();s38\";var re41 = new RegExp(\"^ePpS(S|f)?[A-Z]X\\\\tH$\");var x42 = Number(re41.test(eval(\"eval(e39)\"))); x44 = x42; } else {  x44 = x43; }x45 = x7; x46 = x44;var opts48 = [0, 72, 4, 1, 30, 73];var b47 = false; for (var idx49 = 0; idx49 < opts48.length; idx49++) { if (opts48[idx49] == x45 + x46) { b47 = true; } } x68 = b47; } else { x68 = eval(\"b66\"); } return x68;");
fn69(input_B1, input_I1, input_S1, input_I2, input_B3, input_S3, input_I3);
