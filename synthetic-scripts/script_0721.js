// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((int(str(((bool(int((input_string('S2') in ['gqO', '', 'z7O']))) !== (int(str(input_bool('B3'))) in [-57, 1, 1, 3, 99, 1, 18, 1])) === (not(bool(input_int('I1'))) || input_bool('B2'))))) <= input_int('I3'))) then str((int(input_bool('B1')) - len(str(bool((input_int('I1') + 0)))))) else (if (len(input_string('S1')) > input_int('I2')) then input_string('S1') else input_string('S2')))

var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);

function fn55(x28, b7, x16, b20, s1, x48, b33, s45) {
    var x35 = x16;
    var s52 = s1;
    var e31 = "var opts3 = ['gqO', '', 'z7O'];var b2 = opts3.indexOf(s1) > -1;var s8 = '' + (b7);var opts12 = [-57, 1, 1, 3, 99, 1, 18, 1];var b14; if (Boolean(+(b2)) !== opts12.indexOf(Number(eval(\"s8\"))) > -1) { b14 = true; } else { b14 = false; }var e17 = \"x16\";var b19 = !(Boolean(eval(e17)));var b22; if (eval(\"b20\")) { b22 = true; } else { b22 = b19; }var b24 = b14 === b22;var s26 = (b24).toString();var b29 = parseInt(s26, 10) <= x28;b29";
    var b32;
    if (eval(e31)) {
        b32 = false;
    } else {
        b32 = true;
    }
    var s51 = s45;
    var e46 = "s45";
    var l47 = (eval(e46)).length;
    var x53;
    if ((l47 > x48)) {
        x53 = s51;
    } else {
        x53 = s52;
    }
    var x54;
    if (b32) {
        var x34 = Number(b33);
        x42 = x34;
        x43 = (eval("x36 = x35 + 0;var b38 = Boolean(x36);var s39 = '' + (b38);s39")).length;
        var s44 = (x42 - x43).toString();
        x54 = s44;
    } else {
        x54 = x53;
    }
    return x54;
}
fn55(input_I3, input_B3, input_I1, input_B2, input_S2, input_I2, input_B1, input_S1);
