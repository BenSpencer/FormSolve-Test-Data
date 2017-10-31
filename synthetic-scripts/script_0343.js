// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(not(not((0 == (if (len(str((if input_bool('B1') then 46 else int(input_bool('B3'))))) >= input_int('I3')) then len(input_string('S2')) else len(input_string('S2')))))))) then regex-test(str((if ((int(input_bool('B2')) <= input_int('I2')) && true) then bool(input_int('I3')) else not(input_bool('B2')))), /^(B|.*z[A-Z]bs)$/) else regex-test(str(((if bool(input_int('I2')) then str(bool(str(input_bool('B1')))) else input_string('S3')) >= input_string('S3'))), /^\d+([0-9]|Jw)$/))

var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);

function fn56(s46, b2, b23, b1, s12, x25, x30) {
    var b42 = b1;
    var x39 = x25;
    var x9 = x30;
    var s14 = s12;
    var l13 = (s12).length;
    var l15 = (s14).length;
    var x16;
    if (((eval("'' + ((b1 ? 46 : ~~(eval(\"b2\"))))")).length >= x9)) {
        x16 = l13;
    } else {
        x16 = l15;
    }
    var b17 = 0 == x16;
    var b20;
    if (!(b17)) {
        b20 = false;
    } else {
        b20 = true;
    }
    var s21 = '' + (b20);
    var b22 = !! (s21);
    var b32 = b23;
    var x24 = (b23) ? 1 : 0;
    var b26;
    if (x24 <= x25) {
        b26 = true;
    } else {
        b26 = false;
    }
    var b28 = false;
    if (b26 && true) {
        b28 = true;
    }
    var x36;
    if (b28) {
        x36 = !! (x30);
    } else {
        var e35 = "!(eval(\"b32\"))";
        x36 = eval(e35);
    }
    var s49 = s46;
    var b41 = !! (eval("x39"));
    var s43 = (b42).toString();
    var b44 = (s43) ? true : false;
    var s45 = (b44).toString();
    var x48;
    if (b41) {
        x48 = s45;
    } else {
        x48 = eval("s46");
    }
    var b51 = x48 >= eval("s49");
    var s53 = '' + (b51);
    var x55;
    if (b22) {
        x55 = ((x36).toString()).match(/^(B|.*z[A-Z]bs)$/) !== null;
    } else {
        x55 = (s53).match(/^\d+([0-9]|Jw)$/) !== null;
    }
    return x55;
}
fn56(input_S3, input_B3, input_B2, input_B1, input_S2, input_I2, input_I3);
