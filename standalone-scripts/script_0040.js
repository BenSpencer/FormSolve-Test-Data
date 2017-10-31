// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (len(str(bool(str(int((if bool(str(len(str(int(bool(int(bool(str((if input_bool('B3') then input_bool('B2') else input_bool('B1'))))))))))) then bool(input_string('S2')) else not(not(input_bool('B3'))))))))) <= len(str(input_int('I3')))) then input_string('S1') else str((int(str(bool(input_string('S1')))) <= input_int('I1'))))

var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn48 = Function('s18', 'b2', 's36', 'x30', 'x43', 'b1', 'b4', "var s37 = s36; var e27 = \"var b20 = b1; var e13 = \\\"var e3 = \\\\\\\"b2\\\\\\\";var x5; if (b1) { x5 = eval(e3); } else { x5 = b4; }var s6 = (x5).toString();var e9 = \\\\\\\"+((s6) ? true : false)\\\\\\\";var e11 = \\\\\\\"(eval(e9)) ? true : false\\\\\\\";var x12 = (eval(e11)) | 0;x12\\\";var l15 = ('' + (eval(e13))).length;var x23; if (!!(String(l15))) { x23 = (s18) ? true : false; } else { var b21; if (b20) { b21 = false; } else { b21 = true; }var b22 = !(b21); x23 = b22; }var s25 = '' + (~~(x23));!!(s25)\";var l29 = ((eval(e27)).toString()).length;var e31 = \"x30\";var s32 = '' + (eval(e31));var l33 = (s32).length;var b34 = l29 <= l33;var e40 = \"var b38 = !!(s37);eval(\\\"b38\\\")\";var x42 = parseInt(String(eval(e40)), 10);var b44 = x42 <= x43; return (b34 ? s36 : (b44).toString());");
fn48(input_S2, input_B2, input_S1, input_I3, input_I1, input_B3, input_B1);
