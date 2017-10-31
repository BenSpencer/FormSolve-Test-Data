// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if regex-test(input_string('S1'), /^Hk(h|yo)\SY[A-Z]+$/) then not(((if input_bool('B1') then str(bool(str(not(bool(int(input_bool('B3'))))))) else str((if input_bool('B3') then input_int('I3') else int(str(input_bool('B2')))))) in ['BA6', '7Y', 'QZs', 'gNuAB', 'TcPJ', '', 'KC'])) else input_bool('B3')) then input_int('I2') else (if (str(input_bool('B2')) < "ci5g") then int((input_string('S3') + input_string('S2'))) else int((str(input_bool('B3')) >= str(not(input_bool('B3')))))))

var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn30 = function (b17, x16, b4, b15, s1) {
    var b28 = b15;
    var e2 = "s1";
    var e23 = "var b5 = b15; var s18 = (b17).toString();var x20; if (b15) {  x20 = x16; } else { x20 = parseInt(s18, 10); }var s21 = '' + (x20);var x22; if (b4) { var e14 = \"var e7 = \\\"+(b5)\\\";var b8 = (eval(e7)) ? true : false;var b9 = !(b8);var s10 = String(b9);var s12 = (!!(s10)).toString();var e13 = \\\"s12\\\";eval(e13)\"; x22 = eval(e14); } else { x22 = s21; }x22";
    var opts25 = ['BA6', '7Y', 'QZs', 'gNuAB', 'TcPJ', '', 'KC'];
    var b24 = false;
    for (var idx26 = 0; idx26 < opts25.length; idx26++) {
        if (opts25[idx26] == eval(e23)) {
            b24 = true;
        }
    }
    var b27;
    if (b24) {
        b27 = false;
    } else {
        b27 = true;
    }
    var x29;
    if ((eval(e2)).match(/^Hk(h|yo)\SY[A-Z]+$/) !== null) {
        x29 = b27;
    } else {
        x29 = b28;
    }
    return x29;
}
var fn61 = Function('x32', 'b33', 's44', 's45', 'b34', 'b31', 's35', 'x38', "var b50 = b34; var b39 = b31; var x60; if (eval(\"eval(\\\"fn30(b31, x32, b33, b34, s35)\\\")\")) { x60 = x38; } else { var s40 = String(b39);var x46 = s44 + s45;var x59; if (eval(\"(s40 < \\\"ci5g\\\")\")) { x59 = parseInt(eval(\"x46\"), 10); } else { var b53 = b50; var b54; if (b53) { b54 = false; } else { b54 = true; }var s55 = '' + (b54);var b56 = eval(\"(b50).toString()\") >= s55;var x58 = ~~(b56); x59 = x58; } x60 = x59; } return x60;");
fn61(input_I3, input_B1, input_S3, input_S2, input_B3, input_B2, input_S1, input_I2);
