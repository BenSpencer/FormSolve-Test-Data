// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then ((str(input_bool('B1')) === str(bool(input_string('S2')))) === (if not((input_bool('B3') === input_bool('B1'))) then (input_bool('B1') !== (input_bool('B3') && input_bool('B1'))) else input_bool('B1'))) else not((not(input_bool('B3')) == bool(input_string('S3')))))

var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);

function fn34(b1, b11, s28, b10, s5) {
    var b26 = b10;
    var b2 = b11;
    var s3 = String(b2);
    var e4 = "s3";
    var b6 = (s5) ? true : false;
    var s7 = String(b6);
    var b8 = false;
    if (eval(e4) === s7) {
        b8 = true;
    }
    var b16 = b10;
    var b15 = b11;
    var b22 = b11;
    var b12 = b10;
    var b13 = b11;
    var b14 = !(b12 === b13);
    var b17 = b15;
    var b18;
    if (b17) {
        b18 = b16;
    } else {
        b18 = false;
    }
    var b20;
    if (b15 !== b18) {
        b20 = true;
    } else {
        b20 = false;
    }
    var x23;
    if (b14) {
        x23 = b20;
    } else {
        x23 = b22;
    }
    var b24;
    if (b8 === x23) {
        b24 = true;
    } else {
        b24 = false;
    }
    var b27;
    if (b26) {
        b27 = false;
    } else {
        b27 = true;
    }
    var b29 = !! (s28);
    var b30 = b27;
    var b31 = b29;
    var b32 = !(b30 == b31);
    var x33;
    if (b1) {
        x33 = b24;
    } else {
        x33 = b32;
    }
    return x33;
}
fn34(input_B2, input_B1, input_S3, input_B3, input_S2);
