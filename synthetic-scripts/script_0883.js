// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(not(regex-test(str(int((true !== (int(str((if bool(input_string('S2')) then (int(input_bool('B3')) < 0) else input_bool('B2')))) !== len(str((input_int('I1') > int(input_bool('B3'))))))))), /^(d|f)\s?R[-_ ]h\s$/))) <= input_int('I2')) then input_bool('B2') else input_bool('B1'))

var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

function fn35(b33, x29, x12, s1, b13, b32) {
    var b8 = b32;
    var b4 = b13;
    var b2 = (s1) ? true : false;
    var x9;
    if (eval("b2")) {
        var x5 = +(b4);
        var b6 = false;
        if (x5 < 0) {
            b6 = true;
        }
        x9 = b6;
    } else {
        x9 = b8;
    }
    var x11 = parseInt((x9).toString(), 10);
    var b15 = x12 > Number(b13);
    var l18 = ((b15).toString()).length;
    var b19 = x11 !== l18;
    var b21;
    if (true !== b19) {
        b21 = true;
    } else {
        b21 = false;
    }
    var e25 = "'' + ((b21) | 0)";
    var re26 = /^(d|f)\s?R[-_ ]h\s$/;
    var b27;
    if (re26.test(eval(e25))) {
        b27 = false;
    } else {
        b27 = true;
    }
    return ((Number(b27) <= x29) ? b32 : b33);
}
fn35(input_B1, input_I2, input_I1, input_S2, input_B3, input_B2);
