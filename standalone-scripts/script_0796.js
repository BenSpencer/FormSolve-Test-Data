// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if false then not(not((if not(((len(input_string('S3')) % input_int('I3')) <= int(input_string('S1')))) then bool(input_int('I2')) else (int(input_string('S1')) >= int(bool(input_string('S1'))))))) else not(input_bool('B2')))

var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);

(function (s14, x12, x3, s1, b25) {
    var e26 = "b25";
    var x28;
    if (false) {
        var s6 = s14;
        var e10 = "(((s1).length % x3) <= parseInt(s6, 10))";
        var b11 = !(eval(e10));
        var b13 = Boolean(x12);
        var x22;
        if (b11) {
            x22 = b13;
        } else {
            var s16 = s14;
            var x15 = Number(s14);
            var b17 = Boolean(s16);
            var e19 = "(b17) ? 1 : 0";
            var b20 = false;
            if (x15 >= eval(e19)) {
                b20 = true;
            }
            x22 = b20;
        }
        x28 = !(!(x22));
    } else {
        x28 = !(eval(e26));
    }
    return x28;
})(input_S1, input_I2, input_I3, input_S3, input_B2);
