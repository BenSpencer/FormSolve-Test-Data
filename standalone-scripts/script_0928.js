// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if regex-test(str(not(input_bool('B3'))), /^(-i|S[a-z]+\wYCMXTIWgh_)$/) then ((2 <= len(input_string('S1'))) || input_bool('B3')) else (if input_bool('B2') then (if bool(input_int('I1')) then input_bool('B2') else input_bool('B1')) else bool((len(str(len(input_string('S2')))) + input_int('I2')))))

var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn32 = function (s5, s20, x15, b13, x25, b1, b18) {
    var b10 = b1;
    var b2;
    if (b1) {
        b2 = false;
    } else {
        b2 = true;
    }
    var re4 = /^(-i|S[a-z]+\wYCMXTIWgh_)$/;
    var b11 = false;
    if (eval("var l6 = (s5).length;var b7; if (2 <= l6) { b7 = true; } else { b7 = false; }b7") || b10) {
        b11 = true;
    }
    var x31;
    if (re4.test(String(b2))) {
        x31 = b11;
    } else {
        var b17 = b13;
        var x19;
        if ((x15) ? true : false) {
            x19 = b17;
        } else {
            x19 = b18;
        }
        var x30;
        if (eval("b13")) {
            x30 = x19;
        } else {
            var l21 = (s20).length;
            var e22 = "l21";
            var l24 = ('' + (eval(e22))).length;
            var e26 = "x25";
            x27 = l24;
            x28 = eval(e26);
            x30 = Boolean(x27 + x28);
        }
        x31 = x30;
    }
    return x31;
}
fn32(input_S1, input_S2, input_I1, input_B2, input_I2, input_B3, input_B1);
