// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then int(not((int(not((int(input_string('S3')) < int(input_bool('B3'))))) == len(str(("8Hk" == str(not(not(not(input_bool('B3'))))))))))) else int(not(input_bool('B3'))))

var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn32 = Function('b14', 'b1', 's3', "var b28 = b14; var x31; if (eval(\"b1\")) { var b5 = b14; var e7 = \"(b5) ? 1 : 0\";var b8 = parseInt(s3, 10) < eval(e7);var e10 = \"b8\";var b24; if (Number(eval(\"!(eval(e10))\")) == eval(\"var b15 = !(b14);var b16 = !(b15);var b17; if (b16) { b17 = false; } else { b17 = true; }var b19 = false; if (\\\"8Hk\\\" == '' + (b17)) { b19 = true; }var s21 = (b19).toString();var l22 = (s21).length;l22\")) { b24 = true; } else { b24 = false; }var b26; if (b24) { b26 = false; } else { b26 = true; }var x27 = (b26) ? 1 : 0; x31 = x27; } else { var b29 = !(b28); x31 = (b29) ? 1 : 0; } return x31;");
fn32(input_B3, input_B1, input_S3);
