// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B1')) then bool(str(int((str(int(str(int((bool(int(not(input_bool('B1')))) === false))))) === input_string('S2'))))) else (bool(int(not((bool(input_int('I1')) !== bool(input_string('S2')))))) != (int(input_string('S2')) in [51, 46, 156, 1, 70, 0])))

var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);

var fn42 = Function('x22', 's15', 'b1', "var s24 = s15; var b4 = b1; var e7 = \"var b5; if (b4) { b5 = false; } else { b5 = true; }var x6 = Number(b5);x6\";var b8 = Boolean(eval(e7));var b9 = false; if (b8 === false) { b9 = true; }var x11 = ~~(b9);var s12 = String(x11);var x13 = Number(s12);var s14 = String(x13);var b16 = false; if (s14 === s15) { b16 = true; }var x18 = Number(b16);var e19 = \"x18\";var s20 = (eval(e19)).toString();var b21 = Boolean(s20);var s34 = s24; var e33 = \"var e31 = \\\"var b26 = Boolean(x22) !== (s24) ? true : false;var b28; if (b26) { b28 = false; } else { b28 = true; }var e30 = \\\\\\\"Number(b28)\\\\\\\";eval(e30)\\\";Boolean(eval(e31))\";var x35 = parseInt(s34, 10);var opts37 = [51, 46, 156, 1, 70, 0];var b39; if (eval(e33) != opts37.indexOf(x35) > -1) { b39 = true; } else { b39 = false; }var x41; if (eval(\"!(b1)\")) { x41 = b21; } else { x41 = b39; } return x41;");
fn42(input_I1, input_S2, input_B1);
