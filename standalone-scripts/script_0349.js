// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then not((input_int('I2') <= int((int(not(bool(int((str(bool(int(input_string('S2')))) !== str(input_int('I3'))))))) > (if not(input_bool('B1')) then int(input_bool('B1')) else len(str(not(bool(regex-replace(input_string('S1'), /(Gs|zYKEFGG)?[A-Z]/, "X")))))))))) else bool(input_int('I3')))

var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);

function fn39(s21, s3, b1, x2, x36) {
    var b16 = b1;
    var x8 = x36;
    var e4 = "s3";
    var x5 = parseInt(eval(e4), 10);
    var s7 = '' + ((x5) ? true : false);
    var s9 = (x8).toString();
    var b10 = false;
    if (s7 !== s9) {
        b10 = true;
    }
    var x12 = (b10) | 0;
    var b13 = (x12) ? true : false;
    var b14 = !(b13);
    var b18 = b16;
    var b17;
    if (b16) {
        b17 = false;
    } else {
        b17 = true;
    }
    var x28;
    if (b17) {
        var x20 = Number(eval("b18"));
        x28 = x20;
    } else {
        var s22 = (s21).replace(/(Gs|zYKEFGG)?[A-Z]/, "X");
        var b24 = Boolean(s22);
        x28 = ('' + (!(b24))).length;
    }
    var b29 = (b14) ? 1 : 0;
    var b30 = x28;
    var x31 = (b29 > b30) | 0;
    var b33 = false;
    if (x2 <= eval("x31")) {
        b33 = true;
    }
    var b35 = !(b33);
    var x38;
    if (b1) {
        x38 = b35;
    } else {
        x38 = !! (x36);
    }
    return x38;
}
fn39(input_S1, input_S2, input_B1, input_I2, input_I3);
