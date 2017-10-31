// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (bool(input_string('S2')) === input_bool('B1')) then not(input_bool('B1')) else (int(bool(str(int(str(input_bool('B3')))))) != int(str((if (not(regex-test(input_string('S3'), /^(r|hrJpY.j_FmF\d+[-_ ]sVTl)$/)) === bool((if not(bool(str(bool(str(input_bool('B2')))))) then len(input_string('S2')) else input_int('I1')))) then (input_string('S2') in ['43Xas', '6EdO', 'dCzW', '', 'x2lya', 'M', '', 'QbxLk', '2Y1u']) else not((str(input_bool('B1')) == str(not(not(input_bool('B2')))))))))))

var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn54 = Function('b3', 's14', 'b17', 'b8', 's1', 'x26', "var b37 = b3; var b6 = b3; var s24 = s1; var b2 = (s1) ? true : false;var b4 = b2 === b3;var b7; if (b6) { b7 = false; } else { b7 = true; }var s11 = '' + (Number('' + (b8)));var s32 = s24; var b39 = b17; var re15 = new RegExp(\"^(r|hrJpY.j_FmF\\\\d+[-_ ]sVTl)$\");var b16; if (re15.test(s14)) { b16 = false; } else { b16 = true; }var s18 = (b17).toString();var b19 = (s18) ? true : false;var s20 = '' + (b19);var b21 = !!(s20);var e22 = \"b21\";var l25 = (s24).length;var x27; if (!(eval(e22))) { x27 = l25; } else { x27 = x26; }var e36 = \"var opts34 = ['43Xas', '6EdO', 'dCzW', '', 'x2lya', 'M', '', 'QbxLk', '2Y1u'];var b33 = opts34.indexOf(s32) > -1;b33\";var b40; if (b39) { b40 = false; } else { b40 = true; }var s42 = '' + (!(b40));var b43 = '' + (b37); var b44 = s42;var b45; if (b43 == b44) { b45 = false; } else { b45 = true; }var e46 = \"b45\";var e48 = \"(eval(\\\"(b16 === Boolean(x27))\\\") ? eval(e36) : eval(e46))\";var s49 = '' + (eval(e48));var b51 = false; if (~~(Boolean(s11)) != parseInt(s49, 10)) { b51 = true; }var x53; if (b4) { x53 = b7; } else { x53 = b51; } return x53;");
fn54(input_B1, input_S3, input_B2, input_B3, input_S2, input_I1);
