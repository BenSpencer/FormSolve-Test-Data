// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(str((input_string('S2') <= input_string('S1'))))) then str(not(not(((len(input_string('S2')) > int(input_string('S2'))) == (input_bool('B2') != input_bool('B2')))))) else str(not(not(bool(input_string('S3'))))))

var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");

function fn35(b16, s1, s2, s29) {
    var s11 = s1;
    var b3 = s1;
    var b4 = s2;
    var s5 = (b3 <= b4).toString();
    var b7 = !! (eval("s5"));
    var b8;
    if (b7) {
        b8 = false;
    } else {
        b8 = true;
    }
    var b31;
    if ( !! (s29)) {
        b31 = false;
    } else {
        b31 = true;
    }
    var x34;
    if (b8) {
        var e15 = "var s9 = s11; var l10 = (s9).length;var x12 = parseInt(s11, 10);var b13 = l10; var b14 = x12;b13 > b14";
        var b17 = b16;
        var e19 = "eval(\"b17\")";
        var b20;
        if (b16 != eval(e19)) {
            b20 = true;
        } else {
            b20 = false;
        }
        var e22 = "b20";
        var b23;
        if (eval(e15)) {
            b23 = eval(e22);
        } else {
            b23 = !eval(e22);
        }
        var b25;
        if (b23) {
            b25 = false;
        } else {
            b25 = true;
        }
        var b26;
        if (b25) {
            b26 = false;
        } else {
            b26 = true;
        }
        var s27 = '' + (b26);
        x34 = eval("s27");
    } else {
        x34 = (!(b31)).toString();
    }
    return x34;
}
fn35(input_B2, input_S2, input_S1, input_S3);
