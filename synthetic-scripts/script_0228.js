// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(bool(str(bool(str((if not(bool(input_int('I1'))) then not(not(bool(int(input_string('S2'))))) else false))))))) then int((len(str(bool(int(input_bool('B2'))))) === int(str((int((bool(int(bool(str((bool(str(not(((if bool(input_string('S3')) then int(input_bool('B1')) else len(str(((input_string('S1') in ['a', '', 'Z8D', 'tr3B', '', '2', 'jVFW', 'F']) === input_bool('B2'))))) in [0, 0, 1, 0, 7, 39, -58, 1, 0])))) && (input_string('S3') in ['G', '0PlE', 'hW', 'Fqj', 'h7zf', '5owx', '0i', '3BR'])))))) == input_bool('B3'))) / int(input_bool('B2'))))))) else input_int('I3'))

var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn76 = function (s26, b58, x13, s12, s30, x74, b28, b21) {
    var b34 = b21;
    var b23 = Boolean(Number(b21));
    var l25 = ((b23).toString()).length;
    var e70 = "var b63 = b34; var s47 = s26; var x29 = (b28) ? 1 : 0;var opts32 = ['a', '', 'Z8D', 'tr3B', '', '2', 'jVFW', 'F'];var b31 = false; for (var idx33 = 0; idx33 < opts32.length; idx33++) { if (opts32[idx33] == s30) { b31 = true; break; } }var b35 = false; if (b31 === b34) { b35 = true; }var opts42 = [0, 0, 1, 0, 7, 39, -58, 1, 0];var b41 = false; for (var idx43 = 0; idx43 < opts42.length; idx43++) { if (opts42[idx43] == (Boolean(s26) ? x29 : (String(eval(\"b35\"))).length)) { b41 = true; } }var b44 = !(b41);var s45 = '' + (b44);var opts49 = ['G', '0PlE', 'hW', 'Fqj', 'h7zf', '5owx', '0i', '3BR'];var b48 = false; for (var idx50 = 0; idx50 < opts49.length; idx50++) { if (opts49[idx50] == s47) { b48 = true; break; } }var b52 = Boolean(s45) && eval(\"b48\");var s54 = '' + (b52);var b55 = (s54) ? true : false;var x56 = ~~(b55);var b59; if (Boolean(x56) == b58) { b59 = true; } else { b59 = false; }var e61 = \"b59\";var x62 = (eval(e61)) | 0;var x64 = (b63) ? 1 : 0;x65 = x62 / x64;var e67 = \"x65\";var x69 = parseInt((eval(e67)).toString(), 10);x69";
    return (!(eval("var s14 = String((function(s4, x1) { var b2 = Boolean(x1);var b3 = !(b2);var x10; if (b3) { var b7 = !(Boolean(parseInt(s4, 10)));var b8; if (b7) { b8 = false; } else { b8 = true; }var e9 = \"b8\"; x10 = eval(e9); } else {  x10 = false; } return x10; })(s12, x13) );var s16 = (!!(s14)).toString();var b18 = !(Boolean(s16));b18")) ? ((l25 === eval(e70))) ? 1 : 0 : x74);
}
fn76(input_S3, input_B3, input_I1, input_S2, input_S1, input_I3, input_B1, input_B2);
