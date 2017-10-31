// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(str((if input_bool('B3') then (not(bool((if not((input_string('S3') >= str(bool((int(input_string('S3')) % int(bool(len(input_string('S1'))))))))) then str(input_int('I3')) else str(input_bool('B3'))))) == input_bool('B3')) else bool(str((input_int('I1') - int(input_bool('B2'))))))))) then true else not(not((input_string('S1') == str(input_int('I1'))))))

var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);

var fn50 = Function('b31', 'x18', 's42', 's2', 'x30', 'b1', "var x43 = x30; var s5 = s42; var b21 = b1; var b26 = b21; var s3 = s2; var x9 = +((eval(\"var l6 = (s5).length;l6\")) ? true : false);x10 = Number(s3) % x9;var e12 = \"x10\";var s14 = ((eval(e12)) ? true : false).toString();var b15 = s2 >= s14;var e20 = \"var s19 = '' + (x18);s19\";var x23; if (!(b15)) { x23 = eval(e20); } else { x23 = String(b21); }var b25; if (!!(x23)) { b25 = false; } else { b25 = true; }var e27 = \"b26\";var x38; if (b1) { x38 = (b25 == eval(e27)); } else { var x33 = (eval(\"b31\")) | 0;var b37 = (((x30 - x33)).toString()) ? true : false; x38 = b37; }var s39 = (x38).toString();var b45; if (s42 == String(x43)) { b45 = true; } else { b45 = false; }var b47 = !(b45);var x49; if ((parseInt(s39, 10)) ? true : false) {  x49 = true; } else { x49 = !(b47); } return x49;");
fn50(input_B2, input_I3, input_S1, input_S3, input_I1, input_B3);
