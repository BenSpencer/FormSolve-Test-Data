// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then (bool(len(input_string('S1'))) === bool((int((if bool(len(input_string('S2'))) then str(not(input_bool('B1'))) else str(bool(input_int('I3'))))) * int(bool(len(input_string('S1'))))))) else not((bool(input_int('I1')) !== input_bool('B2'))))

var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);

function fn38(x12, b9, b1, s5, x30, s2) {
    var b33 = b1;
    var s20 = s2;
    var l3 = (s2).length;
    var b4 = !! (l3);
    var e18 = "var l7 = (eval(\"s5\")).length;var b8 = (l7) ? true : false;var e13 = \"x12\";var b15 = (eval(\"eval(e13)\")) ? true : false;var s16 = '' + (b15);var x17; if (b8) { x17 = String(!(b9)); } else { x17 = s16; }x17";
    var b22 = ((s20).length) ? true : false;
    var x23 = Number(b22);
    x24 = Number(eval(e18));
    x25 = x23;
    var b26 = (x24 * x25) ? true : false;
    var b27 = b4;
    var b28 = b26;
    var b34 = false;
    if ((eval("x30")) ? true : false !== b33) {
        b34 = true;
    }
    var b36 = !(b34);
    var x37;
    if (b1) {
        x37 = eval("b27 === b28");
    } else {
        x37 = b36;
    }
    return x37;
}
fn38(input_I3, input_B1, input_B2, input_S2, input_I1, input_S1);
