// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(str(input_int('I3'))) > input_int('I1')) then input_string('S1') else str(regex-test(str(bool(input_string('S3'))), /^E(d[a-z]|a)+$/)))

var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");

function fn15(s7, x1, x4, s8) {
    var b5;
    if (parseInt(String(x1), 10) > x4) {
        b5 = true;
    } else {
        b5 = false;
    }
    var x14;
    if (b5) {
        x14 = s7;
    } else {
        var e13 = "var s10 = ((s8) ? true : false).toString();var re11 = /^E(d[a-z]|a)+$/;'' + (re11.test(s10))";
        x14 = eval(e13);
    }
    return x14;
}
fn15(input_S1, input_I3, input_I1, input_S3);
