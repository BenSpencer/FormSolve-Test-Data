// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str((input_bool('B1') == not((str(int((bool(input_string('S2')) == bool(input_int('I3'))))) in ['9D5p', 'Dt3H', 'Jy8', 'tjsh', 'T3p']))))) then (int(str(int((if (input_bool('B2') == input_bool('B3')) then input_bool('B3') else (input_bool('B2') || bool(int(input_bool('B2')))))))) in [9, 1, 0, 10, 56, 1, 1, 186, 6]) else (str(int(not((not(bool(input_string('S1'))) === not(not(bool(str(bool(input_int('I3')))))))))) <= "FOU"))

var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn64 = function (x4, s41, b21, b1, b20, s2) {
    var x44 = x4;
    var b16 = false;
    if (b1 == !(eval("var b3 = !!(s2);var b5 = Boolean(x4);var e6 = \"b5\";var b7; if (b3 == eval(e6)) { b7 = true; } else { b7 = false; }var opts12 = ['9D5p', 'Dt3H', 'Jy8', 'tjsh', 'T3p'];var b11 = false; for (var idx13 = 0; idx13 < opts12.length; idx13++) { if (opts12[idx13] == String(Number(b7))) { b11 = true; } }b11"))) {
        b16 = true;
    }
    var b19 = !! (String(b16));
    var e58 = "!(eval(\"var b43; if (Boolean(s41)) { b43 = false; } else { b43 = true; }var s48 = ((eval(\\\"eval(\\\\\\\"x44\\\\\\\")\\\")) ? true : false).toString();var e49 = \\\"s48\\\";var b52; if (!((eval(e49)) ? true : false)) { b52 = false; } else { b52 = true; }var b54; if (b43 === eval(\\\"b52\\\")) { b54 = true; } else { b54 = false; }b54\"))";
    var b61;
    if (String(+(eval(e58))) <= "FOU") {
        b61 = true;
    } else {
        b61 = false;
    }
    var x63;
    if (b19) {
        var b24 = b21;
        var b26 = b20;
        var b22 = b20 == b21;
        var e25 = "b24";
        var b28 = b26;
        var e27 = "b26";
        var b32 = false;
        if (eval(e27) || eval("((b28) ? 1 : 0) ? true : false")) {
            b32 = true;
        }
        var s36 = (+((b22 ? eval(e25) : b32))).toString();
        var x37 = Number(s36);
        var opts39 = [9, 1, 0, 10, 56, 1, 1, 186, 6];
        var b38 = false;
        for (var idx40 = 0; idx40 < opts39.length; idx40++) {
            if (opts39[idx40] == x37) {
                b38 = true;
            }
        }
        x63 = b38;
    } else {
        x63 = b61;
    }
    return x63;
}
fn64(input_I3, input_S1, input_B3, input_B1, input_B2, input_S2);
