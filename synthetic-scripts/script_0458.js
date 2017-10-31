// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (bool(input_string('S3')) === not((bool(int(not((((str((input_string('S2') < input_string('S3'))) === str(bool(input_string('S2')))) == input_bool('B3')) != not(input_bool('B2')))))) !== input_bool('B1')))) then bool(int(input_bool('B2'))) else bool((if input_bool('B2') then str(input_int('I1')) else str(regex-test(input_string('S3'), /^\n([a-z]+|.)$/)))))

var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn54 = Function('b15', 'x48', 'b26', 's10', 'b18', 's1', "var s50 = s1; var b32 = b18; var b49 = b18; var s5 = s1; var b2 = !!(s1);var e3 = \"b2\";var s4 = s10; var e6 = \"s5\";var b7 = false; if (s4 < eval(e6)) { b7 = true; }var s9 = String(b7);var b11 = Boolean(s10);var s12 = (b11).toString();var b16 = (s9 === s12) == b15;var b19 = !(b18);var b22 = !((b16 != b19));var e23 = \"b22\";var x24 = Number(eval(e23));var b25 = !!(x24);var b27 = b25; var b28 = b26;var b29 = !(b27 !== b28);var b30 = eval(e3) === b29;var e34 = \"eval(\\\"b32\\\")\";var x36 = (eval(\"eval(e34)\")) | 0;var b37 = Boolean(x36);var x53; if (b30) { x53 = b37; } else { function fn47(x39, b38, s43) { var e42 = \"eval(\\\"(x39).toString()\\\")\";var x46; if (b38) { x46 = eval(e42); } else { var re44 = new RegExp(\"^\\\\n([a-z]+|.)$\"); x46 = String(re44.test(s43)); } return x46; } var e52 = \"Boolean(fn47(x48, b49, s50))\"; x53 = eval(e52); } return x53;");
fn54(input_B3, input_I1, input_B1, input_S2, input_B2, input_S3);
