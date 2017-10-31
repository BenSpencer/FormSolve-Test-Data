// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then int(bool(len(str(not(input_bool('B1')))))) else (int(str((if (bool(int((input_int('I1') >= int((int(not(input_bool('B1'))) <= input_int('I3')))))) != regex-test(str(input_bool('B2')), /^([-_ ]+|Wf)$/)) then int(input_bool('B3')) else input_int('I1')))) - input_int('I3')))

var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn44 = function (b33, x13, x17, b1, b14) {
    var b2 = b14;
    var b26 = b1;
    var e8 = "var e3 = \"b2\";var b4; if (eval(e3)) { b4 = false; } else { b4 = true; }var l7 = (eval(\"'' + (b4)\")).length;l7";
    var b10 = !! (eval("eval(e8)"));
    var e42 = "var x39 = x17; var x35 = x13; var x16 = +(!(b14));var b18 = x16; var b19 = x17;var x20 = ~~(b18 <= b19);var b22 = false; if (x13 >= eval(\"x20\")) { b22 = true; }var e27 = \"b26\";var s28 = '' + (eval(e27));var e29 = \"s28\";var b31; if (!!((b22) | 0) != (eval(e29)).match(/^([-_ ]+|Wf)$/) !== null) { b31 = true; } else { b31 = false; }var x34 = (b33) ? 1 : 0;var s37 = '' + ((b31 ? x34 : x35));var x38 = parseInt(s37, 10);x40 = x38; x41 = x39;x40 - x41";
    var x43;
    if (b1) {
        x43 = +(eval("b10"));
    } else {
        x43 = eval(e42);
    }
    return x43;
}
fn44(input_B3, input_I1, input_I3, input_B2, input_B1);
