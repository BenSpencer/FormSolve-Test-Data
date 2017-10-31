// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B1')) then not(not((if not(input_bool('B3')) then not((if (int(bool(input_int('I3'))) == (input_int('I3') / 0)) then true else input_bool('B3'))) else not((int(str(int(str(input_bool('B3'))))) === int(str(bool(len(input_string('S1')))))))))) else not(input_bool('B2')))

var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn45 = function (b1, b15, s27, b42, x10) {
    var e2 = "b1";
    var b3;
    if (eval(e2)) {
        b3 = false;
    } else {
        b3 = true;
    }
    var b40;
    if (eval("var b21 = b15; var b4 = b15; var e19 = \"var x6 = x10; var b18; if (((Number(eval(\\\"var b7 = !!(x6);b7\\\")) == (x10 / 0)) ? true : eval(\\\"b15\\\"))) { b18 = false; } else { b18 = true; }b18\";var e20 = \"eval(e19)\";var e23 = \"'' + (b21)\";var x24 = Number(eval(e23));var s25 = '' + (x24);var b30 = Boolean(eval(\"(s27).length\"));var x33 = Number((eval(\"b30\")).toString());var b34; if (parseInt(s25, 10) === x33) { b34 = true; } else { b34 = false; }var b36; if (b34) { b36 = false; } else { b36 = true; }var x37; if (!(b4)) { x37 = eval(e20); } else { x37 = b36; }eval(\"x37\")")) {
        b40 = false;
    } else {
        b40 = true;
    }
    var b41 = !(b40);
    var x44;
    if (b3) {
        x44 = b41;
    } else {
        var b43 = !(b42);
        x44 = b43;
    }
    return x44;
}
fn45(input_B1, input_B3, input_S1, input_B2, input_I3);
