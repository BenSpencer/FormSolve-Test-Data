// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(input_bool('B3')) > int(input_string('S1'))) then int(not((input_bool('B2') != bool(input_string('S3'))))) else int((if (not(input_bool('B2')) === input_bool('B2')) then input_string('S2') else "oT")))

var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");

var fn27 = Function('s3', 's23', 'b1', 'b17', 's9', "var b8 = b17; var b6 = false; if ((b1) ? 1 : 0 > parseInt(eval(\"s3\"), 10)) { b6 = true; }var x26; if (b6) { var b15 = !((b8 != eval(\"Boolean(eval(\\\"s9\\\"))\"))); x26 = (b15) | 0; } else { var b19 = b17; var b18 = !(b17);var b21 = false; if (b18 === eval(\"b19\")) { b21 = true; }var x24; if (b21) {  x24 = s23; } else { x24 = \"oT\"; } x26 = parseInt(x24, 10); } return x26;");
fn27(input_S1, input_S2, input_B3, input_B2, input_S3);
