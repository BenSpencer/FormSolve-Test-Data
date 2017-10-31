// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(input_int('I1'))) then input_string('S1') else str(int(str((int(not(not((str(input_int('I2')) == str(input_int('I3')))))) + (if bool(int(bool(int(bool(str(int(input_string('S1')))))))) then len((str(len(input_string('S2'))) + str(input_int('I1')))) else input_int('I2')))))))

var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");

var fn41 = function (s14, x7, x1, x33, s24) {
    var x28 = x1;
    var s4 = s14;
    var s2 = '' + (x1);
    var b3 = (s2) ? true : false;
    var x40;
    if (b3) {
        x40 = s4;
    } else {
        var x5 = x33;
        var b9 = String(x5);
        var b10 = '' + (x7);
        var b12;
        if (!(b9 == b10)) {
            b12 = false;
        } else {
            b12 = true;
        }
        var e23 = "eval(\"var s16 = (Number(s14)).toString();var b17 = !!(s16);var b21 = Boolean(+(Boolean(Number(b17))));b21\")";
        var l25 = (s24).length;
        var s26 = '' + (l25);
        var s29 = String(x28);
        var l32 = ((eval("s26") + s29)).length;
        var x34;
        if (eval(e23)) {
            x34 = l32;
        } else {
            x34 = x33;
        }
        x35 = +(b12) + x34;
        var x38 = parseInt((x35).toString(), 10);
        x40 = '' + (x38);
    }
    return x40;
}
fn41(input_S1, input_I3, input_I1, input_I2, input_S2);
