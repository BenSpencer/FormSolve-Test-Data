// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(input_int('I2')) > str((if (if not(((input_int('I2') === int(input_bool('B2'))) === (bool(input_int('I1')) === not((if input_bool('B2') then (if input_bool('B1') then input_bool('B1') else bool(str(not(bool(str(bool(str(not(bool(input_string('S1'))))))))))) else (input_string('S3') in ['r1an', 'z4j', '', 'E', 'Vty3k'])))))) then bool(int(bool(int(input_string('S1'))))) else (input_bool('B2') || (input_string('S3') in ['XdH', '', 'ny', '']))) then input_bool('B1') else (len(input_string('S2')) == input_int('I3'))))) then input_bool('B1') else input_bool('B1'))

var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");

function fn68(b10, s25, b11, s13, x56, x8, x1, s54) {
    var b64 = b11;
    var b66 = b11;
    var x3 = x1;
    var b53 = b11;
    var s46 = s25;
    var b45 = b10;
    var s39 = s13;
    var b4 = b10;
    var b6 = false;
    if (x3 === (b4) | 0) {
        b6 = true;
    }
    var e31 = "var x29; if (b10) { var b12 = b11; var e14 = \"s13\";var b15 = Boolean(eval(e14));var s17 = '' + (!(b15));var b18 = Boolean(s17);var b21; if ((String(b18)) ? true : false) { b21 = false; } else { b21 = true; }var b23 = Boolean(String(b21)); x29 = (b11 ? b12 : b23); } else { var opts27 = ['r1an', 'z4j', '', 'E', 'Vty3k'];var b26 = false; for (var idx28 = 0; idx28 < opts27.length; idx28++) { if (opts27[idx28] == s25) { b26 = true; } } x29 = b26; }var b30; if (x29) { b30 = false; } else { b30 = true; }b30";
    var b32 = false;
    if (Boolean(x8) === eval(e31)) {
        b32 = true;
    }
    var b34;
    if (b6 === b32) {
        b34 = true;
    } else {
        b34 = false;
    }
    var e36 = "b34";
    var b37 = !(eval(e36));
    var e38 = "b37";
    var opts48 = ['XdH', '', 'ny', ''];
    var b47 = opts48.indexOf(s46) > -1;
    var x52;
    if (eval(e38)) {
        var e41 = "var x40 = parseInt(s39, 10);x40";
        var b42 = (eval(e41)) ? true : false;
        var x43 = ~~ (b42);
        x52 = (x43) ? true : false;
    } else {
        x52 = (b45 || b47);
    }
    var x59;
    if (x52) {
        x59 = b53;
    } else {
        var l55 = (s54).length;
        var b57 = l55;
        var b58 = x56;
        x59 = b57 == b58;
    }
    var b62 = false;
    if ((x1).toString() > eval("String(x59)")) {
        b62 = true;
    }
    var x67;
    if (b62) {
        x67 = eval("b64");
    } else {
        x67 = b66;
    }
    return x67;
}
fn68(input_B2, input_S3, input_B1, input_S1, input_I3, input_I1, input_I2, input_S2);
