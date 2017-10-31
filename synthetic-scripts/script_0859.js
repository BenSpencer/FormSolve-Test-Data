// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not(regex-test(input_string('S3'), /^O([A-Z]+|R )$/)) === bool(int(input_string('S1')))) then (if input_bool('B3') then bool(int(input_bool('B1'))) else input_bool('B2')) else (if (int(input_bool('B1')) !== input_int('I1')) then bool(str(int(bool(str(bool(input_int('I1'))))))) else bool(str(bool(input_int('I3'))))))

var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");

(function (b15, s1, b9, s4, b10, x19, x29) {
    var b17 = b10;
    var b3 = !((s1).match(/^O([A-Z]+|R )$/) !== null);
    var x5 = Number(s4);
    var b6 = Boolean(x5);
    var b7 = b3 === b6;
    var x16;
    if (b9) {
        var e14 = "var e12 = \"(b10) ? 1 : 0\";var b13 = !!(eval(e12));b13";
        x16 = eval(e14);
    } else {
        x16 = b15;
    }
    var x22 = x19;
    var x33;
    if (((b17) ? 1 : 0 !== x19)) {
        var b23 = Boolean(x22);
        var s24 = '' + (b23);
        var b25 = Boolean(s24);
        var x26 = ~~ (b25);
        var b28 = ('' + (x26)) ? true : false;
        x33 = b28;
    } else {
        var s31 = '' + ((x29) ? true : false);
        x33 = (s31) ? true : false;
    }
    return (b7 ? x16 : x33);
})(input_B2, input_S3, input_B3, input_S1, input_B1, input_I1, input_I3);
