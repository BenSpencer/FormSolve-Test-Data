// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(bool(len(str(not(input_bool('B3'))))))) then str(input_int('I2')) else (str(bool(len((if bool(str((int(input_string('S3')) * int(input_bool('B1'))))) then str(len(str(input_int('I3')))) else str(bool(input_int('I2'))))))) + str(input_bool('B2'))))

var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);

(function (x10, x22, b15, s12, b1, b33) {
    var x26 = x10;
    var x38;
    if (eval("var b2; if (b1) { b2 = false; } else { b2 = true; }var s4 = (eval(\"b2\")).toString();var b6 = ((s4).length) ? true : false;var x7 = +(b6);var b8 = (x7) ? true : false;b8")) {
        x38 = String(x10);
    } else {
        var e14 = "var x13 = Number(s12);x13";
        var x16 = ~~ (b15);
        x17 = eval(e14) * x16;
        var b21 = !! ((eval("x17")).toString());
        var x29;
        if (b21) {
            x29 = (((x22).toString()).length).toString();
        } else {
            var s28 = ( !! (x26)).toString();
            x29 = s28;
        }
        var s32 = String(Boolean((x29).length));
        var x36 = s32 + '' + (eval("b33"));
        x38 = x36;
    }
    return x38;
})(input_I2, input_I3, input_B1, input_S3, input_B3, input_B2);
