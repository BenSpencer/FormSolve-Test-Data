// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S3')) then (int(str(input_bool('B2'))) != (len(str((if (len(input_string('S1')) > input_int('I1')) then false else (input_bool('B2') != (input_int('I1') != len(input_string('S3'))))))) * int(bool(str(bool(input_int('I1'))))))) else bool((len(input_string('S3')) % input_int('I3'))))

var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn43 = function (s6, b11, s1, x13, x37) {
    var s14 = s1;
    var s34 = s1;
    var b3 = b11;
    var s4 = String(b3);
    var x5 = Number(s4);
    var x24 = x13;
    var e27 = "var b25 = (x24) ? true : false;var s26 = '' + (b25);s26";
    var x29 = ~~ ((eval(e27)) ? true : false);
    x30 = (eval("var x8 = x13; var b9 = false; if ((s6).length > x8) { b9 = true; }var e12 = \"b11\";var l15 = (s14).length;var b18 = false; if (eval(e12) != (x13 != l15)) { b18 = true; }var x20; if (b9) {  x20 = false; } else { x20 = b18; }'' + (x20)")).length;
    x31 = x29;
    var e35 = "s34";
    var l36 = (eval(e35)).length;
    var e38 = "x37";
    x39 = l36 % eval(e38);
    return (Boolean(s1) ? (x5 != x30 * x31) : (x39) ? true : false);
}
fn43(input_S1, input_B2, input_S3, input_I1, input_I3);
