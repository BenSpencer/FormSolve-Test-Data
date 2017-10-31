// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(((input_int('I2') % input_int('I1')) * input_int('I1'))) then (len(str(int((input_string('S3') !== input_string('S2'))))) >= 16) else bool(int((int(input_string('S1')) >= len(str(len(input_string('S2'))))))))

var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);

function fn34(x1, x3, s19, s10, s11) {
    var s22 = s11;
    var x6 = x3;
    x7 = (eval("x1") % x3) * x6;
    var b9 = !! (x7);
    var x33;
    if (b9) {
        var b12 = s10;
        var b13 = s11;
        var s15 = '' + (Number(b12 !== b13));
        var b17;
        if ((s15).length >= 16) {
            b17 = true;
        } else {
            b17 = false;
        }
        x33 = b17;
    } else {
        var e26 = "var l24 = (eval(\"s22\")).length;var e25 = \"l24\";eval(e25)";
        var b29;
        if (eval("var x20 = parseInt(s19, 10);x20") >= ((eval(e26)).toString()).length) {
            b29 = true;
        } else {
            b29 = false;
        }
        var x31 = ~~ (b29);
        var b32 = Boolean(x31);
        x33 = b32;
    }
    return x33;
}
fn34(input_I2, input_I1, input_S1, input_S3, input_S2);
