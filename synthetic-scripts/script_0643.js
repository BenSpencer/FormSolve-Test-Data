// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(str(bool(str((str(not(input_bool('B2'))) >= str((input_int('I1') <= len(str(len(input_string('S1')))))))))))) then (if ((input_bool('B2') == (str(not(input_bool('B3'))) <= input_string('S2'))) && input_bool('B2')) then bool(int(input_string('S1'))) else (input_bool('B1') || input_bool('B1'))) else bool(input_string('S2')))

var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");

function fn46(b1, s33, b36, s25, b22, x6) {
    var s43 = s25;
    var b21 = b1;
    var s7 = s33;
    var e2 = "b1";
    var b4;
    if (eval("eval(e2)")) {
        b4 = false;
    } else {
        b4 = true;
    }
    var s9 = '' + ((s7).length);
    var l10 = (s9).length;
    var s16 = String((String(b4) >= String((x6 <= l10))));
    var b17 = (s16) ? true : false;
    var b19 = Boolean((b17).toString());
    var b20 = !(b19);
    var b30 = b21;
    var b23;
    if (b22) {
        b23 = false;
    } else {
        b23 = true;
    }
    var b26 = false;
    if (String(b23) <= s25) {
        b26 = true;
    }
    var b28;
    if (b21 == b26) {
        b28 = true;
    } else {
        b28 = false;
    }
    var b31;
    if (b28) {
        b31 = b30;
    } else {
        b31 = false;
    }
    var x34 = parseInt(s33, 10);
    var e41 = "var b37 = b36; (b36 || eval(\"b37\"))";
    var x45;
    if (b20) {
        x45 = (b31 ? Boolean(x34) : eval(e41));
    } else {
        x45 = (s43) ? true : false;
    }
    return x45;
}
fn46(input_B2, input_S1, input_B1, input_S2, input_B3, input_I1);
