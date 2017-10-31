// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B2') then (if input_bool('B3') then input_bool('B1') else input_bool('B2')) else (bool(input_int('I1')) != (int((if input_bool('B3') then (if not(bool(input_string('S1'))) then bool(input_int('I3')) else false) else bool(input_string('S1')))) in [10, 76, 0, 0, 76, 0, 41, 1, 17]))) then input_bool('B1') else (str((bool((input_int('I2') - int(input_bool('B2')))) !== regex-test(str(input_int('I1')), /^\dE\nJ[a-z]b D .(\W*|\S)$/))) != str(bool(input_int('I1')))))

var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn49 = function (x28, b1, b2, x13, b27, x35, s10) {
    var b3 = b27;
    var x7 = x35;
    var b29 = b1;
    var b9 = b2;
    var b5 = b1;
    var x6;
    if (b2) {
        var e4 = "b3";
        x6 = eval(e4);
    } else {
        x6 = b5;
    }
    var x26;
    if (b1) {
        x26 = x6;
    } else {
        var s17 = s10;
        var b11 = Boolean(s10);
        var b12 = !(b11);
        var x16;
        if (b12) {
            var e14 = "x13";
            var b15 = Boolean(eval(e14));
            x16 = b15;
        } else {
            x16 = false;
        }
        var b18 = Boolean(s17);
        var x19;
        if (b9) {
            x19 = x16;
        } else {
            x19 = b18;
        }
        var opts22 = [10, 76, 0, 0, 76, 0, 41, 1, 17];
        var b24;
        if ((x7) ? true : false != opts22.indexOf(~~(x19)) > -1) {
            b24 = true;
        } else {
            b24 = false;
        }
        x26 = b24;
    }
    var x43 = x35;
    var e40 = "var e33 = \"var x30 = Number(b29);(x28 - x30)\";var b34 = Boolean(eval(e33));var b38 = false; if (b34 !== ('' + (x35)).match(/^\\dE\\nJ[a-z]b D .(\\W*|\\S)$/) !== null) { b38 = true; }b38";
    var e41 = "eval(e40)";
    var b46 = false;
    if ('' + (eval(e41)) != String( !! (x43))) {
        b46 = true;
    }
    var x48;
    if (x26) {
        x48 = b27;
    } else {
        x48 = b46;
    }
    return x48;
}
fn49(input_I2, input_B2, input_B3, input_I3, input_B1, input_I1, input_S1);
