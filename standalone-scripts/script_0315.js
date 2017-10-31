// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str((not(input_bool('B1')) != not(regex-test(input_string('S2'), /^OU\S(\S[a-z]*\W|L)P$/))))) then ("RF" == input_string('S3')) else bool(input_string('S2')))

var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");

var fn19 = function (s16, s13, b1) {
    var s3 = s16;
    var b2 = !(b1);
    var e4 = "s3";
    var re5 = /^OU\S(\S[a-z]*\W|L)P$/;
    var e6 = "re5.test(eval(e4))";
    var b7 = !(eval(e6));
    var b8 = b2;
    var b9 = b7;
    var e10 = "b8 != b9";
    var s11 = (eval(e10)).toString();
    var b14 = false;
    if ("RF" == s13) {
        b14 = true;
    }
    var b17 = (s16) ? true : false;
    return (Boolean(s11) ? b14 : b17);
}
fn19(input_S2, input_S3, input_B1);
