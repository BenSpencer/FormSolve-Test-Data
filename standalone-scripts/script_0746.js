// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I3') >= input_int('I2')) then true else regex-test(str(int(input_string('S2'))), /^EIbTJBTIa\rq(u|N)+[0-9]tq$/))

var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);

(function (x2, s5, x1) {
    var b3;
    if (x1 >= x2) {
        b3 = true;
    } else {
        b3 = false;
    }
    var x6 = Number(s5);
    var x9;
    if (b3) {
        x9 = true;
    } else {
        x9 = ((x6).toString()).match(/^EIbTJBTIa\rq(u|N)+[0-9]tq$/) !== null;
    }
    return x9;
})(input_I2, input_S2, input_I3);
