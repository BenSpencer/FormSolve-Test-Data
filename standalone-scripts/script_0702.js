// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(not(bool((if input_bool('B1') then str((int(not(not(input_bool('B2')))) > input_int('I1'))) else input_string('S1')))))) then not((str(input_bool('B1')) != str(int(str(int(str(bool(int((int(input_string('S2')) <= input_int('I3'))))))))))) else not((str(bool(int((int((if false then input_string('S1') else "8bD")) === int(str(int((input_string('S1') >= input_string('S3'))))))))) in ['', 'S', 'HQmIL', '3ej', 'fTgA9', '2nTvR', 'XW2sL', 'IWFL2'])))

var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);

var fn62 = function (b2, s10, x6, b1, x21, s42, s19) {
    var b17 = b1;
    var s38 = s10;
    var e12 = "var x11; if (b1) { var b3; if (b2) { b3 = false; } else { b3 = true; }var b4 = !(b3);var b7 = Number(b4) > x6;var s9 = String(b7); x11 = s9; } else {  x11 = s10; }x11";
    var b13 = Boolean(eval(e12));
    var b14 = !(b13);
    var s15 = String(b14);
    var b16 = !! (s15);
    var x61;
    if (b16) {
        var s33 = String(parseInt(eval("var e24 = \"var x20 = Number(s19);(x20 <= x21)\";var e25 = \"eval(e24)\";var x26 = (eval(e25)) ? 1 : 0;var s28 = (Boolean(x26)).toString();var s30 = String(Number(s28));s30"), 10));
        var e34 = "s33";
        x61 = !(((b17).toString() != eval(e34)));
    } else {
        var s41 = s38;
        var x39;
        if (false) {
            x39 = s38;
        } else {
            x39 = "8bD";
        }
        var b44 = s41 >= eval("s42");
        var x46 = (b44) | 0;
        var s47 = '' + (x46);
        var x48 = parseInt(s47, 10);
        var b49 = Number(x39) === x48;
        var e52 = "(b49) ? 1 : 0";
        var b53 = (eval(e52)) ? true : false;
        var opts57 = ['', 'S', 'HQmIL', '3ej', 'fTgA9', '2nTvR', 'XW2sL', 'IWFL2'];
        var b56 = false;
        for (var idx58 = 0; idx58 < opts57.length; idx58++) {
            if (opts57[idx58] == String(eval("b53"))) {
                b56 = true;
            }
        }
        var e59 = "b56";
        var b60;
        if (eval(e59)) {
            b60 = false;
        } else {
            b60 = true;
        }
        x61 = b60;
    }
    return x61;
}
fn62(input_B2, input_S1, input_I1, input_B1, input_I3, input_S3, input_S2);
