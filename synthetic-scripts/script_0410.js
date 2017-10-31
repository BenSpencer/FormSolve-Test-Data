// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if (not(not(not(bool(len(input_string('S1')))))) !== (if bool(str(input_bool('B1'))) then not(bool(str(len(str(input_bool('B3')))))) else bool(input_int('I1')))) then input_bool('B3') else (input_int('I1') === input_int('I3'))) then input_string('S2') else "zd9DA")

var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn41 = function (s39, s1, b26, x27, x33, b28) {
    var x40;
    if (eval("var x32 = x27; var b31 = b28; var e8 = \"!(eval(\\\"var l2 = (s1).length;var b3 = Boolean(l2);var b4 = !(b3);var b5; if (b4) { b5 = false; } else { b5 = true; }b5\\\"))\";var fn25 = Function('b9', 'x20', 'b14', \"var e13 = \\\"(eval(\\\\\\\"var s10 = '' + (b9);s10\\\\\\\")) ? true : false\\\";var b18 = (String(('' + (b14)).length)) ? true : false;var b19 = !(b18);var x24; if (eval(e13)) { x24 = b19; } else { var e21 = \\\"x20\\\";var e22 = \\\"eval(e21)\\\"; x24 = (eval(e22)) ? true : false; } return x24;\"); var b29 = eval(e8); var b30 = fn25(b26, x27, b28);var e36 = \"(x32 === x33)\";(b29 !== b30 ? b31 : eval(e36))")) {
        x40 = s39;
    } else {
        x40 = "zd9DA";
    }
    return x40;
}
fn41(input_S2, input_S1, input_B1, input_I1, input_I3, input_B3);
