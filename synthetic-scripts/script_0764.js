// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (len(str((len(input_string('S1')) > int((if (int(input_bool('B3')) > int(input_string('S2'))) then (bool(input_string('S1')) == (len(str(len(input_string('S3')))) > input_int('I1'))) else not(input_bool('B3'))))))) <= (if input_bool('B3') then input_int('I3') else input_int('I1'))) then input_bool('B3') else input_bool('B3'))

var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);

function fn40(s5, x31, b21, x16, s1, s11) {
    var b37 = b21;
    var b38 = b21;
    var x32 = x16;
    var b30 = b21;
    var s9 = s1;
    var b3 = b21;
    var b7 = false;
    if ((b3) | 0 > parseInt(s5, 10)) {
        b7 = true;
    }
    var x23;
    if (b7) {
        var l12 = (s11).length;
        var s13 = (l12).toString();
        var e15 = "(s13).length";
        var b17;
        if (eval(e15) > x16) {
            b17 = true;
        } else {
            b17 = false;
        }
        var b19;
        if (Boolean(s9) == b17) {
            b19 = true;
        } else {
            b19 = false;
        }
        x23 = b19;
    } else {
        var b22;
        if (b21) {
            b22 = false;
        } else {
            b22 = true;
        }
        x23 = b22;
    }
    var b25;
    if ((s1).length > +(x23)) {
        b25 = true;
    } else {
        b25 = false;
    }
    var x34;
    if (b30) {
        x34 = x31;
    } else {
        x34 = eval("x32");
    }
    var b35 = eval("((b25).toString()).length") <= x34;
    var x39;
    if (b35) {
        x39 = b37;
    } else {
        x39 = b38;
    }
    return x39;
}
fn40(input_S2, input_I3, input_B3, input_I1, input_S1, input_S3);
