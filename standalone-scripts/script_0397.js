// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(int((if (input_bool('B1') != input_bool('B2')) then str(int((not(bool(len(input_string('S3')))) == not((not(input_bool('B3')) != input_bool('B2')))))) else input_string('S1'))))) then bool(input_string('S3')) else bool(input_string('S2')))

var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

(function (s28, b1, s31, b14, s22, b11) {
    var s6 = s28;
    var b2 = b14;
    var b3 = b1;
    var b4 = b2;
    var e5 = "b3 != b4";
    var x23;
    if (eval(e5)) {
        var e8 = "(s6).length";
        var e13 = "!(b11)";
        var b15 = eval(e13);
        var b16 = b14;
        var b18;
        if (!((eval(e8)) ? true : false) == !(b15 != b16)) {
            b18 = true;
        } else {
            b18 = false;
        }
        var x20 = Number(b18);
        x23 = String(x20);
    } else {
        x23 = s22;
    }
    var s25 = (Number(x23)).toString();
    var e26 = "s25";
    var b27 = (eval(e26)) ? true : false;
    var b30 = Boolean(eval("s28"));
    var b32 = !! (s31);
    return (b27 ? b30 : b32);
})(input_S3, input_B1, input_S2, input_B2, input_S1, input_B3);
