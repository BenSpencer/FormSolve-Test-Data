// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I2') in [7, 1, 29, 191, 1, 84, 1, 45, 1, 1]) then (bool(int(bool(input_int('I2')))) && input_bool('B3')) else bool(len(str(((str(int((bool(str(input_bool('B3'))) === input_bool('B3')))) >= str(int(str(int(not(input_bool('B3'))))))) || (if false then input_bool('B1') else not((1 != (if bool(input_int('I2')) then int(input_string('S1')) else len(input_string('S3')))))))))))

var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

(function (x1, b10, s36, b31, s34) {
    var x32 = x1;
    var x6 = x1;
    var b13 = b10;
    var e2 = "x1";
    var opts4 = [7, 1, 29, 191, 1, 84, 1, 45, 1, 1];
    var b3 = false;
    for (var idx5 = 0; idx5 < opts4.length; idx5++) {
        if (opts4[idx5] == eval(e2)) {
            b3 = true;
        }
    }
    var x8 = ( !! (x6)) | 0;
    var b11 = false;
    if ((x8) ? true : false && b10) {
        b11 = true;
    }
    var b23 = b13;
    var b24 = !(b23);
    var x27 = Number('' + ((b24) | 0));
    var b29;
    if (eval("var b17 = b13; var b16 = Boolean('' + (eval(\"b13\")));var s21 = '' + (((b16 === b17)) ? 1 : 0);s21") >= String(x27)) {
        b29 = true;
    } else {
        b29 = false;
    }
    var e44 = "var l37 = (s36).length;var b40 = 1 != eval(\"((x32) ? true : false ? Number(s34) : l37)\");var b42 = !(b40);var x43; if (false) { x43 = b31; } else { x43 = b42; }x43";
    var b45 = false;
    if (b29 || eval(e44)) {
        b45 = true;
    }
    var l48 = ('' + (b45)).length;
    var b49 = Boolean(l48);
    var x50;
    if (b3) {
        x50 = b11;
    } else {
        x50 = b49;
    }
    return x50;
})(input_I2, input_B3, input_S3, input_B1, input_S1);
