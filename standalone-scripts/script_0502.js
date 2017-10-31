// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if regex-test(replace(input_string('S1'), "0QZ", "gNGc"), /^\t(k|[a-z])+$/) then (len(str(input_int('I3'))) < input_int('I3')) else not((not(not(input_bool('B1'))) && not(bool((int(bool(len(input_string('S1')))) / input_int('I1'))))))) then (input_int('I2') >= int(input_bool('B1'))) else (bool(str(input_bool('B2'))) && input_bool('B1')))

var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn42 = Function('b34', 's1', 'x5', 'b12', 'x29', 'x19', "var b30 = b12; var b38 = b12; var s15 = s1; var e4 = \"var s2 = (s1).replace(\\\"0QZ\\\", \\\"gNGc\\\");(s2).match(/^\\\\t(k|[a-z])+$/) !== null\";var x28; if (eval(e4)) { var x9 = x5; var s6 = '' + (x5);var e8 = \"(s6).length\";var b10 = false; if (eval(e8) < x9) { b10 = true; } x28 = b10; } else { var b13 = !(b12);var e24 = \"var b17 = ((s15).length) ? true : false;var x18 = (b17) | 0;x20 = x18 / x19;!(!!(x20))\";var b25 = false; if (!(b13) && eval(e24)) { b25 = true; }var b27 = !(b25); x28 = b27; }var b32 = x29; var b33 = Number(b30);var x41; if (x28) { x41 = b32 >= b33; } else { var b39; if (eval(\"var s35 = (b34).toString();var b36 = (s35) ? true : false;b36\")) { b39 = b38; } else { b39 = false; } x41 = b39; } return x41;");
fn42(input_B2, input_S1, input_I3, input_B1, input_I2, input_I1);
