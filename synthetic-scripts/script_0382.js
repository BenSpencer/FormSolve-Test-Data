// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (((int(bool((if false then input_string('S3') else input_string('S2')))) / int(not(((input_int('I3') - (input_int('I3') + int(input_string('S1')))) >= 0)))) in [78, 0, 60, 10]) || bool(int(input_string('S3')))) then input_bool('B3') else bool(int(not(bool(input_string('S3'))))))

var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");

function fn41(s1, s11, x10, b31, s2) {
    var s33 = s1;
    var s26 = s1;
    var e3 = "s2";
    var b5 = Boolean((false ? s1 : eval(e3)));
    var e6 = "b5";
    var e7 = "eval(e6)";
    var x8 = (eval(e7)) | 0;
    var x9 = x10;
    x13 = x10 + parseInt(s11, 10);
    x15 = x9 - x13;
    var b17 = x15 >= 0;
    var b19;
    if (b17) {
        b19 = false;
    } else {
        b19 = true;
    }
    var x20 = ~~ (b19);
    x21 = x8 / x20;
    var opts24 = [78, 0, 60, 10];
    var b23 = false;
    for (var idx25 = 0; idx25 < opts24.length; idx25++) {
        if (opts24[idx25] == x21) {
            b23 = true;
        }
    }
    var x27 = Number(s26);
    var b28 = Boolean(x27);
    var b29;
    if (b23) {
        b29 = true;
    } else {
        b29 = b28;
    }
    var x40;
    if (b29) {
        x40 = eval("b31");
    } else {
        var b34 = !! (s33);
        var e35 = "b34";
        var b36 = !(eval(e35));
        var x37 = +(b36);
        var b38 = !! (x37);
        x40 = eval("b38");
    }
    return x40;
}
fn41(input_S3, input_S1, input_I3, input_B3, input_S2);
