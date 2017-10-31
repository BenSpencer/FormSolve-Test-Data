// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((input_string('S2') != input_string('S3')) == (str(input_int('I1')) < input_string('S3'))) then str(int(str(not(input_bool('B3'))))) else input_string('S1'))

var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");

function fn24(x6, s2, s22, s1, b16) {
    var s8 = s2;
    var e3 = "s2";
    var s7 = '' + (x6);
    var e10 = "eval(\"s8\")";
    var e11 = "eval(e10)";
    var b12;
    if (s7 < eval(e11)) {
        b12 = true;
    } else {
        b12 = false;
    }
    var b14 = false;
    if ((s1 != eval(e3)) == b12) {
        b14 = true;
    }
    var x23;
    if (b14) {
        var s19 = (eval("var b17 = !(b16);b17")).toString();
        var s21 = (Number(s19)).toString();
        x23 = s21;
    } else {
        x23 = s22;
    }
    return x23;
}
fn24(input_I1, input_S3, input_S1, input_S2, input_B3);
