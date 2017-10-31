// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then (input_bool('B3') && bool((if (int(not((str(not((if input_bool('B2') then input_bool('B3') else input_bool('B2')))) > input_string('S3')))) > int(input_string('S3'))) then int(input_bool('B1')) else len(str(int(input_string('S2'))))))) else input_bool('B2'))

var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);

function fn34(b1, b2, s10, b19, s22) {
    var b31 = b2;
    var b5 = b1;
    var s15 = s10;
    var b6 = b2;
    var e4 = "eval(\"b2\")";
    var x7;
    if (eval(e4)) {
        x7 = b5;
    } else {
        x7 = b6;
    }
    var b8 = !(x7);
    var s9 = String(b8);
    var b11;
    if (s9 > s10) {
        b11 = true;
    } else {
        b11 = false;
    }
    var x14 = Number(!(b11));
    var x16 = Number(s15);
    var b17 = x14 > x16;
    var e20 = "b19";
    var x21 = Number(eval(e20));
    var e23 = "s22";
    var x24 = parseInt(eval(e23), 10);
    var l26 = ((x24).toString()).length;
    var b28 = !! ((b17 ? x21 : l26));
    var b29;
    if (b1 && b28) {
        b29 = true;
    } else {
        b29 = false;
    }
    var x33;
    if (true) {
        x33 = b29;
    } else {
        x33 = eval("b31");
    }
    return x33;
}
fn34(input_B3, input_B2, input_S3, input_B1, input_S2);
