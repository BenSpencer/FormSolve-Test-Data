// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (replace(str(input_bool('B1')), "p", "6EoXa") < str((input_int('I3') !== input_int('I3')))) then (if bool(int(input_bool('B3'))) then ((str(input_bool('B1')) == input_string('S3')) != bool(input_int('I2'))) else input_bool('B1')) else bool(len(input_string('S1'))))

var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");

(function (x4, b1, s17, b12, x21, s28) {
    var b15 = b1;
    var s2 = String(b1);
    var x5 = x4;
    var b10 = (s2).replace("p", "6EoXa");
    var b11 = eval("String((x4 !== x5))");
    var b25 = b15;
    var x26;
    if (Boolean(~~(b12))) {
        var b19;
        if (String(b15) == eval("s17")) {
            b19 = true;
        } else {
            b19 = false;
        }
        x26 = (b19 != Boolean(x21));
    } else {
        x26 = b25;
    }
    var e27 = "x26";
    var b30 = Boolean((s28).length);
    var x31;
    if (b10 < b11) {
        x31 = eval(e27);
    } else {
        x31 = b30;
    }
    return x31;
})(input_I3, input_B1, input_S3, input_B3, input_I2, input_S1);
