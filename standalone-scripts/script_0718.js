// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((if ((int(input_bool('B2')) in [1, 1, 4, 87, 87, 1]) && input_bool('B2')) then input_bool('B3') else bool((if bool(str(int(not(regex-test(input_string('S2'), /^fT\w  [-_ ]?SH(JF|Nh)\r$/))))) then int(bool(input_string('S1'))) else input_int('I1'))))) then len(str((int(str(input_int('I1'))) * len((if bool(input_string('S1')) then input_string('S2') else str(int((regex-test(input_string('S1'), /^vfqvKL(TjG|u)foe_[A-Z]*rz\S\WI$/) === not(not(input_bool('B2'))))))))))) else len(str(not(input_bool('B1')))))

var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");

(function (s11, b50, s17, x20, b10, b1) {
    var s32 = s11;
    var x27 = x20;
    var b36 = b1;
    var s30 = s17;
    var b6 = b1;
    var opts4 = [1, 1, 4, 87, 87, 1];
    var b3 = false;
    for (var idx5 = 0; idx5 < opts4.length; idx5++) {
        if (opts4[idx5] == +(b1)) {
            b3 = true;
        }
    }
    var b7;
    if (b6) {
        b7 = b3;
    } else {
        b7 = false;
    }
    var re12 = /^fT\w  [-_ ]?SH(JF|Nh)\r$/;
    var b13;
    if (re12.test(s11)) {
        b13 = false;
    } else {
        b13 = true;
    }
    var x14 = Number(b13);
    var s15 = String(x14);
    var b16 = !! (s15);
    var x19 = ~~ (Boolean(s17));
    var e21 = "x20";
    var x23;
    if (b16) {
        x23 = x19;
    } else {
        x23 = eval("eval(e21)");
    }
    var b24 = !! (x23);
    var b26;
    if ((eval("b7") ? b10 : b24)) {
        b26 = false;
    } else {
        b26 = true;
    }
    var x55;
    if (b26) {
        var x29 = Number(String(x27));
        var s34 = s30;
        var e33 = "s32";
        var b38;
        if (!(b36)) {
            b38 = false;
        } else {
            b38 = true;
        }
        var x41 = Number(((s34).match(/^vfqvKL(TjG|u)foe_[A-Z]*rz\S\WI$/) !== null === b38));
        var s42 = String(x41);
        var x43;
        if (Boolean(s30)) {
            x43 = eval(e33);
        } else {
            x43 = s42;
        }
        x46 = x29;
        x47 = (eval("x43")).length;
        var l49 = (String(x46 * x47)).length;
        x55 = l49;
    } else {
        var s52 = '' + (!(b50));
        var e54 = "(s52).length";
        x55 = eval(e54);
    }
    return x55;
})(input_S2, input_B1, input_S1, input_I1, input_B3, input_B2);
