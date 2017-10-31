// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(input_bool('B1')) >= int(str(input_int('I2')))) then (str((if (input_bool('B3') && bool(input_string('S2'))) then (not(input_bool('B3')) !== input_bool('B1')) else regex-test(input_string('S1'), /^I(l|Ko)?[a-z]YzCQv$/))) in ['su', 'xpl3H', 'Al', 'n']) else (input_int('I3') == input_int('I1')))

var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn34 = function (s19, x27, s9, b1, x30, x3, b14) {
    var b16 = b1;
    var x2 = +(b1);
    var s4 = String(x3);
    var x5 = Number(s4);
    var b8 = b14;
    var b10 = (s9) ? true : false;
    var b11;
    if (b10) {
        b11 = b8;
    } else {
        b11 = false;
    }
    var x22;
    if (eval("b11")) {
        var b15 = !(b14);
        var b17;
        if (b15 !== b16) {
            b17 = true;
        } else {
            b17 = false;
        }
        x22 = b17;
    } else {
        var re21 = /^I(l|Ko)?[a-z]YzCQv$/;
        x22 = re21.test(eval("s19"));
    }
    var s23 = String(x22);
    var opts25 = ['su', 'xpl3H', 'Al', 'n'];
    var b24 = false;
    for (var idx26 = 0; idx26 < opts25.length; idx26++) {
        if (opts25[idx26] == s23) {
            b24 = true;
        }
    }
    var x33;
    if ((x2 >= x5)) {
        x33 = b24;
    } else {
        x33 = (eval("var e28 = \"x27\";eval(e28)") == x30);
    }
    return x33;
}
fn34(input_S1, input_I3, input_S2, input_B1, input_I1, input_I2, input_B3);
