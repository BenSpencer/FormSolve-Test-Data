// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int((if (input_bool('B3') != (if regex-test(str(bool(str(int(input_bool('B2'))))), /^W\D+[-_ ](WA|ZT_hgH\nEjrY)$/) then input_bool('B3') else input_bool('B1'))) then bool(str(bool(int(bool(int(str(input_bool('B2')))))))) else input_bool('B3')))) then not((if input_bool('B1') then not(not(input_bool('B2'))) else (input_bool('B3') !== bool(input_string('S3'))))) else bool(len(str(input_int('I1')))))

var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn40 = function (s34, b28, b32, b29) {
    var x39;
    if (b28) {
        var b30 = !(b29);
        x39 = !(b30);
    } else {
        var b37 = eval("b32");
        var b38 = eval("var b35 = (s34) ? true : false;b35");
        x39 = b37 !== b38;
    }
    return x39;
}(function (s41, b15, b1, x46, b11) {
    var b43 = b1;
    var b44 = b15;
    var b42 = b11;
    var b24 = b1;
    var b2 = b15;
    var b10 = b1;
    var x12;
    if (eval("var x3 = +(b2);var s4 = (x3).toString();var s7 = ((eval(\"s4\")) ? true : false).toString();var re8 = new RegExp(\"^W\\\\D+[-_ ](WA|ZT_hgH\\\\nEjrY)$\");re8.test(s7)")) {
        x12 = b10;
    } else {
        x12 = b11;
    }
    var b13 = b1;
    var b14 = x12;
    var x25;
    if (b13 != b14) {
        var x20 = ~~ (eval("var s16 = '' + (b15);var x17 = parseInt(s16, 10);!!(x17)"));
        x25 = !! (String(Boolean(x20)));
    } else {
        x25 = b24;
    }
    var x26 = Number(x25);
    var s47 = (x46).toString();
    var x50;
    if (Boolean(x26)) {
        var b45;
        if (fn40(s41, b42, b43, b44)) {
            b45 = false;
        } else {
            b45 = true;
        }
        x50 = b45;
    } else {
        x50 = !! ((s47).length);
    }
    return x50;
})(input_S3, input_B2, input_B3, input_I1, input_B1);
