// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (7 > len(input_string('S1'))) then (bool(input_int('I1')) === bool(len(str(len(str(bool(input_string('S2')))))))) else (str(((str(((int((input_string('S2') <= str(int(str(int(bool(int(input_bool('B1'))))))))) % len(str(input_bool('B3')))) < input_int('I2'))) >= str(int(not((if (41 >= int(input_bool('B3'))) then (bool(int((input_int('I3') != input_int('I1')))) || input_bool('B2')) else not((input_string('S3') in ['GYSO', 'cZK', '9spxM', 'BY', 'y2I', 'E8Hg', '']))))))) == input_bool('B2'))) in ['kxm', '', 'vPx', 'dXpk', '8B', 'L', 'nC', 'Ue1', 'G5']))

var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn71 = Function('b28', 's17', 'b18', 's50', 'b47', 'x41', 'x33', 's1', 'x42', "var s7 = s17; var x5 = x42; var b3; if (7 > (s1).length) { b3 = true; } else { b3 = false; }var x70; if (b3) { var b6 = Boolean(x5);var b8 = (s7) ? true : false;var b15 = b6 === Boolean((String((String(eval(\"b8\"))).length)).length); x70 = b15; } else { var s66 = (eval(\"var b62 = b47; var b37 = b28; var x21 = ~~(Boolean(Number(b18)));var s22 = (x21).toString();var b25 = s17; var b26 = String(parseInt(s22, 10));var x27 = (b25 <= b26) | 0;var s29 = '' + (b28);x31 = x27; x32 = (s29).length;var b34; if (x31 % x32 < x33) { b34 = true; } else { b34 = false; }var s36 = String(b34);var x38 = (b37) | 0;var b46 = Boolean(((x41 != x42)) ? 1 : 0);var b48; if (b46) { b48 = true; } else {  b48 = b47; }var opts52 = ['GYSO', 'cZK', '9spxM', 'BY', 'y2I', 'E8Hg', ''];var x56; if ((41 >= x38)) { x56 = b48; } else { x56 = !(eval(\\\"opts52.indexOf(s50) > -1\\\")); }var b57; if (x56) { b57 = false; } else { b57 = true; }var x58 = Number(b57);var s59 = '' + (x58);var b60 = s36; var b61 = s59;var b63 = b60 >= b61 == b62;b63\")).toString();var opts68 = ['kxm', '', 'vPx', 'dXpk', '8B', 'L', 'nC', 'Ue1', 'G5']; x70 = opts68.indexOf(s66) > -1; } return x70;");
fn71(input_B3, input_S2, input_B1, input_S3, input_B2, input_I3, input_I2, input_S1, input_I1);
