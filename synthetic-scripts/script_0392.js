// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(int(((int(bool(int(str(((input_int('I1') + input_int('I3')) - int(not(bool(int((input_int('I2') != (len(str(int((input_string('S2') in ['1Flc', '7', 'g', 'E', 'r', 'ZrkKa', '1B', '763', 'huPda', 'EC'])))) * len(input_string('S2'))))))))))))) + int(bool((int(input_bool('B3')) + int(input_bool('B2')))))) < input_int('I2'))))) then input_int('I3') else input_int('I1'))

var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn49 = Function('s13', 'x2', 'x1', 'b31', 'b29', 'x39', "var x47 = x1; var x46 = x2; var x5 = x39; var s6 = s13; var opts8 = ['1Flc', '7', 'g', 'E', 'r', 'ZrkKa', '1B', '763', 'huPda', 'EC'];var b7 = false; for (var idx9 = 0; idx9 < opts8.length; idx9++) { if (opts8[idx9] == s6) { b7 = true; } }x15 = (((b7) ? 1 : 0).toString()).length * (s13).length;var b21 = !(Boolean(+((x5 != x15))));var x22 = ~~(b21);var x26 = Number((((x1 + x2) - x22)).toString());var b27 = !!(x26);var x28 = ~~(b27);x37 = x28; x38 = ((((b29) | 0 + ~~(b31))) ? true : false) ? 1 : 0;var b40 = x37 + x38 < x39;var e43 = \"Number(b40)\";var b45 = Boolean((eval(e43)).toString());var x48; if (b45) {  x48 = x46; } else {  x48 = x47; } return x48;");
fn49(input_S2, input_I3, input_I1, input_B2, input_B3, input_I2);
