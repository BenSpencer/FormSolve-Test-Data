// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((if input_bool('B1') then bool(int(input_bool('B3'))) else input_bool('B2'))) then int(input_string('S3')) else ((input_int('I1') + input_int('I3')) * int((not(input_bool('B1')) == (not((bool(input_int('I1')) && not(not(bool(input_string('S1')))))) === not(bool(int(((true === regex-test(input_string('S1'), /^.v(y|g)*[a-z]$/)) === (input_bool('B2') !== not(input_bool('B1'))))))))))))

var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn58 = Function('x18', 's27', 'b14', 'b13', 'x19', 's16', 'b12', "var b22 = b12; var b40 = b13; var b15 = !((function(b1, b9, b3) { var e2 = \"b1\";var x10; if (eval(e2)) { var x4 = (b3) ? 1 : 0;var e5 = \"x4\";var e6 = \"eval(e5)\"; x10 = Boolean(eval(\"eval(e6)\")); } else { x10 = b9; } return x10; })(b12, b13, b14) );var x17 = Number(s16);var x24 = x18; var b41 = b22; var s36 = s27; var b28 = (s27) ? true : false;var b29 = !(b28);var b30 = !(b29);var b31; if (b30) {  b31 = eval(\"(x24) ? true : false\"); } else { b31 = false; }var e33 = \"b31\";var re37 = /^.v(y|g)*[a-z]$/;var b42; if (b41) { b42 = false; } else { b42 = true; }var b43 = b40 !== b42;var b45 = (true === re37.test(s36)); var b46 = b43;var b49; if ((~~(b45 === b46)) ? true : false) { b49 = false; } else { b49 = true; }var b50; if (eval(\"!(eval(e33))\") === b49) { b50 = true; } else { b50 = false; }var b52; if (!(b22)) { if (b50) { b52 = true; } else { b52 = false; } } else { if (b50) { b52 = false; } else { b52 = true; } }var x54 = ~~(b52);x55 = (x18 + x19) * x54; return (b15 ? x17 : x55);");
fn58(input_I1, input_S1, input_B3, input_B2, input_I3, input_S3, input_B1);
