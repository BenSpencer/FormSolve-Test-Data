// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (regex-test(input_string('S2'), /^z.[0-9](.|S)+UJay_PUr$/) || not((input_bool('B1') !== bool(input_string('S1'))))) then int(input_string('S1')) else input_int('I1'))

var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);

(function (x15, s1, b3, s11) {
    var s4 = s11;
    var re2 = /^z.[0-9](.|S)+UJay_PUr$/;
    var b8;
    if ((b3 !== !! (s4))) {
        b8 = false;
    } else {
        b8 = true;
    }
    var b9;
    if (re2.test(s1) || b8) {
        b9 = true;
    } else {
        b9 = false;
    }
    return (b9 ? eval("var e13 = \"var x12 = parseInt(s11, 10);x12\";eval(e13)") : x15);
})(input_I1, input_S2, input_B1, input_S1);
