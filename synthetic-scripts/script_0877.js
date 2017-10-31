// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(bool(int((if bool(input_int('I2')) then (str(((int(str(input_bool('B3'))) === int(input_bool('B3'))) == input_bool('B2'))) > str(input_int('I1'))) else not(bool(str(bool(len(str((input_int('I3') < input_int('I3'))))))))))))) then input_bool('B3') else bool(input_string('S1')))

var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn44 = function (b12, x22, x1, b3, s41, x17) {
    var b40 = b3;
    var b7 = b3;
    var e9 = "(b7) | 0";
    var b10 = parseInt(eval("var s4 = (b3).toString();s4"), 10) === eval(e9);
    var s15 = String((b10 == b12));
    var b19 = eval("s15") > String(x17);
    var e21 = "b19";
    var e30 = "eval(\"var x23 = x22; var e26 = \\\"(x22 < x23)\\\";var l28 = (String(eval(e26))).length;l28\")";
    var s32 = '' + (Boolean(eval(e30)));
    var b33 = Boolean(s32);
    var b34;
    if (b33) {
        b34 = false;
    } else {
        b34 = true;
    }
    var x36 = ((Boolean(x1) ? eval(e21) : b34)) ? 1 : 0;
    var b37 = !! (x36);
    var x38 = (b37) ? 1 : 0;
    var b39 = !! (x38);
    var x43;
    if (b39) {
        x43 = b40;
    } else {
        var b42 = !! (s41);
        x43 = b42;
    }
    return x43;
}
fn44(input_B2, input_I3, input_I2, input_B3, input_S1, input_I1);
