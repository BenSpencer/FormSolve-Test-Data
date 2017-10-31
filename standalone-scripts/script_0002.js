// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I1') < int(str(int(bool(str((input_int('I2') < int((str(int((if input_bool('B2') then str(bool(input_string('S1'))) else str(bool(input_string('S3')))))) < "g40P"))))))))) then input_int('I1') else input_int('I3'))

var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);

var fn36 = function (b17, x1, s16, s15, x2, x34) {
    var x33 = x1;
    var fn14 = Function('s4', 's8', 'b3', "var e12 = \"var b9 = (s8) ? true : false;var s10 = '' + (b9);eval(\\\"s10\\\")\";var x13; if (b3) { var e6 = \"(s4) ? true : false\"; x13 = '' + (eval(e6)); } else { x13 = eval(e12); } return x13;");
    var x18 = Number(fn14(s15, s16, b17));
    var s19 = (x18).toString();
    var b20;
    if (s19 < "g40P") {
        b20 = true;
    } else {
        b20 = false;
    }
    var b23 = x2 < Number(b20);
    var e26 = "(b23).toString()";
    var b27 = Boolean(eval(e26));
    var b31 = x1 < parseInt(String((b27) | 0), 10);
    var x35;
    if (b31) {
        x35 = x33;
    } else {
        x35 = x34;
    }
    return x35;
}
fn36(input_B2, input_I1, input_S3, input_S1, input_I2, input_I3);
