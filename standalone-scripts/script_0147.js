// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(input_int('I1'))) then (if (regex-test(str(bool(len(input_string('S1')))), /^(vg[A-Z]Im_usmIN|Qx)?$/) != input_bool('B3')) then not((input_int('I2') >= input_int('I2'))) else not((bool(int(str(input_int('I3')))) && (str(input_int('I2')) > input_string('S2'))))) else not(not(not(input_bool('B3')))))

var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);

var fn41 = Function('s5', 'b12', 'x15', 's27', 'x1', 'x21', "var b35 = b12; var e3 = \"(x1).toString()\";var b4 = Boolean(eval(e3));var x25 = x15; var e9 = \"var s8 = String(Boolean((s5).length));s8\";var re11 = /^(vg[A-Z]Im_usmIN|Qx)?$/;var b13 = re11.test(eval(\"eval(e9)\")) != b12;var x34; if (b13) {  x34 = eval(\"var x16 = x15; var b17; if (x15 >= x16) { b17 = true; } else { b17 = false; }var b19; if (b17) { b19 = false; } else { b19 = true; }b19\"); } else { x34 = !(eval(\"var s22 = (x21).toString();var s26 = '' + (x25);var b28 = false; if (s26 > s27) { b28 = true; }var b30 = false; if (Boolean(parseInt(s22, 10)) && b28) { b30 = true; }b30\")); }var e36 = \"b35\";var b37 = !(eval(e36));var b38 = !(b37);var b39; if (b38) { b39 = false; } else { b39 = true; }var x40; if (b4) { x40 = x34; } else { x40 = b39; } return x40;");
fn41(input_S1, input_B3, input_I2, input_S2, input_I1, input_I3);
