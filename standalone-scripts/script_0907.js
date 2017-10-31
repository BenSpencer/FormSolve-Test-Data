// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(((str(int(not(input_bool('B3')))) < input_string('S1')) == not((if input_bool('B2') then (if (str(input_bool('B2')) in ['ECWc', 'DCY', '7', 'ctXxV', 'K9oVG', 'G3V', 'nmo']) then (str((input_int('I2') in [7, 58, 1])) < input_string('S1')) else not((false != (str(int(input_string('S2'))) in ['MbAj', 'o5IBO', 'k', 'I', 'iJ', 'mgvNd'])))) else (input_int('I2') != int(str(len(str((not(bool(input_string('S1'))) != bool(input_int('I1'))))))))))))) then input_bool('B2') else input_bool('B2'))

var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);

(function (s5, x56, b1, x55, s54, b57) {
    var b64 = b57;
    var b65 = b57;
    var s53 = s5;
    var b2;
    if (b1) {
        b2 = false;
    } else {
        b2 = true;
    }
    var x3 = Number(b2);
    var b6 = String(x3) < s5;
    var fn52 = function (s21, s24, x40, x15, b8) {
        var x36 = x15;
        var b9 = b8;
        var s37 = s21;
        var x51;
        if (b8) {
            var e35 = "var opts12 = ['ECWc', 'DCY', '7', 'ctXxV', 'K9oVG', 'G3V', 'nmo'];var b11 = opts12.indexOf(String(b9)) > -1;var x26 = parseInt(eval(\"s24\"), 10);var s27 = '' + (x26);var opts29 = ['MbAj', 'o5IBO', 'k', 'I', 'iJ', 'mgvNd'];var b28 = false; for (var idx30 = 0; idx30 < opts29.length; idx30++) { if (opts29[idx30] == s27) { b28 = true; } }var b31; if (false) { if (b28) { b31 = false; } else { b31 = true; } } else { if (b28) { b31 = true; } else { b31 = false; } }var b33 = !(b31);var x34; if (eval(\"b11\")) { var s20 = (eval(\"var opts17 = [7, 58, 1];opts17.indexOf(x15) > -1\")).toString();var b22 = s20 < s21; x34 = b22; } else { x34 = b33; }x34";
            x51 = eval(e35);
        } else {
            x51 = eval("var b38 = (s37) ? true : false;var b39 = !(b38);var b42; if (b39) { b42 = !!!(x40); } else { b42 = !!(x40); }var s44 = String(b42);var x47 = parseInt(String((s44).length), 10);var b48 = x36; var b49 = x47;b48 != b49");
        }
        return x51;
    }
    var b60;
    if (b6) {
        if (!(eval("fn52(s53, s54, x55, x56, b57)"))) {
            b60 = true;
        } else {
            b60 = false;
        }
    } else {
        if (!(eval("fn52(s53, s54, x55, x56, b57)"))) {
            b60 = false;
        } else {
            b60 = true;
        }
    }
    var s62 = String(b60);
    var x66;
    if (Boolean(s62)) {
        x66 = b64;
    } else {
        x66 = b65;
    }
    return x66;
})(input_S1, input_I2, input_B3, input_I1, input_S2, input_B2);
