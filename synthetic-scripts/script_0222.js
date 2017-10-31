// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B1') then (if (input_bool('B2') != regex-test(input_string('S1'), /^(Se|[-_ ]+)Ax$/)) then true else input_bool('B3')) else input_bool('B2')) then 132 else int(input_string('S1')))

var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);

var fn21 = function (b1, s17, b14, b8) {
    var s3 = s17;
    var x20;
    if (eval("var b2 = b14; var e5 = \"var re4 = new RegExp(\\\"^(Se|[-_ ]+)Ax$\\\");re4.test(s3)\";var b6 = b2 != eval(e5);var x13; if (b6) { x13 = true; } else { var e12 = \"eval(\\\"eval(\\\\\\\"eval(\\\\\\\\\\\\\\\"b8\\\\\\\\\\\\\\\")\\\\\\\")\\\")\"; x13 = eval(e12); }(b1 ? x13 : b14)")) {
        x20 = 132;
    } else {
        var e18 = "s17";
        var x19 = Number(eval(e18));
        x20 = x19;
    }
    return x20;
}
fn21(input_B1, input_S1, input_B2, input_B3);
