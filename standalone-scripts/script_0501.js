// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool((input_int('I3') / len(input_string('S3')))) then str(input_bool('B1')) else str((input_string('S2') in ['', '', 's', 'Y46P', 'B', 'lCAk', 's'])))

var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);

(function (s9, s2, x1, b7) {
    x4 = x1 / (s2).length;
    var b6 = Boolean(x4);
    var x16;
    if (b6) {
        x16 = '' + (b7);
    } else {
        var e11 = "eval(\"s9\")";
        var opts13 = ['', '', 's', 'Y46P', 'B', 'lCAk', 's'];
        var b12 = false;
        for (var idx14 = 0; idx14 < opts13.length; idx14++) {
            if (opts13[idx14] == eval(e11)) {
                b12 = true;
            }
        }
        x16 = (b12).toString();
    }
    return x16;
})(input_S2, input_S3, input_I3, input_B1);
