// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(input_bool('B1')) >= str(int(str(input_bool('B2'))))) then (int(bool(int(input_string('S2')))) < int(not((input_string('S1') === str(not((not(bool(int(str(input_bool('B2'))))) || input_bool('B1')))))))) else ((str(input_int('I2')) in ['', 'wT80', '', 'ArX', 'PpI', 'O', 'vJuZ', 'lxi', 'I', '']) || not(bool(str(input_bool('B1'))))))

var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);

function fn53(s17, x36, b1, s11, b18) {
    var b3 = b18;
    var b24 = b1;
    var b46 = b1;
    var s2 = '' + (b1);
    var e5 = "(b3).toString()";
    var x7 = Number(eval("eval(e5)"));
    var b9;
    if (s2 >= '' + (x7)) {
        b9 = true;
    } else {
        b9 = false;
    }
    var e16 = "eval(\"var x12 = parseInt(s11, 10);((x12) ? true : false) ? 1 : 0\")";
    var s19 = '' + (b18);
    var x20 = Number(s19);
    var b22 = !! (eval("x20"));
    var b23 = !(b22);
    var b25;
    if (b23) {
        b25 = true;
    } else {
        b25 = b24;
    }
    var b28;
    if (eval("b25")) {
        b28 = false;
    } else {
        b28 = true;
    }
    var s29 = '' + (b28);
    var b30;
    if (s17 === s29) {
        b30 = true;
    } else {
        b30 = false;
    }
    var b32 = !(b30);
    var x52;
    if (b9) {
        x52 = (eval(e16) < Number(b32));
    } else {
        var e45 = "var e38 = \"eval(\\\"x36\\\")\";var opts43 = ['', 'wT80', '', 'ArX', 'PpI', 'O', 'vJuZ', 'lxi', 'I', ''];var b42 = false; for (var idx44 = 0; idx44 < opts43.length; idx44++) { if (opts43[idx44] == String(eval(\"eval(\\\"eval(e38)\\\")\"))) { b42 = true; break; } }b42";
        var s47 = String(b46);
        var b49;
        if (Boolean(s47)) {
            b49 = false;
        } else {
            b49 = true;
        }
        var b50 = eval(e45);
        var b51 = b49;
        x52 = b50 || b51;
    }
    return x52;
}
fn53(input_S1, input_I2, input_B1, input_S2, input_B2);
