// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if regex-test(str(input_bool('B3')), /^Pt\wE_\t(\t|.St)?[0-9]$/) then not((if regex-test(input_string('S2'), /^_VSz(kC\W_xrv|f Om[0-9]Ys)*$/) then (len(input_string('S1')) !== input_int('I3')) else not(bool(input_int('I2'))))) else bool(input_string('S2')))

var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn19 = function (b1, x8, s16, s6, x11) {
    var s4 = s16;
    var re5 = new RegExp("^_VSz(kC\\W_xrv|f Om[0-9]Ys)*$");
    var l7 = (s6).length;
    var b9;
    if (l7 !== x8) {
        b9 = true;
    } else {
        b9 = false;
    }
    var b12 = (x11) ? true : false;
    var b13;
    if (b12) {
        b13 = false;
    } else {
        b13 = true;
    }
    var b15 = !((re5.test(s4) ? b9 : b13));
    var x18;
    if (((b1).toString()).match(/^Pt\wE_\t(\t|.St)?[0-9]$/) !== null) {
        x18 = b15;
    } else {
        var b17 = Boolean(s16);
        x18 = b17;
    }
    return x18;
}
fn19(input_B3, input_I3, input_S2, input_S1, input_I2);
