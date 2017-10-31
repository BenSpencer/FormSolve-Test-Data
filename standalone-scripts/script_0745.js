// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(input_int('I2'))) then not(input_bool('B3')) else (str(bool(int(((if input_bool('B1') then 138 else input_int('I3')) <= (if true then len(str(bool(input_string('S1')))) else int((bool(input_string('S3')) === (input_bool('B3') || input_bool('B2'))))))))) === "Zukf"))

var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");

function fn27(b20, s12, b19, s17) {
    var s15 = '' + ((eval("s12")) ? true : false);
    var b21;
    if (b19) {
        b21 = true;
    } else {
        b21 = b20;
    }
    var b23 = Boolean(s17) === b21;
    var x25 = Number(b23);
    return (true ? (s15).length : x25);
}
var fn40 = function (b8, s29, x9, b30, s31, x1, b28) {
    var b6 = b30;
    var x11;
    if (b8) {
        x11 = 138;
    } else {
        x11 = eval("x9");
    }
    var b32;
    if (x11 <= fn27(b28, s29, b30, s31)) {
        b32 = true;
    } else {
        b32 = false;
    }
    var s36 = '' + ((Number(b32)) ? true : false);
    var b37;
    if (s36 === "Zukf") {
        b37 = true;
    } else {
        b37 = false;
    }
    var x39;
    if (eval("var e4 = \"!((x1) ? true : false)\";eval(e4)")) {
        x39 = !(b6);
    } else {
        x39 = b37;
    }
    return x39;
}
fn40(input_B1, input_S1, input_I3, input_B3, input_S3, input_I2, input_B2);
