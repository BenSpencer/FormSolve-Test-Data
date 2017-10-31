// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S3')) then (if bool(input_string('S2')) then input_bool('B3') else ((input_string('S1') == str(int(input_bool('B2')))) !== ((if input_bool('B3') then str(input_bool('B1')) else str(input_int('I2'))) !== input_string('S2')))) else bool(input_string('S1')))

var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);

(function (s30, x17, b15, s21, b14, s1, b8) {
    var s7 = s30;
    var x32;
    if ( !! (s1)) {
        var e29 = "var s3 = s21; var b5 = b14; var x27; if ((s3) ? true : false) { x27 = eval(\"b5\"); } else { var x9 = (b8) | 0;var e11 = \"String(x9)\";var b12 = false; if (s7 == eval(e11)) { b12 = true; }var s18 = (x17).toString();var x19; if (b14) { x19 = '' + (b15); } else { x19 = s18; }var b22; if (eval(\"x19\") !== s21) { b22 = true; } else { b22 = false; }var b24 = false; if (b12 !== b22) { b24 = true; }var e26 = \"b24\"; x27 = eval(e26); }eval(\"x27\")";
        x32 = eval(e29);
    } else {
        x32 = (s30) ? true : false;
    }
    return x32;
})(input_S1, input_I2, input_B1, input_S2, input_B3, input_S3, input_B2);
