// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((input_int('I2') in [3, 0, 9, 5, 3, 1, 8, 2])) then len(str((str(input_bool('B1')) < (input_string('S2') + input_string('S1'))))) else len(str(not(not(not(bool(str((bool(str((int(input_string('S2')) % len(str((str(input_int('I3')) in ['', '', 'mJ', 'Be6D', '7hV6'])))))) == input_bool('B3'))))))))))

var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn49 = function (s9, s18, b6, x1, b35, x22) {
    var s8 = s18;
    var opts3 = [3, 0, 9, 5, 3, 1, 8, 2];
    var b5 = !(opts3.indexOf(x1) > -1);
    var e17 = "var l16 = ('' + (eval(\"var s7 = String(b6);var x10 = s8; var x11 = s9;var b12; if (s7 < x10 + x11) { b12 = true; } else { b12 = false; }b12\"))).length;l16";
    var x48;
    if (b5) {
        x48 = eval(e17);
    } else {
        x48 = (eval("var b43 = !(!(eval(\"var s28 = String(eval(\\\"var opts25 = ['', '', 'mJ', 'Be6D', '7hV6'];opts25.indexOf((x22).toString()) > -1\\\"));var b36; if (eval(\\\"Boolean('' + ((parseInt(eval(\\\\\\\"eval(\\\\\\\\\\\\\\\"s18\\\\\\\\\\\\\\\")\\\\\\\"), 10) % (s28).length)))\\\")) { b36 = b35; } else { b36 = !b35; }var s38 = '' + (b36);!!(eval(\\\"s38\\\"))\")));var b44 = !(b43);var s45 = (b44).toString();s45")).length;
    }
    return x48;
}
fn49(input_S1, input_S2, input_B1, input_I2, input_B3, input_I3);
