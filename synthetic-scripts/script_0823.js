// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B2') then not((str(not((str((not(input_bool('B2')) != input_bool('B1'))) in ['Slt', '', 'VK', '6LCY1']))) !== str(bool(str(input_bool('B2')))))) else true) then input_bool('B3') else (bool(str(input_int('I3'))) !== input_bool('B2')))

var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

function fn33(b4, b22, b1, x23) {
    var b28 = b1;
    var e21 = "var b13 = b1; var b2 = b13; var b3; if (b2) { b3 = false; } else { b3 = true; }var b5 = b3; var b6 = b4;var s7 = String(b5 != b6);var opts9 = ['Slt', '', 'VK', '6LCY1'];var b8 = false; for (var idx10 = 0; idx10 < opts9.length; idx10++) { if (opts9[idx10] == s7) { b8 = true; } }var b11; if (b8) { b11 = false; } else { b11 = true; }var b17; if (String(b11) !== String((String(b13)) ? true : false)) { b17 = true; } else { b17 = false; }var b19 = !(b17);(b1 ? b19 : true)";
    var x32;
    if (eval(e21)) {
        x32 = b22;
    } else {
        var e27 = "var b26 = !!(eval(\"'' + (x23)\"));b26";
        var e29 = "b28";
        var b30 = eval(e27);
        var b31 = eval(e29);
        x32 = b30 !== b31;
    }
    return x32;
}
fn33(input_B1, input_B3, input_B2, input_I3);
