// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_string('S1') >= str((int(((int(input_bool('B1')) !== int(str(len(str(len(input_string('S2'))))))) === input_bool('B1'))) in [51, 88, 0, 1, -20, 0, 1, 197, 28]))) then input_bool('B2') else bool((if bool(str(int(not(input_bool('B2'))))) then input_string('S1') else input_string('S2'))))

var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);

function fn37(b25, b14, s32, s1) {
    var s5 = s32;
    var b26 = b25;
    var s31 = s1;
    var b2 = b14;
    var l6 = (s5).length;
    var s7 = String(l6);
    var s10 = ((eval("s7")).length).toString();
    var x11 = parseInt(s10, 10);
    var b12 = eval("~~(b2)") !== x11;
    var b15 = b12;
    var b16 = b14;
    var opts19 = [51, 88, 0, 1, -20, 0, 1, 197, 28];
    var b18 = opts19.indexOf((b15 === b16) | 0) > -1;
    var e21 = "b18";
    var s22 = '' + (eval(e21));
    var b23 = s1;
    var b24 = s22;
    return (b23 >= b24 ? b25 : (eval("var b27; if (b26) { b27 = false; } else { b27 = true; }var x28 = Number(b27);var s29 = (x28).toString();(!!(s29) ? s31 : s32)")) ? true : false);
}
fn37(input_B2, input_B1, input_S2, input_S1);
