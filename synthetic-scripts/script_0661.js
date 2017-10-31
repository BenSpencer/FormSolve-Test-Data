// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int((if (not((if bool(len(input_string('S3'))) then bool(input_string('S2')) else not(bool(input_string('S2'))))) && input_bool('B1')) then bool(int(input_string('S2'))) else (str(input_int('I3')) !== str(input_bool('B3')))))) then input_string('S3') else str(input_int('I3')))

var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);

(function (s14, b21, s1, b11, x17) {
    var s29 = s1;
    var x30 = x17;
    var s31 = (x30).toString();
    var e32 = "s31";
    return ( !! (eval("var s4 = s14; var s6 = s4; var b3 = !!((s1).length);var b5 = Boolean(s4);var b7 = (s6) ? true : false;var b8 = !(b7);var x9; if (b3) { x9 = b5; } else { x9 = b8; }var b12 = false; if (!(x9) && b11) { b12 = true; }var x15 = Number(s14);var b16 = Boolean(x15);var e18 = \"x17\";var s19 = '' + (eval(e18));var s22 = (b21).toString();var x26 = ~~((b12 ? b16 : (eval(\"s19\") !== s22)));x26")) ? s29 : eval(e32));
})(input_S2, input_B3, input_S3, input_B1, input_I3);
