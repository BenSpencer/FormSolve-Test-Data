// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I1')) then ((input_int('I1') > int((if (input_string('S2') == input_string('S3')) then "1" else input_string('S3')))) !== not(not(input_bool('B1')))) else not(bool(int(input_string('S2')))))

var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");

(function (s19, x1, s5, b14) {
    var s4 = s19;
    var x3 = x1;
    var b2 = (x1) ? true : false;
    var x23;
    if (b2) {
        var b15;
        if (b14) {
            b15 = false;
        } else {
            b15 = true;
        }
        var b16;
        if (b15) {
            b16 = false;
        } else {
            b16 = true;
        }
        var b17 = false;
        if (eval("var s8 = s5; var b6 = s4 == s5;var x9; if (b6) { x9 = \"1\"; } else {  x9 = s8; }var b11 = false; if (x3 > Number(x9)) { b11 = true; }b11") !== b16) {
            b17 = true;
        }
        x23 = b17;
    } else {
        var b22 = !( !! (parseInt(s19, 10)));
        x23 = b22;
    }
    return x23;
})(input_S2, input_I1, input_S3, input_B1);
