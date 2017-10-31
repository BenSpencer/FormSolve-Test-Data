// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S2')) then (input_int('I1') === input_int('I2')) else not((int((int(not(input_bool('B2'))) !== (if bool(input_string('S2')) then int(str(input_int('I2'))) else int(regex-test(input_string('S3'), /^(BdPdVF|gK)*\d*yK\dT[A-Z]Fb$/))))) >= int(input_string('S2')))))

var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);

var fn35 = function (x4, s19, b9, x16, s1) {
    var s14 = s1;
    var x5 = x16;
    var b2 = Boolean(s1);
    var s28 = s14;
    var x27 = (eval("var e12 = \"eval(\\\"!(b9)\\\")\";var x13 = Number(eval(e12));var s17 = String(x16);var x21 = ((s19).match(/^(BdPdVF|gK)*\\d*yK\\dT[A-Z]Fb$/) !== null) | 0;var x22; if (Boolean(s14)) { x22 = parseInt(s17, 10); } else { x22 = x21; }var b23 = x13 !== x22;eval(\"b23\")")) | 0;
    var x29 = Number(s28);
    var b31 = x27 >= eval("x29");
    var b33;
    if (b31) {
        b33 = false;
    } else {
        b33 = true;
    }
    var x34;
    if (eval("b2")) {
        x34 = (x4 === eval("x5"));
    } else {
        x34 = b33;
    }
    return x34;
}
fn35(input_I1, input_S3, input_B2, input_I2, input_S2);
