// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if ((if input_bool('B3') then (input_int('I3') in [1, 0, 134, 1]) else bool(int((input_string('S3') >= str(int(bool(input_string('S3')))))))) === bool(str(input_int('I3')))) then bool((if true then 3 else input_int('I3'))) else (not(bool(input_string('S2'))) && (not(bool(input_int('I1'))) != bool(str(int(bool((if input_bool('B3') then "N" else str(input_int('I3')))))))))) then int(replace(input_string('S3'), "wbhM", "FHle")) else input_int('I2'))

var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);

var fn24 = Function('x22', "var x23; if (true) { x23 = 3; } else { x23 = x22; } return x23;");

function fn53(b1, s27, x17, x30, x51, s48) {
    var s6 = s48;
    var x52;
    if (eval("var b33 = b1; var x25 = x17; var x34 = x17; var x2 = x17; var x16; if (b1) { var opts4 = [1, 0, 134, 1];var b3 = false; for (var idx5 = 0; idx5 < opts4.length; idx5++) { if (opts4[idx5] == x2) { b3 = true; break; } } x16 = b3; } else { var s7 = s6; var s10 = String((!!(s7)) ? 1 : 0);var b11 = s6; var b12 = s10;var b14 = (~~(b11 >= b12)) ? true : false; x16 = eval(\"b14\"); }var s18 = '' + (x17);var b20 = x16; var b21 = (s18) ? true : false;var b26 = (fn24(x25)) ? true : false;var x46; if (b20 === b21) { x46 = b26; } else { var b28 = (s27) ? true : false;var b29 = !(b28);var b31 = Boolean(x30);var s40 = (eval(\"var x36; if (b33) {  x36 = \\\"N\\\"; } else {  x36 = (x34).toString(); }var b37 = (x36) ? true : false;var x38 = (b37) ? 1 : 0;x38\")).toString();var b42 = false; if (!(b31) != !!(s40)) { b42 = true; }var b44 = false; if (b29 && b42) { b44 = true; } x46 = b44; }x46")) {
        var s49 = (s48).replace("wbhM", "FHle");
        x52 = parseInt(s49, 10);
    } else {
        x52 = x51;
    }
    return x52;
}
fn53(input_B3, input_S2, input_I3, input_I1, input_I2, input_S3);
