// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B2') && input_bool('B2')) then not(bool((if bool(input_string('S2')) then "by" else input_string('S3')))) else bool((if input_bool('B2') then input_string('S3') else input_string('S2'))))

var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");

var fn19 = function (s15, b1, s13) {
    var s5 = s15;
    var s7 = s13;
    var b11 = b1;
    var b2 = b1;
    var b3;
    if (b1) {
        b3 = b2;
    } else {
        b3 = false;
    }
    var x8;
    if ( !! (s5)) {
        x8 = "by";
    } else {
        x8 = s7;
    }
    var b9 = Boolean(x8);
    var b10 = !(b9);
    var x16;
    if (eval("b11")) {
        x16 = eval("s13");
    } else {
        x16 = s15;
    }
    var b17 = (x16) ? true : false;
    return (b3 ? b10 : b17);
}
fn19(input_S2, input_B2, input_S3);
