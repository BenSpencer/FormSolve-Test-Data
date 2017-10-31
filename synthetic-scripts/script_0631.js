// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(((len(input_string('S3')) / int(str((if not(input_bool('B1')) then bool(int(str(input_int('I1')))) else not(not(input_bool('B2'))))))) !== len(str(int(input_bool('B1')))))) > str(input_int('I2'))) then not(bool(int(input_string('S1')))) else input_bool('B3'))

var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);

function fn41(x27, s1, b19, b11, x7, s35, b39) {
    var e34 = "eval(\"eval(\\\"var b4 = b19; var b13; if (!(b11)) { b13 = false; } else { b13 = true; }var x14; if (eval(\\\\\\\"!(b4)\\\\\\\")) { x14 = (Number('' + (x7))) ? true : false; } else { x14 = b13; }var x16 = parseInt((x14).toString(), 10);x17 = (eval(\\\\\\\"s1\\\\\\\")).length; x18 = x16;var e22 = \\\\\\\"var x20 = Number(b19);(x20).toString()\\\\\\\";var b24 = x17 / x18 !== (eval(e22)).length;var s29 = String(eval(\\\\\\\"x27\\\\\\\"));var b30; if ((b24).toString() > s29) { b30 = true; } else { b30 = false; }b30\\\")\")";
    var b37 = !! (Number(s35));
    return (eval(e34) ? !(b37) : b39);
}
fn41(input_I2, input_S3, input_B1, input_B2, input_I1, input_S1, input_B3);
