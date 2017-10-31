// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((int(input_string('S2')) !== int(input_bool('B2')))) then (if input_bool('B1') then not((if (((int(not(input_bool('B3'))) != input_int('I3')) === input_bool('B3')) === input_bool('B2')) then bool(int(input_string('S3'))) else not(not(not(input_bool('B1')))))) else ("SXg" >= str(input_bool('B2')))) else input_bool('B2'))

var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn41 = function (b26, b10, s1, s22, b19, x13) {
    var b39 = b19;
    var b4 = b19;
    var x5 = +(b4);
    var b8;
    if ((eval("parseInt(s1, 10)") !== x5)) {
        b8 = false;
    } else {
        b8 = true;
    }
    return (b8 ? eval("var b32 = b19; var b9 = b26; var x37; if (b9) { var b16 = b10; var x12 = (!(b10)) ? 1 : 0;var b14 = false; if (x12 != x13) { b14 = true; }var b17 = b14 === b16;var b20 = false; if (b17 === b19) { b20 = true; }var b27 = !(b26);var b28 = !(b27);var b29; if (b28) { b29 = false; } else { b29 = true; }var x30; if (b20) { x30 = (parseInt(eval(\"s22\"), 10)) ? true : false; } else { x30 = b29; } x37 = !(x30); } else { var s33 = '' + (b32);var b34 = false; if (\"SXg\" >= s33) { b34 = true; } x37 = eval(\"b34\"); }x37") : b39);
}
fn41(input_B1, input_B3, input_S2, input_S3, input_B2, input_I3);
