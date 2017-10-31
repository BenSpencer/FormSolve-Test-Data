// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(((bool(input_string('S3')) == not(bool(input_int('I3')))) != input_bool('B1')))) then int(input_bool('B3')) else input_int('I3'))

var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn24 = function (b12, x22, b20, s1) {
    var x6 = x22;
    var e7 = "x6";
    var b8 = !! (eval(e7));
    var b9 = !(b8);
    var b10 = false;
    if (eval("eval(\"eval(\\\"Boolean(s1)\\\")\")") == b9) {
        b10 = true;
    }
    var e16 = "(b10 != eval(\"b12\"))";
    var b18 = !(!(eval(e16)));
    var e19 = "b18";
    var x23;
    if (eval(e19)) {
        var x21 = Number(b20);
        x23 = x21;
    } else {
        x23 = x22;
    }
    return x23;
}
fn24(input_B1, input_I3, input_B3, input_S3);
