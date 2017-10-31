// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B1') then input_bool('B2') else true) then str(int(input_string('S3'))) else str(((not(not(input_bool('B2'))) == input_bool('B3')) !== input_bool('B1'))))

var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

(function (b18, b15, b11, s8) {
    var b7 = b18;
    var b6 = b11;
    var x9 = Number(s8);
    var x22;
    if ((function (b3, b1) {
        var e2 = "b1";
        var x4;
        if (eval(e2)) {
            x4 = b3;
        } else {
            x4 = true;
        }
        return x4;
    })(b6, b7)) {
        x22 = String(x9);
    } else {
        var b12 = !(b11);
        var b16 = eval("!(b12)") == b15;
        var b19;
        if (b16 !== b18) {
            b19 = true;
        } else {
            b19 = false;
        }
        var s21 = String(b19);
        x22 = s21;
    }
    return x22;
})(input_B1, input_B3, input_B2, input_S3);
