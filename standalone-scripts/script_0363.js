// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((if bool(str(input_int('I1'))) then (str((str(input_int('I1')) === input_string('S3'))) !== input_string('S2')) else true) == bool(input_string('S1'))) then not(bool(str((if input_bool('B2') then ((if input_bool('B1') then int(input_bool('B1')) else len(input_string('S2'))) >= int(input_bool('B1'))) else bool(str(bool(str((str(("" <= input_string('S3'))) !== input_string('S1')))))))))) else (str(bool((int(bool(input_string('S1'))) % input_int('I2')))) > input_string('S1')))

var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn56 = Function('b26', 's47', 's43', 's38', 'b37', "var e27 = \"b26\";var b39 = b37; function fn36(b28, s33) { var b29 = b28; var e32 = \"var e30 = \\\"b29\\\";~~(eval(e30))\";var l34 = (s33).length; return (b28 ? eval(e32) : l34); } var b41 = false; if (fn36(b37, s38) >= +(b39)) { b41 = true; }var b44 = false; if (\"\" <= s43) { b44 = true; }var s46 = '' + (b44);var b48 = s46 !== s47;var e50 = \"b48\";var s51 = (eval(e50)).toString();var b52 = Boolean(s51);var s53 = (b52).toString();var b54 = Boolean(s53); return (eval(e27) ? b41 : b54);");
var fn78 = Function('s22', 'x1', 's10', 'x69', 's18', 'b61', 'b57', "var s59 = s10; var s60 = s18; var s58 = s22; var s66 = s22; var x7 = x1; var e4 = \"eval(\\\"var e2 = \\\\\\\"x1\\\\\\\";eval(e2)\\\")\";var b6 = ((eval(e4)).toString()) ? true : false;var x21; if (b6) { var e8 = \"x7\";var e12 = \"eval(\\\"s10\\\")\";var b13 = String(eval(e8)); var b14 = eval(e12);var s15 = '' + (b13 === b14);var e16 = \"s15\";var b19 = eval(\"eval(e16)\"); var b20 = s18; x21 = b19 !== b20; } else {  x21 = true; }var b23 = (s22) ? true : false;var s62 = '' + (fn56(b57, s58, s59, s60, b61));var b63 = (s62) ? true : false;var b64 = !(b63);var x77; if ((x21 == b23)) { x77 = eval(\"b64\"); } else { var s74 = s66; var b67 = Boolean(s66);var x68 = Number(b67);x70 = x68; x71 = x69;var b72 = (x70 % x71) ? true : false;var b75 = false; if ('' + (b72) > s74) { b75 = true; } x77 = b75; } return x77;");
fn78(input_S1, input_I1, input_S3, input_I2, input_S2, input_B1, input_B2);
