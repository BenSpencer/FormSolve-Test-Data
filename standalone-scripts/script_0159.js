// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then not(not(not(bool((input_int('I2') + int(str(bool((0 / int(bool(input_int('I1')))))))))))) else regex-test(str((if input_bool('B1') then bool(input_string('S3')) else (bool(input_string('S1')) || (if (bool(str(not(bool(str(not(not(input_bool('B1')))))))) !== not(input_bool('B2'))) then bool(int((input_bool('B1') == bool(input_int('I2'))))) else not(bool(str(not(((int(bool(input_int('I1'))) + input_int('I3')) in [1, 0, -41]))))))))), /^rU(s|ppNRF)*_EXwu\wK[-_ ] $/))

var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");

var fn70 = Function('s23', 'x2', 'x53', 'b1', 'x4', 's26', 'b22', "var x50 = x4; var x44 = x2; var b37 = b1; var e21 = \"var x6 = +((x4) ? true : false);var s10 = (Boolean((0 / x6))).toString();x12 = eval(\\\"x2\\\") + Number(s10);var b16; if (!!(eval(\\\"x12\\\"))) { b16 = false; } else { b16 = true; }var e18 = \\\"!(b16)\\\";var e20 = \\\"!(eval(e18))\\\";eval(e20)\";var b28 = b22; var b24 = !!(s23);var e25 = \"b24\";var b27 = Boolean(s26);var b43 = b28; var e40 = \"var e39 = \\\"var b38 = !(b37);b38\\\";eval(e39)\";var b41; if (eval(\"var b30 = !(!(b28));var b33 = !(Boolean((b30).toString()));var s34 = String(b33);Boolean(s34)\") !== eval(e40)) { b41 = true; } else { b41 = false; }var b45 = !!(x44);var b46; if (b43 == b45) { b46 = true; } else { b46 = false; }var b51 = !!(x50);var x52 = (b51) ? 1 : 0;var opts57 = [1, 0, -41];var b59 = !(opts57.indexOf((x52 + x53)) > -1);var s60 = String(b59);var x63; if (b41) { x63 = ((b46) ? 1 : 0) ? true : false; } else { x63 = !((s60) ? true : false); }var b64; if (x63) { b64 = true; } else { b64 = b27; }var x66; if (b22) { x66 = eval(e25); } else { x66 = b64; }var s67 = (x66).toString();var x69; if (b1) { x69 = eval(e21); } else { x69 = (s67).match(/^rU(s|ppNRF)*_EXwu\\wK[-_ ] $/) !== null; } return x69;");
fn70(input_S3, input_I2, input_I3, input_B2, input_I1, input_S1, input_B1);
