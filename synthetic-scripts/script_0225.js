// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if (if input_bool('B3') then bool(int(str(((if input_bool('B1') then str(bool(input_int('I3'))) else str(len((if regex-test(input_string('S2'), /^j_kUL[0-9]A\W*(m|tGH)Tkd$/) then str(input_int('I2')) else input_string('S3'))))) in ['V', '', '', '8y1', '', 'eslzp', '8TWfD', 'k'])))) else bool(input_string('S1'))) then bool(input_string('S2')) else input_bool('B1')) then input_string('S3') else input_string('S1'))

var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");

var fn39 = function (s28, x4, b3, x10, s31, s14, b1) {
    var s36 = s14;
    var s37 = s28;
    var b33 = b3;
    var s8 = s31;
    var e2 = "b1";
    var e5 = "x4";
    var x21;
    if (b3) {
        x21 = String(Boolean(eval(e5)));
    } else {
        var re9 = /^j_kUL[0-9]A\W*(m|tGH)Tkd$/;
        var e13 = "'' + (eval(\"x10\"))";
        var e15 = "s14";
        var l17 = ((re9.test(s8) ? eval(e13) : eval(e15))).length;
        var e18 = "l17";
        var e20 = "String(eval(e18))";
        x21 = eval(e20);
    }
    var opts23 = ['V', '', '', '8y1', '', 'eslzp', '8TWfD', 'k'];
    var b27 = !! (parseInt((opts23.indexOf(x21) > -1).toString(), 10));
    var x35;
    if ((eval(e2) ? b27 : !! (s28))) {
        x35 = Boolean(s31);
    } else {
        x35 = eval("b33");
    }
    return (x35 ? s36 : s37);
}
fn39(input_S1, input_I3, input_B1, input_I2, input_S2, input_S3, input_B3);
