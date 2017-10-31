// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then input_string('S3') else str(bool(int((not(bool((if (if bool(input_int('I2')) then bool(input_int('I3')) else not(bool(len(input_string('S3'))))) then len(str(int((input_int('I3') === input_int('I1'))))) else input_int('I2')))) || bool(len(input_string('S3'))))))))

var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);

(function (s2, b1, x12, x21, x13) {
    var s26 = s2;
    var x35;
    if (b1) {
        x35 = s2;
    } else {
        x35 = String(eval("var s7 = s26; var x3 = x21; var x5 = x12; var b4 = Boolean(x3);var x11; if (b4) { x11 = !!(x5); } else { var b9 = ((s7).length) ? true : false;var b10 = !(b9); x11 = b10; }var x22; if (x11) { var e17 = \"var b15 = false; if (x12 === eval(\\\"x13\\\")) { b15 = true; }b15\";var s19 = (~~(eval(e17))).toString(); x22 = (s19).length; } else { x22 = x21; }var e23 = \"x22\";var b25 = !(!!(eval(e23)));var b29; if (b25) { b29 = true; } else { b29 = !!((s26).length); }(+(b29)) ? true : false"));
    }
    return x35;
})(input_S3, input_B2, input_I3, input_I2, input_I1);
