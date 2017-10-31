// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (bool(str(input_int('I2'))) !== not((int(((if regex-test(str(int(str(int(input_bool('B2'))))), /^Y(\w?|\t)[a-z]xC$/) then input_int('I2') else input_int('I1')) != len(str(int(input_string('S2')))))) !== int((if (if input_bool('B1') then input_bool('B3') else input_bool('B2')) then true else input_bool('B1')))))) then input_string('S1') else str(not(not((str(int(str(len(str(len(str(input_bool('B3')))))))) in ['', 'n', 'oQRe', ''])))))

var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn31 = Function('b25', 'b27', 'b26', "var b29 = b25; var x28; if (b25) { x28 = b26; } else {  x28 = b27; }var x30; if (x28) {  x30 = true; } else {  x30 = b29; } return x30;");
var fn64 = function (b33, b32, x13, s16, x1, s42, b34) {
    var b44 = b34;
    var x12 = x1;
    var b4 = ('' + (eval("x1"))) ? true : false;
    var b5 = b33;
    var x6 = Number(b5);
    var s7 = '' + (x6);
    var re10 = /^Y(\w?|\t)[a-z]xC$/;
    var e11 = "re10.test(String(Number(s7)))";
    var e14 = "x13";
    var x15;
    if (eval(e11)) {
        x15 = x12;
    } else {
        x15 = eval(e14);
    }
    var e21 = "var x18 = parseInt(eval(\"s16\"), 10);var s19 = String(x18);(s19).length";
    var b22 = x15;
    var b23 = eval(e21);
    var x24 = ~~ (b22 != b23);
    var e36 = "(fn31(b32, b33, b34)) | 0";
    var b37 = false;
    if (x24 !== eval(e36)) {
        b37 = true;
    }
    var b39 = !(b37);
    var b40;
    if (b4 !== b39) {
        b40 = true;
    } else {
        b40 = false;
    }
    var e53 = "var e49 = \"var e45 = \\\"b44\\\";var e46 = \\\"eval(e45)\\\";var s47 = '' + (eval(e46));(s47).length\";var s50 = String(eval(e49));var l51 = (s50).length;(l51).toString()";
    var x54 = Number(eval(e53));
    var s55 = '' + (x54);
    var opts57 = ['', 'n', 'oQRe', ''];
    var b56 = false;
    for (var idx58 = 0; idx58 < opts57.length; idx58++) {
        if (opts57[idx58] == s55) {
            b56 = true;
        }
    }
    var b59 = !(b56);
    var b61;
    if (eval("b59")) {
        b61 = false;
    } else {
        b61 = true;
    }
    return (b40 ? eval("s42") : (b61).toString());
}
fn64(input_B2, input_B1, input_I1, input_S2, input_I2, input_S1, input_B3);
