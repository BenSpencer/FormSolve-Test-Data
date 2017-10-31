// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((if (input_bool('B3') != (input_string('S2') == input_string('S3'))) then input_string('S2') else input_string('S2')) <= input_string('S3')) then str(input_int('I1')) else str((str(input_bool('B2')) == str(int((str(int(str((input_string('S3') < str(input_bool('B2')))))) >= input_string('S2')))))))

var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn41 = function (s10, s13, b1, b19, x16) {
    var s30 = s10;
    var s22 = s13;
    var s3 = s13;
    var s11 = s10;
    var s2 = s10;
    var e9 = "var b4; if (s2 == s3) { b4 = true; } else { b4 = false; }(b1 != eval(\"b4\"))";
    var x12;
    if (eval(e9)) {
        x12 = s10;
    } else {
        x12 = s11;
    }
    var b14 = x12;
    var b15 = s13;
    var s18 = String(eval("x16"));
    var x40;
    if (b14 <= b15) {
        x40 = s18;
    } else {
        x40 = eval("var b23 = b19; var e21 = \"'' + (b19)\";var e33 = \"var s24 = (b23).toString();var b25; if (s22 < s24) { b25 = true; } else { b25 = false; }((Number(String(b25))).toString() >= s30)\";var b36; if (eval(e21) == (Number(eval(e33))).toString()) { b36 = true; } else { b36 = false; }var s38 = String(b36);s38");
    }
    return x40;
}
fn41(input_S2, input_S3, input_B3, input_B2, input_I1);
