// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(int(str((if bool((input_int('I3') / 1)) then int(bool((if input_bool('B1') then int((input_int('I2') == len(input_string('S1')))) else input_int('I2')))) else int(input_string('S3'))))))) then input_string('S3') else input_string('S3'))

var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");

(function (x15, s9, x1, b6, s20) {
    var s29 = s20;
    var s30 = s20;
    var x7 = x15;
    var x17;
    if (b6) {
        x17 = +((eval("x7") == (eval("s9")).length));
    } else {
        var e16 = "x15";
        x17 = eval(e16);
    }
    var x22;
    if ( !! (eval("x2 = x1 / 1;x2"))) {
        x22 = ~~ (Boolean(x17));
    } else {
        x22 = parseInt(s20, 10);
    }
    var e23 = "x22";
    var s25 = (eval("eval(e23)")).toString();
    var x26 = parseInt(s25, 10);
    var x31;
    if (Boolean((x26).toString())) {
        x31 = s29;
    } else {
        x31 = s30;
    }
    return x31;
})(input_I2, input_S1, input_I3, input_B1, input_S3);
