// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (58 == int(input_string('S3'))) then bool(input_string('S1')) else (not((len(str(input_bool('B2'))) in [9, 136, 1, 85, 9, 151, 6, 1, 0, 28])) || (input_int('I2') < int(input_bool('B2')))))

var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);

(function (s1, s6, x18, b19) {
    var b8 = b19;
    var e17 = "var e10 = \"var s9 = (b8).toString();s9\";var l11 = (eval(e10)).length;var opts13 = [9, 136, 1, 85, 9, 151, 6, 1, 0, 28];var b12 = false; for (var idx14 = 0; idx14 < opts13.length; idx14++) { if (opts13[idx14] == l11) { b12 = true; } }var b15 = !(b12);var e16 = \"b15\";eval(e16)";
    var b21;
    if (x18 < (b19) ? 1 : 0) {
        b21 = true;
    } else {
        b21 = false;
    }
    var b23;
    if (eval(e17) || b21) {
        b23 = true;
    } else {
        b23 = false;
    }
    return (eval("var x2 = parseInt(s1, 10);var b3 = 58; var b4 = x2;b3 == b4") ? Boolean(s6) : b23);
})(input_S3, input_S1, input_I2, input_B2);
