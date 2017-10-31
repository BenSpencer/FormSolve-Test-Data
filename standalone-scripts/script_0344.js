// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then input_bool('B2') else bool(str(int((int(str((not((int(bool(str(input_bool('B2')))) != len(str(bool(str((if not((len(str((str(not(not(input_bool('B3')))) in ['Q', '', 'ADN', 'OIz', 'G1oY', 't0o6', 'HJw', 'my3dX', '0r8m1', 'PA']))) < input_int('I2'))) then (if (bool(len(str(input_bool('B3')))) !== not(not(input_bool('B1')))) then (bool(input_int('I2')) !== input_bool('B1')) else input_bool('B3')) else not((str(bool(input_int('I2'))) == input_string('S2')))))))))) && bool(input_int('I1'))))) in [57, 1, 0, 0, 0, 9, 75])))))

var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn72 = Function('x18', 'b1', 'b2', 'b22', 'x58', 's44', "var b26 = b1; var b4 = b2; var x71; if (b1) { x71 = eval(\"b2\"); } else { var e69 = \"var e7 = \\\"!!(String(b4))\\\";var x8 = Number(eval(e7));var x32 = x18; var x39 = x18; var b9 = b22; var s12 = '' + (!(!(b9)));var opts14 = ['Q', '', 'ADN', 'OIz', 'G1oY', 't0o6', 'HJw', 'my3dX', '0r8m1', 'PA'];var b13 = false; for (var idx15 = 0; idx15 < opts14.length; idx15++) { if (opts14[idx15] == s12) { b13 = true; break; } }var s16 = '' + (b13);var l17 = (s16).length;var b37 = b22; var b34 = b26; var s23 = (b22).toString();var b30; if (Boolean((s23).length) !== !(!(eval(\\\"b26\\\")))) { b30 = true; } else { b30 = false; }var x38; if (b30) { var b33 = !!(x32); x38 = (b33 !== b34); } else { x38 = b37; }var e40 = \\\"x39\\\";var b42 = !!(eval(\\\"eval(e40)\\\"));var s43 = '' + (b42);var b45 = s43; var b46 = s44;var b47; if (b45 == b46) { b47 = false; } else { b47 = true; }var e50 = \\\"String((!((l17 < x18)) ? x38 : b47))\\\";var b51 = Boolean(eval(e50));var b55 = false; if (x8 != (eval(\\\"String(b51)\\\")).length) { b55 = true; }var b57 = !(b55);var b60; if (b57) { var b59 = (x58) ? true : false; b60 = b59; } else { b60 = false; }var opts65 = [57, 1, 0, 0, 0, 9, 75];var b64 = opts65.indexOf(parseInt('' + (b60), 10)) > -1;var s68 = (Number(b64)).toString();s68\";var b70 = !!(eval(e69)); x71 = b70; } return x71;");
fn72(input_I2, input_B1, input_B2, input_B3, input_I1, input_S2);
