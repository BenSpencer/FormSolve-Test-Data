// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_string('S3') > input_string('S3')) then int(str((input_int('I1') == (int(input_bool('B1')) - int((input_string('S2') <= input_string('S3'))))))) else int(str(input_bool('B2'))))

var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn28 = Function('b8', 's1', 'b23', 'x7', 's10', "var s11 = s1; var e6 = \"var s2 = s1; var e3 = \\\"s2\\\";var b4 = false; if (s1 > eval(e3)) { b4 = true; }b4\";var e18 = \"var e14 = \\\"var b12 = s10 <= s11;b12\\\";var x15 = Number(eval(e14));x16 = ~~(b8); x17 = x15;x16 - x17\";var b19; if (x7 == eval(e18)) { b19 = true; } else { b19 = false; }var s21 = (b19).toString();var x27; if (eval(e6)) { x27 = Number(s21); } else { var x26 = Number(eval(\"String(b23)\")); x27 = x26; } return x27;");
fn28(input_B1, input_S3, input_B2, input_I1, input_S2);
