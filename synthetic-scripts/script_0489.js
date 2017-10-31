// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if false then (input_int('I2') !== input_int('I2')) else (int(input_string('S2')) <= int(str(bool(int(not(bool(int((str(bool(input_int('I3'))) === str(int(bool(input_int('I2'))))))))))))))

var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);

(function (x1, s5, x8) {
    var x13 = x1;
    var e7 = "var x6 = Number(s5);x6";
    var e10 = "eval(\"x8\")";
    var b14 = Boolean(x13);
    var x15 = ~~ (b14);
    var s16 = (x15).toString();
    var b17;
    if ('' + ((eval(e10)) ? true : false) === s16) {
        b17 = true;
    } else {
        b17 = false;
    }
    var x19 = Number(b17);
    var x28;
    if (false) {
        var x2 = x1;
        var b3 = x1;
        var b4 = x2;
        x28 = b3 !== b4;
    } else {
        x28 = (eval(e7) <= parseInt((Boolean(~~(!(Boolean(x19))))).toString(), 10));
    }
    return x28;
})(input_I2, input_S2, input_I3);
