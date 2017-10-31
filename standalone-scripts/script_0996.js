// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (((if input_bool('B3') then (if bool(input_int('I3')) then (input_int('I3') - int((len(input_string('S3')) in [34, 6, 1, 0]))) else int(str(not(bool(str(int((str(len(input_string('S1'))) in ['7Gu8z', 'AWj6l', '', 'veP', 'lT6', 'pl', 'yZ8YK', 'Jvtfr'])))))))) else 1) == input_int('I3')) !== ((len(str(bool(input_string('S2')))) * int(input_string('S1'))) in [24, 6, 1, 1, 1, 80, 4, 6])) then int(not((bool(int((((input_int('I3') - 31) - input_int('I1')) in [5, 1, 165, 164, 5, 138, 1]))) || bool(int(input_bool('B1')))))) else input_int('I3'))

var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn68 = Function('s14', 'b59', 's6', 's32', 'b1', 'x50', 'x29', "var x47 = x29; var x66 = x29; var s36 = s14; var x3 = x29; var e2 = \"b1\";var x28; if (eval(e2)) { var x5 = x3; var b4 = !!(x3);var l7 = (s6).length;var opts9 = [34, 6, 1, 0];var b8 = opts9.indexOf(l7) > -1;x12 = x5; x13 = (b8) ? 1 : 0;var x27; if (b4) { x27 = x12 - x13; } else { var l15 = (s14).length;var opts18 = ['7Gu8z', 'AWj6l', '', 'veP', 'lT6', 'pl', 'yZ8YK', 'Jvtfr'];var b17 = false; for (var idx19 = 0; idx19 < opts18.length; idx19++) { if (opts18[idx19] == String(l15)) { b17 = true; break; } }var x20 = +(b17);var e21 = \"x20\";var s22 = String(eval(e21));var b23 = Boolean(s22);var b24 = !(b23); x27 = parseInt((b24).toString(), 10); } x28 = x27; } else {  x28 = 1; }var b30; if (x28 == x29) { b30 = true; } else { b30 = false; }var b45 = b30 !== eval(\"var s34 = String((s32) ? true : false);var l35 = (s34).length;var x37 = parseInt(s36, 10);x39 = l35; x40 = eval(\\\"x37\\\");var opts42 = [24, 6, 1, 1, 1, 80, 4, 6];var b41 = opts42.indexOf(x39 * x40) > -1;b41\");var x67; if (b45) { var opts54 = [5, 1, 165, 164, 5, 138, 1];var b53 = false; for (var idx55 = 0; idx55 < opts54.length; idx55++) { if (opts54[idx55] == ((x47 - 31) - x50)) { b53 = true; } }var e56 = \"b53\";var x57 = Number(eval(e56));var b58 = !!(x57);var x60 = Number(b59);var b62; if (b58 || !!(x60)) { b62 = true; } else { b62 = false; }var x65 = ~~(!(b62)); x67 = x65; } else { x67 = x66; } return x67;");
fn68(input_S1, input_B1, input_S3, input_S2, input_B3, input_I1, input_I3);
