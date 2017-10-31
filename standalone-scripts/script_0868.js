// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(input_string('S1'))) then (if bool(input_string('S2')) then (if not((int(str((len(str(bool(input_string('S1')))) != int(input_bool('B3'))))) < int(input_bool('B1')))) then input_bool('B3') else input_bool('B2')) else not((if not((not((str((if bool(input_int('I1')) then int(bool(int(input_string('S3')))) else int(input_bool('B1')))) == input_string('S2'))) !== bool(int(input_bool('B1'))))) then not((int(input_string('S3')) in [10, 100, 47, 21, 1, 0])) else bool(str(len(str(input_bool('B3')))))))) else bool(input_int('I1')))

var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);

var fn66 = Function('s37', 'x26', 'b11', 'b24', 's1', 'b18', 's28', "var x63 = x26; var s6 = s1; var b33 = b18; var s4 = s37; var b54 = b11; var b5 = (s4) ? true : false;var x62; if (b5) { var b23 = b11; var b7 = !!(s6);var x12 = +(b11);var b13 = eval(\"('' + (b7)).length\"); var b14 = x12;var x17 = Number(String(eval(\"b13 != b14\")));var x19 = (b18) | 0;var b20 = x17 < x19;var x25; if (!(b20)) {  x25 = b23; } else {  x25 = b24; } x62 = x25; } else { var s48 = s28; var b42 = b33; var x43 = (b42) ? 1 : 0;var b44 = Boolean(x43);var x60; if (!((eval(\"var e30 = \\\"parseInt(s28, 10)\\\";var x35; if ((x26) ? true : false) { x35 = (!!(eval(e30))) ? 1 : 0; } else { x35 = ~~(b33); }var b38; if ((x35).toString() == s37) { b38 = true; } else { b38 = false; }var b40 = !(b38);b40\") !== b44))) { var x49 = Number(s48);var opts51 = [10, 100, 47, 21, 1, 0];var b50 = opts51.indexOf(x49) > -1; x60 = !(b50); } else { var e58 = \"var l56 = ((b54).toString()).length;(l56).toString()\";var b59 = !!(eval(e58)); x60 = b59; } x62 = !(x60); }var b64 = !!(x63); return (!((s1) ? true : false) ? x62 : b64);");
fn66(input_S2, input_I1, input_B3, input_B2, input_S1, input_B1, input_S3);
