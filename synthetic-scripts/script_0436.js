// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B1') then input_bool('B3') else (input_string('S1') in ['7', 'en', 'IRq', 'W1Q7', '', 'g7i', '', 'A2'])) then input_bool('B2') else (not((input_string('S1') > str(len(str(bool((int((str(int(str(input_int('I1')))) < input_string('S3'))) + len(str(input_bool('B3')))))))))) != (int(not(bool(input_string('S3')))) >= ((input_int('I2') / int(str((str(len(str(not(input_bool('B1'))))) != input_string('S2'))))) * input_int('I1')))))

var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");

function fn62(s11, x40, x13, b2, s47, b1, b9, s17) {
    var b41 = b1;
    var b21 = b2;
    var s4 = s11;
    var opts6 = ['7', 'en', 'IRq', 'W1Q7', '', 'g7i', '', 'A2'];
    var b5 = false;
    for (var idx7 = 0; idx7 < opts6.length; idx7++) {
        if (opts6[idx7] == s4) {
            b5 = true;
            break;
        }
    }
    var x8;
    if (b1) {
        x8 = eval("b2");
    } else {
        x8 = b5;
    }
    var e10 = "b9";
    var s36 = s17;
    var x54 = x13;
    var e12 = "s11";
    var s32 = '' + (eval("eval(\"var s14 = (x13).toString();var x15 = Number(s14);var b18 = (x15).toString() < s17;var x20 = Number(b18);var l24 = (eval(\\\"var s22 = String(b21);s22\\\")).length;var b27 = ((x20 + l24)) ? true : false;var s28 = (b27).toString();var l29 = (s28).length;l29\")"));
    var b33 = eval(e12);
    var b34 = s32;
    var b35;
    if (b33 > b34) {
        b35 = false;
    } else {
        b35 = true;
    }
    var b37 = !! (s36);
    var e45 = "var l44 = ((!(b41)).toString()).length;l44";
    var s46 = (eval(e45)).toString();
    var b48 = false;
    if (s46 != s47) {
        b48 = true;
    }
    var s50 = String(b48);
    var x51 = Number(s50);
    var b57 = false;
    if ((!(b37)) ? 1 : 0 >= ((x40 / x51) * x54)) {
        b57 = true;
    }
    var b59 = b35 != b57;
    return (x8 ? eval(e10) : b59);
}
fn62(input_S1, input_I2, input_I1, input_B3, input_S2, input_B1, input_B2, input_S3);
