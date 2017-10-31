// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not(bool(str((len(input_string('S2')) <= input_int('I3'))))) === (input_int('I1') != int((len(str(((int(input_bool('B3')) - int(input_string('S1'))) * len(str(regex-test(input_string('S2'), /^([0-9]+|I)f$/)))))) !== input_int('I2'))))) then str(input_int('I2')) else input_string('S1'))

var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);

function fn41(b12, s15, x3, x9, s1, x28) {
    var x37 = x28;
    var s39 = s15;
    var s19 = s1;
    var b4;
    if ((s1).length <= x3) {
        b4 = true;
    } else {
        b4 = false;
    }
    var s6 = String(b4);
    var b7 = (s6) ? true : false;
    var b8;
    if (b7) {
        b8 = false;
    } else {
        b8 = true;
    }
    var e11 = "eval(\"x9\")";
    var e14 = "var x13 = (b12) | 0;x13";
    x17 = eval(e14);
    x18 = parseInt(s15, 10);
    var e22 = "var re20 = /^([0-9]+|I)f$/;var s21 = '' + (re20.test(s19));s21";
    var l23 = (eval(e22)).length;
    var b29 = ('' + ((x17 - x18 * l23))).length !== x28;
    var x31 = ~~ (b29);
    var b33;
    if (eval(e11) != eval("x31")) {
        b33 = true;
    } else {
        b33 = false;
    }
    var b35 = false;
    if (b8 === b33) {
        b35 = true;
    }
    var s38 = String(x37);
    return (b35 ? s38 : s39);
}
fn41(input_B3, input_S1, input_I3, input_I1, input_S2, input_I2);
