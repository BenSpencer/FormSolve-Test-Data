// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(input_bool('B2')) > input_int('I3')) then str(int((str((input_string('S3') > input_string('S1'))) >= input_string('S1')))) else input_string('S3'))

var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");

(function (b1, s18, s12, x4) {
    var s7 = s18;
    var e2 = "b1";
    var b5;
    if (~~(eval(e2)) > x4) {
        b5 = true;
    } else {
        b5 = false;
    }
    var s8 = s12;
    var s16 = (((String((s7 > s8)) >= s12)) ? 1 : 0).toString();
    var e17 = "s16";
    return (b5 ? eval(e17) : eval("s18"));
})(input_B2, input_S3, input_S1, input_I3);
