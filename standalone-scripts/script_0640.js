// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((((len(str((input_bool('B2') === bool(int(input_bool('B1')))))) >= input_int('I3')) || not(not(not(input_bool('B1'))))) === false) == (bool(int(input_string('S2'))) !== not((input_bool('B1') != (10 > int((input_bool('B2') || input_bool('B2')))))))) then 0 else int(str(input_int('I2'))))

var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn45 = function (b1, x41, s22, x9, b12) {
    var b25 = b12;
    var b26 = b1;
    var b27 = b26;
    var b28 = b26 || b27;
    var b31;
    if (10 > Number(b28)) {
        b31 = true;
    } else {
        b31 = false;
    }
    var b33 = b25 != b31;
    var b35;
    if (b33) {
        b35 = false;
    } else {
        b35 = true;
    }
    var b37 = false;
    if ( !! (parseInt(s22, 10)) !== eval("b35")) {
        b37 = true;
    }
    var b39 = false;
    if (eval("var b2 = b12; var b5; if (b1 === Boolean(~~(b2))) { b5 = true; } else { b5 = false; }var b10; if ((String(b5)).length >= x9) { b10 = true; } else { b10 = false; }var e13 = \"b12\";var b14; if (eval(e13)) { b14 = false; } else { b14 = true; }var b15 = !(b14);var b16; if (b15) { b16 = false; } else { b16 = true; }var b17 = b10 || b16;var b19 = b17; var b20 = false;b19 === b20") == b37) {
        b39 = true;
    }
    var x43 = Number((x41).toString());
    var x44;
    if (b39) {
        x44 = 0;
    } else {
        x44 = x43;
    }
    return x44;
}
fn45(input_B2, input_I2, input_S2, input_I3, input_B1);
