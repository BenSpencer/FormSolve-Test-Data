// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_string('S2') > str(input_int('I2'))) then str((input_int('I3') / int((if (input_string('S3') < str(not(bool(input_int('I2'))))) then input_bool('B3') else input_bool('B2'))))) else str((if (input_int('I3') != input_int('I3')) then input_bool('B3') else not(bool(input_int('I3'))))))

var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);

function fn37(b16, x24, b15, s1, x2, s7) {
    var x9 = x2;
    var b30 = b15;
    var x6 = x24;
    var s3 = '' + (x2);
    var b4 = s1;
    var b5 = s3;
    var x31 = x24;
    var x26 = x24;
    var b32 = (x31) ? true : false;
    var b33 = !(b32);
    var x34;
    if ((eval("x24") != eval("x26"))) {
        x34 = b30;
    } else {
        x34 = b33;
    }
    var s35 = (x34).toString();
    var x36;
    if (b4 > b5) {
        var b10 = !! (x9);
        var b11 = !(b10);
        var s12 = String(b11);
        var b13;
        if (eval("s7") < s12) {
            b13 = true;
        } else {
            b13 = false;
        }
        var x19;
        if (b13) {
            x19 = b15;
        } else {
            x19 = eval("eval(\"b16\")");
        }
        x21 = x6 / +(x19);
        var s23 = (x21).toString();
        x36 = s23;
    } else {
        x36 = s35;
    }
    return x36;
}
fn37(input_B2, input_I3, input_B3, input_S2, input_I2, input_S3);
