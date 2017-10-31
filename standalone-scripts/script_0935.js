// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(input_bool('B1'))) then input_string('S2') else str(regex-test(input_string('S2'), /^m(Q\D+bJ|Mo)hh[0-9]$/)))

var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn10 = function (b1, s4) {
    var s5 = s4;
    var b3 = !! ('' + (b1));
    var re6 = new RegExp("^m(Q\\D+bJ|Mo)hh[0-9]$");
    var e7 = "re6.test(s5)";
    var x9;
    if (b3) {
        x9 = s4;
    } else {
        x9 = String(eval(e7));
    }
    return x9;
}
fn10(input_B1, input_S2);
