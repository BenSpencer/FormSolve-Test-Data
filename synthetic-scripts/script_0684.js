// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_string('S1') != str(not(input_bool('B3')))) then (int(input_string('S2')) in [0, 1, 0, 9, -50, 36, 3]) else bool(int(str(int(str(input_int('I3')))))))

var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn24 = Function('s1', 'x14', 'b3', 's9', "var e2 = \"s1\";var b4; if (b3) { b4 = false; } else { b4 = true; }var x10 = Number(s9);var opts12 = [0, 1, 0, 9, -50, 36, 3];var b11 = false; for (var idx13 = 0; idx13 < opts12.length; idx13++) { if (opts12[idx13] == x10) { b11 = true; } } return ((eval(e2) != eval(\"String(b4)\")) ? b11 : eval(\"eval(\\\"var e17 = \\\\\\\"var s15 = (x14).toString();var x16 = Number(s15);x16\\\\\\\";Boolean(parseInt(String(eval(e17)), 10))\\\")\"));");
fn24(input_S1, input_I3, input_B3, input_S2);
