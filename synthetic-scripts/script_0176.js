// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str((if input_bool('B1') then input_bool('B2') else (not(input_bool('B3')) !== input_bool('B1'))))) then bool(input_string('S1')) else not((if (input_string('S2') != input_string('S1')) then not((input_int('I1') > input_int('I2'))) else bool(int(input_string('S2'))))))

var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);

function fn36(b2, x22, s16, b4, x21, b1, s14) {
    var s18 = s14;
    var b6 = b1;
    var b5 = !(b4);
    var e7 = "b6";
    var b8 = false;
    if (b5 !== eval(e7)) {
        b8 = true;
    }
    var s12 = String(eval("(b1 ? eval(\"b2\") : b8)"));
    var x35;
    if (Boolean(s12)) {
        x35 = Boolean(s14);
    } else {
        var b34;
        if (eval("var s26 = s16; var e17 = \"s16\";var b19 = eval(e17) != s18;var x30; if (b19) { var b23 = x21 > x22;var b25 = !(b23); x30 = b25; } else { var b28 = !!(Number(s26));var e29 = \"b28\"; x30 = eval(e29); }var e31 = \"x30\";var e32 = \"eval(e31)\";eval(e32)")) {
            b34 = false;
        } else {
            b34 = true;
        }
        x35 = b34;
    }
    return x35;
}
fn36(input_B2, input_I2, input_S2, input_B3, input_I1, input_B1, input_S1);
