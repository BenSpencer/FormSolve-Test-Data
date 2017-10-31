// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(len(str(input_bool('B3')))) then ((-53 - int((str((int(input_string('S2')) !== int(input_string('S2')))) <= "v9Y"))) in [59, 1, 1, 192, 0]) else (not(bool(input_int('I3'))) == (int(input_string('S3')) != input_int('I2'))))

var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);

(function (b1, x29, s5, s26, x22) {
    var s2 = (b1).toString();
    var b4 = !! ((s2).length);
    var e18 = "var s8 = s5; var x9 = Number(s8);var b10 = false; if (eval(\"Number(s5)\") !== x9) { b10 = true; }var b13 = '' + (b10); var b14 = \"v9Y\";var x15 = (b13 <= b14) | 0;(-53 - x15)";
    var opts20 = [59, 1, 1, 192, 0];
    var b19 = false;
    for (var idx21 = 0; idx21 < opts20.length; idx21++) {
        if (opts20[idx21] == eval(e18)) {
            b19 = true;
        }
    }
    var x36;
    if (b4) {
        x36 = b19;
    } else {
        var b23 = (x22) ? true : false;
        var e33 = "eval(\"var x27 = parseInt(s26, 10);var b30 = eval(\\\"x27\\\"); var b31 = x29;b30 != b31\")";
        x36 = (!(eval("b23")) == eval(e33));
    }
    return x36;
})(input_B3, input_I2, input_S2, input_S3, input_I3);
