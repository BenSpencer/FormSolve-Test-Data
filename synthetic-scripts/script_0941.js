// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then (not(not(input_bool('B1'))) !== (int((str(input_int('I3')) < input_string('S3'))) in [2, 1, 1, 74])) else (input_bool('B1') !== (input_bool('B3') || not(input_bool('B3')))))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");

var fn28 = function (b19, s8, x6, b1) {
    var b20 = b1;
    var b3 = b19;
    var e2 = "b1";
    var b5;
    if (!(b3)) {
        b5 = false;
    } else {
        b5 = true;
    }
    var e13 = "var s7 = (x6).toString();var b9 = s7; var b10 = s8;var e11 = \"b9 < b10\";var x12 = ~~(eval(e11));x12";
    var opts15 = [2, 1, 1, 74];
    var b17 = false;
    if (b5 !== opts15.indexOf(eval(e13)) > -1) {
        b17 = true;
    }
    var b21 = b20;
    var b22 = !(b21);
    var b23;
    if (b20) {
        b23 = true;
    } else {
        b23 = b22;
    }
    var x27;
    if (eval(e2)) {
        x27 = b17;
    } else {
        x27 = (b19 !== b23);
    }
    return x27;
}
fn28(input_B1, input_S3, input_I3, input_B3);
