// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B2') !== false) then input_string('S1') else str((int(str((input_int('I2') != input_int('I1')))) < int(input_string('S1')))))

var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn19 = function (s13, x7, x6, b1) {
    var s5 = s13;
    var e2 = "b1";
    var b3 = eval(e2);
    var b4 = false;
    var x18;
    if (b3 !== b4) {
        x18 = s5;
    } else {
        var b8 = x6 != x7;
        var s10 = String(b8);
        var x14 = Number(s13);
        var b15 = Number(eval("s10"));
        var b16 = x14;
        x18 = (b15 < b16).toString();
    }
    return x18;
}
fn19(input_S1, input_I1, input_I2, input_B2);
