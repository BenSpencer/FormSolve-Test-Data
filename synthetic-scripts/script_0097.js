// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then input_string('S3') else str(not(bool(int(str(bool((if true then int((int(bool(int(input_bool('B1')))) < len(str(((if bool(int(str(not(input_bool('B1'))))) then int(input_bool('B1')) else int(regex-test(str(len(input_string('S1'))), /^ M\n(\w|a)[-_ ]*iO$/))) < int(input_string('S2'))))))) else int(str((input_string('S2') < input_string('S1'))))))))))))

var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn51 = Function('s2', 's41', 's43', 'b1', "var b42 = b1; var fn40 = function(s16, b12, s23) { var s33 = s23; var s34 = s16; var b35; if (s33 < s34) { b35 = true; } else { b35 = false; }var x38 = Number('' + (b35));var x39; if (true) { var b3 = b12; var b30; if (Number(Boolean((b3) | 0)) < (eval(\"var b7 = b12; var b8; if (b7) { b8 = false; } else { b8 = true; }var b11 = Boolean(Number((b8).toString()));var l17 = (s16).length;var re19 = new RegExp(\\\"^ M\\\\\\\\n(\\\\\\\\w|a)[-_ ]*iO$\\\");var x20 = ~~(re19.test('' + (l17)));var b25 = eval(\\\"(b11 ? ~~(eval(\\\\\\\"eval(\\\\\\\\\\\\\\\"b12\\\\\\\\\\\\\\\")\\\\\\\")) : x20)\\\"); var b26 = parseInt(s23, 10);'' + (b25 < b26)\")).length) { b30 = true; } else { b30 = false; }var x32 = Number(b30); x39 = x32; } else { x39 = x38; } return x39; } var s45 = '' + (Boolean(fn40(s41, b42, s43)));var b48 = !(!!(parseInt(s45, 10)));var s49 = String(b48); return (b1 ? s2 : s49);");
fn51(input_S3, input_S1, input_S2, input_B1);
