// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not(not(bool(len(str((int(input_bool('B3')) > input_int('I2'))))))) == bool(str(not(bool(input_string('S2')))))) then input_string('S3') else input_string('S3'))

var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn27 = function (s22, b1, x3, s14) {
    var s24 = s22;
    var b13 = !(!(eval("var e8 = \"var b4 = (b1) ? 1 : 0; var b5 = x3;var s6 = String(b4 > b5);(s6).length\";var b9 = !!(eval(e8));eval(\"b9\")")));
    var b15 = !! (s14);
    var b16;
    if (b15) {
        b16 = false;
    } else {
        b16 = true;
    }
    var e17 = "b16";
    var s18 = '' + (eval(e17));
    var b20 = b13 == Boolean(s18);
    var e23 = "s22";
    var e25 = "s24";
    return (b20 ? eval(e23) : eval(e25));
}
fn27(input_S3, input_B3, input_I2, input_S2);
