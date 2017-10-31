// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then (replace(str((if (bool(input_int('I3')) || bool(int(bool(str(input_bool('B1')))))) then (bool(str((if true then input_int('I2') else len((if bool(input_string('S2')) then str(input_bool('B1')) else str(input_int('I3'))))))) !== not(bool(int(input_string('S3'))))) else input_bool('B3'))), "R1", "S") in ['Djci', 'EH', 'dO', 'OL', '', 'bvw', 'o', 'E']) else bool(input_string('S1')))

var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");

(function (s43, x13, s14, s29, b1, x2, b17, b36) {
    var b5 = b17;
    var x20 = x2;
    var e12 = "var b3 = (x2) ? true : false;var e4 = \"b3\";var b10; if (eval(e4)) { b10 = true; } else { var s6 = String(b5);var x8 = ~~(Boolean(s6));var b9 = (x8) ? true : false; b10 = b9; }b10";
    var x25;
    if (true) {
        x25 = x13;
    } else {
        x25 = eval("var e18 = \"b17\";var s19 = '' + (eval(e18));var x22; if (eval(\"(s14) ? true : false\")) { x22 = s19; } else {  x22 = String(x20); }var l23 = (x22).length;l23");
    }
    var s26 = String(x25);
    var e27 = "s26";
    var b28 = !! (eval(e27));
    var b31 = (Number(s29)) ? true : false;
    var b32 = !(b31);
    var b33 = b28;
    var b34 = b32;
    var x37;
    if (eval(e12)) {
        x37 = eval("b33 !== b34");
    } else {
        x37 = b36;
    }
    var s38 = '' + (x37);
    var opts41 = ['Djci', 'EH', 'dO', 'OL', '', 'bvw', 'o', 'E'];
    var b40 = false;
    for (var idx42 = 0; idx42 < opts41.length; idx42++) {
        if (opts41[idx42] == (s38).replace("R1", "S")) {
            b40 = true;
        }
    }
    var b45 = !! (eval("s43"));
    var x46;
    if (b1) {
        x46 = b40;
    } else {
        x46 = b45;
    }
    return x46;
})(input_S1, input_I2, input_S2, input_S3, input_B2, input_I3, input_B1, input_B3);
