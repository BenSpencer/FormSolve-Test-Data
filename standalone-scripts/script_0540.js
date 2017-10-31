// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then (int(not(input_bool('B2'))) in [1, 0, 1, 89, 39, 12]) else (str(len(input_string('S2'))) < input_string('S3')))

var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);

(function (s12, b2, s8, b1) {
    var opts6 = [1, 0, 1, 89, 39, 12];
    var x19;
    if (b1) {
        x19 = opts6.indexOf(Number(!(b2))) > -1;
    } else {
        x19 = eval("eval(\"eval(\\\"eval(\\\\\\\"var e9 = \\\\\\\\\\\\\\\"s8\\\\\\\\\\\\\\\";var l10 = (eval(e9)).length;var b13 = String(l10) < s12;b13\\\\\\\")\\\")\")");
    }
    return x19;
})(input_S3, input_B2, input_S2, input_B3);
