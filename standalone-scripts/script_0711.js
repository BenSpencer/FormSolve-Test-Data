// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not(input_bool('B2')) === (len(str(int(not(not(bool((int(str(input_int('I3'))) + int(str(((len(str(int(input_string('S1')))) in [0, 0, -54, 0, 97, 1, 174, 0, 61]) && not(input_bool('B1')))))))))))) !== int(input_bool('B3')))) then regex-test(input_string('S1'), /^([0-9]|\W?)$/) else input_bool('B3'))

var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);

var fn44 = Function('b1', 'b31', 'b17', 'x3', 's37', "var b42 = b31; var s8 = s37; var b2 = !(b1);var e7 = \"var x6 = Number((eval(\\\"x3\\\")).toString());x6\";var b18; if (b17) { b18 = false; } else { b18 = true; }var b19; if (b18) { var e10 = \"parseInt(s8, 10)\";var s11 = (eval(e10)).toString();var l12 = (s11).length;var opts15 = [0, 0, -54, 0, 97, 1, 174, 0, 61];var b14 = opts15.indexOf(eval(\"l12\")) > -1; b19 = b14; } else { b19 = false; }var s21 = '' + (b19);var b26 = !(!!((eval(e7) + Number(s21))));var x28 = (!(b26)) | 0;var s29 = String(x28);var x32 = +(b31);var b33 = (s29).length; var b34 = x32;var b35 = false; if (b2 === b33 !== b34) { b35 = true; }var x43; if (b35) { var e41 = \"eval(\\\"var re39 = /^([0-9]|\\\\\\\\W?)$/;re39.test(eval(\\\\\\\"s37\\\\\\\"))\\\")\"; x43 = eval(e41); } else { x43 = b42; } return x43;");
fn44(input_B2, input_B3, input_B1, input_I3, input_S1);
