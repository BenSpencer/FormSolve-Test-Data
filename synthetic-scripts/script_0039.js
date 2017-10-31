// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if bool(str((bool(int(input_bool('B3'))) && (len((if not(input_bool('B1')) then input_string('S2') else input_string('S3'))) < len(str(input_bool('B3'))))))) then not(regex-test(str(int(input_string('S2'))), /^pqG(id| )*GE[a-z]$/)) else ("Sif" <= input_string('S1'))) then int(str(input_int('I3'))) else input_int('I2'))

var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");

function fn38(s7, x33, b1, s28, x36, s20, b4) {
    var s6 = s20;
    var b10 = b1;
    var b3 = Boolean(+(b1));
    var b5 = !(b4);
    var e11 = "b10";
    var s12 = '' + (eval(e11));
    var l13 = (s12).length;
    var b14 = ((b5 ? s6 : s7)).length < l13;
    var b16;
    if (b3 && b14) {
        b16 = true;
    } else {
        b16 = false;
    }
    var s18 = (b16).toString();
    var b29 = "Sif" <= s28;
    var e31 = "b29";
    var x37;
    if (( !! (s18) ? eval("var e25 = \"var re24 = /^pqG(id| )*GE[a-z]$/;re24.test((eval(\\\"var x21 = Number(s20);x21\\\")).toString())\";var b26; if (eval(e25)) { b26 = false; } else { b26 = true; }b26") : eval(e31))) {
        x37 = parseInt(String(x33), 10);
    } else {
        x37 = x36;
    }
    return x37;
}
fn38(input_S3, input_I3, input_B3, input_S1, input_I2, input_S2, input_B1);
