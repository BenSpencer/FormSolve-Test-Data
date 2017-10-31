// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B3') === input_bool('B2')) then int(str(input_int('I3'))) else (if input_bool('B3') then int(input_bool('B1')) else int(str(input_bool('B3')))))

var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

(function (b11, b1, b2, x6) {
    var b10 = b1;
    var b14 = b10;
    var x17;
    if (b10) {
        var x12 = +(b11);
        x17 = eval("x12");
    } else {
        var s15 = '' + (b14);
        var x16 = parseInt(s15, 10);
        x17 = x16;
    }
    var e18 = "x17";
    var x19;
    if (eval("var b3; if (b1 === b2) { b3 = true; } else { b3 = false; }b3")) {
        x19 = Number(eval("var s7 = String(x6);s7"));
    } else {
        x19 = eval(e18);
    }
    return x19;
})(input_B1, input_B3, input_B2, input_I3);
