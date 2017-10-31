// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (len(input_string('S3')) != int(str(int((str(not(input_bool('B1'))) + str(input_int('I1'))))))) then (input_string('S2') === str((str(bool(str(bool(int(str(not(bool(input_int('I2'))))))))) !== str(input_bool('B2'))))) else bool(input_string('S2')))

var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);

function fn39(b29, x6, x19, b3, s18, s1) {
    var s36 = s18;
    var e15 = "var b4; if (b3) { b4 = false; } else { b4 = true; }var s5 = (b4).toString();var s7 = '' + (x6);var x10 = parseInt((s5 + s7), 10);var s11 = (x10).toString();var e12 = \"s11\";var e14 = \"Number(eval(e12))\";eval(e14)";
    var b21;
    if ( !! (x19)) {
        b21 = false;
    } else {
        b21 = true;
    }
    var x24 = Number('' + (eval("b21")));
    var b27 = !! ('' + (Boolean(x24)));
    var s28 = (b27).toString();
    var b31 = false;
    if (s28 !== '' + (b29)) {
        b31 = true;
    }
    var s33 = '' + (b31);
    var b34 = false;
    if (s18 === s33) {
        b34 = true;
    }
    var x38;
    if (((s1).length != eval(e15))) {
        x38 = b34;
    } else {
        x38 = (s36) ? true : false;
    }
    return x38;
}
fn39(input_B2, input_I1, input_I2, input_B1, input_S2, input_S3);
