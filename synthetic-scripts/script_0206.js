// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str((if not((if bool(input_int('I3')) then input_bool('B3') else not(bool(len(str((if input_bool('B1') then bool(int(str(input_bool('B2')))) else not(bool(str(input_bool('B3'))))))))))) then int((input_int('I1') == input_int('I3'))) else input_int('I1')))) then str(bool(input_string('S3'))) else input_string('S3'))

var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);

function fn42(b4, s35, x23, x1, b5, b10) {
    var s40 = s35;
    var x31 = x23;
    var x24 = x1;
    var b3 = b10;
    var x15;
    if (b4) {
        var s7 = '' + (eval("b5"));
        var x8 = parseInt(s7, 10);
        var b9 = !! (x8);
        x15 = b9;
    } else {
        var e14 = "var s11 = '' + (b10);var b13 = !((s11) ? true : false);b13";
        x15 = eval(e14);
    }
    var b22 = !(( !! (x1) ? b3 : eval("!(((String(x15)).length) ? true : false)")));
    var e29 = "var b26 = x23 == eval(\"x24\");eval(\"b26\")";
    var x30 = Number(eval(e29));
    var x41;
    if ( !! ('' + ((b22 ? x30 : x31)))) {
        x41 = eval("var b37 = Boolean(eval(\"s35\"));var s38 = String(b37);s38");
    } else {
        x41 = s40;
    }
    return x41;
}
fn42(input_B1, input_S3, input_I1, input_I3, input_B2, input_B3);
