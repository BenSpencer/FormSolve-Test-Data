// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then true else ((str(bool(int(input_string('S3')))) in ['', 'tN', '3E', 'v5WY', 'jeNik', 'JR', '6Fupg']) != not((bool(int((input_bool('B3') || input_bool('B2')))) == (input_string('S2') >= input_string('S1'))))))

var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");

var fn33 = Function('s3', 's22', 'b12', 'b1', 's23', "var b11 = b1; var x4 = parseInt(s3, 10);var b5 = !!(x4);var opts9 = ['', 'tN', '3E', 'v5WY', 'jeNik', 'JR', '6Fupg'];var b8 = opts9.indexOf(String(eval(\"b5\"))) > -1;var e20 = \"Boolean(eval(\\\"var e16 = \\\\\\\"var b14; if (b11) { b14 = true; } else { b14 = eval(\\\\\\\\\\\\\\\"b12\\\\\\\\\\\\\\\"); }b14\\\\\\\";var x17 = ~~(eval(e16));x17\\\"))\";var e21 = \"eval(e20)\";var b24; if (s22 >= s23) { b24 = true; } else { b24 = false; }var b26; if (eval(e21)) { if (b24) { b26 = true; } else { b26 = false; } } else { if (b24) { b26 = false; } else { b26 = true; } }var b28; if (b26) { b28 = false; } else { b28 = true; }var b30 = false; if (b8 != eval(\"b28\")) { b30 = true; }var x32; if (eval(\"b1\")) { x32 = true; } else { x32 = b30; } return x32;");
fn33(input_S3, input_S2, input_B2, input_B3, input_S1);
