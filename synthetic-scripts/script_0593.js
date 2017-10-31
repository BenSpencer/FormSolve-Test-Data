// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I3') === input_int('I1')) then int((if bool(len(input_string('S1'))) then input_string('S2') else str((if input_bool('B2') then int(str(input_bool('B3'))) else int(str((str(input_int('I2')) == input_string('S3')))))))) else int(str(len(str((int(not(bool(int(bool(str(int(input_bool('B3')))))))) in [2, -70, 0, 187, 75, 5, 1, 1]))))))

var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);

function fn51(b29, x26, x2, s27, x1, s5, s8, b28) {
    var b33 = b29;
    var b3 = false;
    if (x1 === x2) {
        b3 = true;
    }
    var l6 = (s5).length;

    function fn25(x15, s18, b9, b11) {
        var e10 = "b9";
        var x13 = parseInt((b11).toString(), 10);
        var s16 = (x15).toString();
        var e17 = "s16";
        var b19 = eval(e17) == s18;
        var x23 = parseInt(eval("(b19).toString()"), 10);
        return (eval(e10) ? eval("x13") : x23);
    }
    var s30 = (fn25(x26, s27, b28, b29)).toString();
    var x31;
    if (Boolean(l6)) {
        x31 = s8;
    } else {
        x31 = s30;
    }
    var e45 = "var b40; if (((eval(\"var x34 = +(b33);!!(String(x34))\")) ? 1 : 0) ? true : false) { b40 = false; } else { b40 = true; }var opts43 = [2, -70, 0, 187, 75, 5, 1, 1];var b42 = false; for (var idx44 = 0; idx44 < opts43.length; idx44++) { if (opts43[idx44] == (b40) | 0) { b42 = true; } }b42";
    var s46 = String(eval(e45));
    var s48 = String((s46).length);
    var x50;
    if (b3) {
        x50 = parseInt(x31, 10);
    } else {
        x50 = parseInt(s48, 10);
    }
    return x50;
}
fn51(input_B3, input_I2, input_I1, input_S3, input_I3, input_S1, input_S2, input_B2);
