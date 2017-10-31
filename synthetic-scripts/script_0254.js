// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then (if not(input_bool('B3')) then int(str((bool(input_string('S2')) === bool((input_int('I1') + len(str(int(not(input_bool('B1')))))))))) else len(str((input_bool('B2') == (int(bool(int(input_string('S2')))) <= int(input_string('S2'))))))) else int(str(input_int('I3'))))

var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn42 = Function('s23', 'x7', 'x38', 'b21', 'b1', 'b2', "var b8 = b1; var s4 = s23; var b3; if (b2) { b3 = false; } else { b3 = true; }var e5 = \"s4\";var b6 = (eval(e5)) ? true : false;var l13 = ('' + ((!(eval(\"b8\"))) ? 1 : 0)).length;x14 = x7 + l13;var b16 = (x14) ? true : false;var b17; if (b6 === b16) { b17 = true; } else { b17 = false; }var e22 = \"b21\";var s28 = s23; var x26 = Number((Number(s23)) ? true : false);var e29 = \"s28\";var x30 = parseInt(eval(e29), 10);var b31 = eval(\"x26\") <= x30;var x37; if (b3) { x37 = parseInt(String(b17), 10); } else { x37 = (((eval(e22) == b31)).toString()).length; }var s39 = '' + (x38);var x40 = Number(s39); return (b1 ? x37 : x40);");
fn42(input_S2, input_I1, input_I3, input_B2, input_B1, input_B3);
