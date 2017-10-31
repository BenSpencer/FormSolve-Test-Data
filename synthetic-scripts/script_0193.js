// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(bool(input_string('S1')))) then input_int('I3') else int((if (str(bool(str(bool(input_int('I1'))))) > input_string('S2')) then bool(int((if bool(len(str(bool(input_string('S3'))))) then (str((if false then input_bool('B3') else input_bool('B1'))) <= input_string('S1')) else not(input_bool('B2'))))) else input_bool('B3'))))

var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn37 = function (s15, b28, s1, s12, x6, x5, b21, b20) {
    var s24 = s1;
    var x3 = ( !! (s1)) ? 1 : 0;
    var b4 = Boolean(x3);
    var x36;
    if (b4) {
        x36 = x5;
    } else {
        var b33 = b20;
        var e10 = "var s8 = String(Boolean(x6));(s8) ? true : false";
        var s11 = (eval(e10)).toString();
        var b13 = s11 > s12;
        var l18 = ('' + ( !! (s15))).length;
        var b19 = !! (l18);
        var x22;
        if (false) {
            x22 = b20;
        } else {
            x22 = b21;
        }
        var b26 = (x22).toString() <= eval("s24");
        var x30;
        if (b19) {
            x30 = b26;
        } else {
            x30 = !(b28);
        }
        var x31 = +(x30);
        var x34;
        if (b13) {
            x34 = (x31) ? true : false;
        } else {
            x34 = b33;
        }
        x36 = Number(x34);
    }
    return x36;
}
fn37(input_S3, input_B2, input_S1, input_S2, input_I1, input_I3, input_B1, input_B3);
