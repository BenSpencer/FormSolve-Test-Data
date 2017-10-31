// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not((str(input_bool('B3')) == input_string('S3'))) == input_bool('B2')) then (bool(str(int(input_string('S1')))) && (if bool(len(str(input_bool('B3')))) then not(input_bool('B1')) else input_bool('B1'))) else (if bool(str(input_int('I1'))) then bool((if not((input_string('S1') != input_string('S3'))) then input_int('I3') else int(input_string('S2')))) else input_bool('B1')))

var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);

function fn46(b21, x36, s11, s3, x27, b1, b7, s38) {
    var s32 = s3;
    var b42 = b21;
    var b15 = b1;
    var s31 = s11;
    var s2 = '' + (b1);
    var b4 = s2 == s3;
    var b9 = !(b4);
    var b10 = eval("b7");
    var b30 = ((eval("x27")).toString()) ? true : false;
    var b33;
    if (s31 != s32) {
        b33 = true;
    } else {
        b33 = false;
    }
    var b35 = !(b33);
    var e37 = "x36";
    var x40;
    if (b35) {
        x40 = eval(e37);
    } else {
        x40 = parseInt(s38, 10);
    }
    var b41 = !! (x40);
    var e44 = "(b30 ? b41 : b42)";
    var x45;
    if (b9 == b10) {
        var b14 = (String(Number(s11))) ? true : false;
        var b23 = b21;
        var b22;
        if (b21) {
            b22 = false;
        } else {
            b22 = true;
        }
        var x24;
        if (eval("eval(\"var l17 = ((b15).toString()).length;!!(l17)\")")) {
            x24 = b22;
        } else {
            x24 = b23;
        }
        var b25;
        if (b14 && x24) {
            b25 = true;
        } else {
            b25 = false;
        }
        x45 = b25;
    } else {
        x45 = eval(e44);
    }
    return x45;
}
fn46(input_B1, input_I3, input_S1, input_S3, input_I1, input_B3, input_B2, input_S2);
