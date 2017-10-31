// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (len(input_string('S2')) >= int(input_string('S2'))) then input_bool('B2') else (int(not(bool(int(input_string('S2'))))) in [100, 90, 1, 2, 0]))

var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn19 = Function('b8', 's1', "var s9 = s1; var s3 = s1; var l2 = (s1).length;var b11 = Boolean(parseInt(s9, 10));var b12; if (b11) { b12 = false; } else { b12 = true; }var x13 = ~~(b12);var opts16 = [100, 90, 1, 2, 0];var b15 = false; for (var idx17 = 0; idx17 < opts16.length; idx17++) { if (opts16[idx17] == eval(\"x13\")) { b15 = true; } }var x18; if (eval(\"(l2 >= Number(s3))\")) { x18 = b8; } else { x18 = b15; } return x18;");
fn19(input_B2, input_S2);
