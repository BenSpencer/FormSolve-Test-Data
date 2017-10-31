// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S3')) then ((int(str(input_bool('B2'))) * 9) <= input_int('I3')) else (input_bool('B1') && not(input_bool('B3'))))

var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn18 = Function('b12', 'x8', 's1', 'b13', 'b3', "var b9 = false; if ((parseInt((b3).toString(), 10) * 9) <= x8) { b9 = true; }var e11 = \"b9\";var b15; if (b12) {  b15 = !(b13); } else { b15 = false; }var x17; if (!!(s1)) { x17 = eval(e11); } else { x17 = b15; } return x17;");
fn18(input_B1, input_I3, input_S3, input_B3, input_B2);
