// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(not(input_bool('B2'))) == (int(str(input_bool('B3'))) % int(input_string('S3')))) then true else ((len((str(bool(int(str(int(str(int(input_bool('B1')))))))) + input_string('S2'))) <= input_int('I3')) && (input_string('S3') < str(input_bool('B3')))))

var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn40 = function (b14, b32, b1, x26, s22, s30) {
    var s7 = s30;
    var b4 = b32;
    var x3 = ~~ (!(b1));
    var e11 = "var s5 = '' + (b4);var x6 = parseInt(s5, 10);var x8 = Number(s7);(x6 % x8)";
    var x17 = Number('' + ((b14) | 0));
    var s18 = (x17).toString();
    var x19 = parseInt(s18, 10);
    var x23 = (Boolean(x19)).toString();
    var x24 = s22;
    var l25 = (x23 + x24).length;
    var b27 = false;
    if (l25 <= x26) {
        b27 = true;
    }
    var e31 = "s30";
    var s34 = (eval("b32")).toString();
    var b35;
    if (eval(e31) < s34) {
        b35 = true;
    } else {
        b35 = false;
    }
    var b37;
    if (eval("b27") && b35) {
        b37 = true;
    } else {
        b37 = false;
    }
    var x39;
    if ((x3 == eval(e11))) {
        x39 = true;
    } else {
        x39 = b37;
    }
    return x39;
}
fn40(input_B1, input_B3, input_B2, input_I3, input_S2, input_S3);
