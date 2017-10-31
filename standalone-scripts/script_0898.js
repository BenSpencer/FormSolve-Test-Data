// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(input_string('S3'))) then (input_bool('B2') && ((input_int('I3') + len(str(input_bool('B3')))) === int((input_bool('B2') === (input_int('I3') === len(str(input_int('I3')))))))) else bool(input_string('S3')))

var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);

(function (b14, b8, x15, s1) {
    var s29 = s1;
    var e2 = "s1";
    var x31;
    if (Boolean(Number(eval("eval(e2)")))) {
        var b6 = b14;
        var x7 = x15;
        x11 = x7 + ('' + (b8)).length;
        var e21 = "var x16 = x15; var s17 = String(x16);var l18 = (s17).length;var b19 = x15; var b20 = l18;b19 === b20";
        var b22;
        if (b14 === eval(e21)) {
            b22 = true;
        } else {
            b22 = false;
        }
        var b27 = false;
        if (b6 && (eval("x11") === (b22) ? 1 : 0)) {
            b27 = true;
        }
        x31 = b27;
    } else {
        var b30 = !! (s29);
        x31 = b30;
    }
    return x31;
})(input_B2, input_B3, input_I3, input_S3);
