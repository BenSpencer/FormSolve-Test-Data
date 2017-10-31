// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (len(str((int(input_bool('B3')) > int(input_bool('B1'))))) > len(input_string('S2'))) then int(input_string('S1')) else (if input_bool('B3') then int(regex-test(input_string('S2'), /^([0-9]*|GDYYm)$/)) else int(input_string('S3'))))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);

(function (b3, s16, s20, b1, s23) {
    var s9 = s20;
    var b19 = b1;
    var x2 = ~~ (b1);
    var b5;
    if (x2 > (b3) ? 1 : 0) {
        b5 = true;
    } else {
        b5 = false;
    }
    var s7 = String(b5);
    var e11 = "eval(\"s9\")";
    var b13 = false;
    if ((s7).length > (eval(e11)).length) {
        b13 = true;
    }
    var x27;
    if (b19) {
        var x22 = ~~ ((s20).match(/^([0-9]*|GDYYm)$/) !== null);
        x27 = x22;
    } else {
        var x26 = Number(eval("eval(\"s23\")"));
        x27 = x26;
    }
    var x28;
    if (eval("b13")) {
        var x17 = parseInt(s16, 10);
        x28 = eval("x17");
    } else {
        x28 = x27;
    }
    return x28;
})(input_B1, input_S1, input_S2, input_B3, input_S3);
