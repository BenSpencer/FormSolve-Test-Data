// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(str(bool(str(not((if (input_string('S1') in ['', 'PV', 'KQ326', 'z', 'I3', 'n', '', 'fsZ']) then input_bool('B2') else bool(str((input_int('I2') < int(not((input_string('S1') in ['ZKDn0', 'j0', 'x1Squ', 'dBU', 'pLs', 'O4j', 'Gr9N']))))))))))))) then input_int('I1') else int(input_string('S1')))

var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn31 = function (b5, s1, x26, x6) {
    var s28 = s1;
    var b19;
    if (eval("var s7 = s1; var opts3 = ['', 'PV', 'KQ326', 'z', 'I3', 'n', '', 'fsZ'];var b2 = false; for (var idx4 = 0; idx4 < opts3.length; idx4++) { if (opts3[idx4] == s1) { b2 = true; break; } }var opts9 = ['ZKDn0', 'j0', 'x1Squ', 'dBU', 'pLs', 'O4j', 'Gr9N'];var b8 = opts9.indexOf(s7) > -1;var b11 = !(b8);var x12 = (b11) ? 1 : 0;var b13 = false; if (x6 < x12) { b13 = true; }var s15 = '' + (b13);var b16 = !!(s15);var x17; if (b2) { x17 = b5; } else { x17 = b16; }x17")) {
        b19 = false;
    } else {
        b19 = true;
    }
    var s20 = String(b19);
    var b21 = (s20) ? true : false;
    var s22 = String(b21);
    var b23 = Boolean(s22);
    var b24;
    if (b23) {
        b24 = false;
    } else {
        b24 = true;
    }
    var x30;
    if (eval("b24")) {
        var e27 = "x26";
        x30 = eval(e27);
    } else {
        x30 = Number(s28);
    }
    return x30;
}
fn31(input_B2, input_S1, input_I1, input_I2);
