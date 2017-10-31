// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((not(bool(str(bool(len(str(int(bool((input_int('I2') / len(input_string('S3'))))))))))) || (input_int('I2') == int(bool(input_int('I2'))))) == bool(input_int('I3'))) then str((if true then input_bool('B3') else (input_int('I3') >= input_int('I3')))) else str(input_bool('B2')))

var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);

function fn42(b39, x1, b29, x25, s2) {
    var x30 = x25;
    var x17 = x1;
    var e11 = "var e7 = \"var l3 = (s2).length;((x1 / l3)) ? true : false\";var s9 = (Number(eval(e7))).toString();var l10 = (s9).length;l10";
    var b12 = Boolean(eval(e11));
    var s13 = '' + (b12);
    var b15 = !( !! (s13));
    var b23;
    if (eval("b15")) {
        b23 = true;
    } else {
        var x18 = x17;
        var b21 = false;
        if (x17 == ((x18) ? true : false) | 0) {
            b21 = true;
        }
        b23 = b21;
    }
    var b26 = (x25) ? true : false;
    var b27 = false;
    if (b23 == b26) {
        b27 = true;
    }
    var x41;
    if (b27) {
        var e37 = "var e34 = \"var x31 = x30; var b32; if (x30 >= x31) { b32 = true; } else { b32 = false; }b32\";var e36 = \"(true ? b29 : eval(e34))\";eval(e36)";
        x41 = String(eval(e37));
    } else {
        x41 = String(b39);
    }
    return x41;
}
fn42(input_B2, input_I2, input_B3, input_I3, input_S3);
