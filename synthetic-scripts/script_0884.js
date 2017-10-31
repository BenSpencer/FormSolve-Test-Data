// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(len(input_string('S3'))) then len(str(not((if ((input_int('I2') <= int(not(input_bool('B2')))) && input_bool('B3')) then not(((if (int(input_bool('B1')) in [-89, -78, 0, 1, 1, 4, 1, 61]) then true else bool(input_int('I3'))) && not(input_bool('B1')))) else (len(str(input_bool('B2'))) === (if input_bool('B1') then (len(input_string('S3')) / int(input_bool('B3'))) else input_int('I1'))))))) else input_int('I2'))

var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn50 = Function('x48', 'x19', 'b14', 'b11', 's1', 'b27', 'x37', "var s31 = s1; var x5 = x48; var l2 = (s1).length;var e3 = \"l2\";var b4 = Boolean(eval(e3));var e47 = \"var b30 = b14; var b33 = b11; var b6 = b27; var b9 = x5 <= +(!(b6));var b12 = false; if (b9 && b11) { b12 = true; }var b22 = b14; var x15 = (b14) | 0;var opts17 = [-89, -78, 0, 1, 1, 4, 1, 61];var b16 = false; for (var idx18 = 0; idx18 < opts17.length; idx18++) { if (opts17[idx18] == x15) { b16 = true; } }var b20 = (x19) ? true : false;var x21; if (b16) { x21 = true; } else { x21 = b20; }var b23 = !(b22);var x42; if (b12) { x42 = !((x21 && b23)); } else { var e38 = \\\"x37\\\";var x39; if (b30) { x35 = (s31).length / ~~(b33); x39 = x35; } else { x39 = eval(e38); }var b40 = false; if (('' + (b27)).length === x39) { b40 = true; } x42 = b40; }var l45 = ('' + (!(x42))).length;eval(\\\"l45\\\")\"; return (b4 ? eval(e47) : x48);");
fn50(input_I2, input_I3, input_B1, input_B3, input_S3, input_B2, input_I1);
