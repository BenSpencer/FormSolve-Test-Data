// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(regex-test(str(((int((input_int('I1') in [1, 1, 96, 178, 31])) >= len(input_string('S2'))) !== bool(str(input_int('I1'))))), /^N(hE[A-Z]|iEVM)?R$/))) then (str(int((if input_bool('B2') then not((int(input_string('S1')) <= input_int('I3'))) else input_bool('B1')))) + str(len(str(len(input_string('S2')))))) else input_string('S1'))

var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);

var fn43 = function (x1, x22, s33, b27, b19, s20) {
    var s6 = s33;
    var s41 = s20;
    var x10 = x1;
    var opts3 = [1, 1, 96, 178, 31];
    var x5 = (opts3.indexOf(x1) > -1) | 0;
    var l7 = (s6).length;
    var s11 = (x10).toString();
    var b12 = !! (s11);
    var b13 = false;
    if ((x5 >= l7) !== b12) {
        b13 = true;
    }
    var re16 = new RegExp("^N(hE[A-Z]|iEVM)?R$");
    var x21 = parseInt(s20, 10);
    var b23;
    if (x21 <= x22) {
        b23 = true;
    } else {
        b23 = false;
    }
    var b26 = !(eval("b23"));
    var x28;
    if (b19) {
        x28 = b26;
    } else {
        x28 = b27;
    }
    var e29 = "x28";
    var s31 = String((eval(e29)) ? 1 : 0);
    var e32 = "s31";
    var l37 = (eval("var l34 = (s33).length;'' + (l34)")).length;
    var x39 = eval(e32) + (l37).toString();
    return (Boolean(+(re16.test(String(b13)))) ? x39 : s41);
}
fn43(input_I1, input_I3, input_S2, input_B1, input_B2, input_S1);
