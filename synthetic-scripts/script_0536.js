// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S2')) then not(input_bool('B2')) else (input_int('I2') != int(((int((bool(input_string('S2')) != bool(int(input_bool('B3'))))) - len(input_string('S3'))) !== len(str((if input_bool('B1') then int(input_string('S1')) else input_int('I3'))))))))

var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");

function fn36(x24, b19, b9, s20, b3, s1, s15, x5) {
    var s7 = s1;
    var b12;
    if ((s7) ? true : false != !! ((b9) ? 1 : 0)) {
        b12 = true;
    } else {
        b12 = false;
    }
    var x14 = +(b12);
    x17 = x14;
    x18 = (s15).length;
    var x25;
    if (b19) {
        var e21 = "s20";
        var e22 = "eval(e21)";
        var x23 = Number(eval(e22));
        x25 = x23;
    } else {
        x25 = x24;
    }
    var e27 = "String(x25)";
    var l29 = (eval("eval(e27)")).length;
    var b30 = x17 - x18 !== l29;
    var b33;
    if (eval("x5") != +(b30)) {
        b33 = true;
    } else {
        b33 = false;
    }
    var x35;
    if (Boolean(s1)) {
        var b4;
        if (b3) {
            b4 = false;
        } else {
            b4 = true;
        }
        x35 = b4;
    } else {
        x35 = b33;
    }
    return x35;
}
fn36(input_I3, input_B1, input_B3, input_S1, input_B2, input_S2, input_S3, input_I2);
