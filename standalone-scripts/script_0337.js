// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(len(input_string('S2')))) then input_string('S3') else str(bool(len(str((if ((input_bool('B3') !== bool(input_string('S3'))) === input_bool('B2')) then input_bool('B1') else not(bool(str(input_bool('B2'))))))))))

var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn29 = function (b11, s5, b6, s1, b14) {
    var s7 = s5;
    var l2 = (s1).length;
    var s3 = String(l2);
    var b4 = (s3) ? true : false;
    var e24 = "var b16 = b11; var b8 = !!(s7);var b9 = false; if (b6 !== b8) { b9 = true; }var b12; if (b9 === b11) { b12 = true; } else { b12 = false; }var x21; if (b12) { x21 = eval(\"b14\"); } else { var e18 = \"var s17 = (b16).toString();s17\";var b19 = Boolean(eval(e18));var b20 = !(b19); x21 = b20; }(eval(\"x21\")).toString()";
    var l25 = (eval(e24)).length;
    var s27 = String((l25) ? true : false);
    var x28;
    if (b4) {
        x28 = s5;
    } else {
        x28 = s27;
    }
    return x28;
}
fn29(input_B2, input_S3, input_B3, input_S2, input_B1);
