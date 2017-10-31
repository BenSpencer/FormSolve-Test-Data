// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B1') !== not(bool((if bool(str(input_int('I2'))) then len(str(input_int('I1'))) else input_int('I1'))))) then (if bool(int(input_bool('B1'))) then (str((str(input_bool('B2')) <= input_string('S3'))) === str((int(str(input_bool('B3'))) !== int(not((bool(int(bool(input_string('S3')))) && input_bool('B3'))))))) else bool(input_string('S2'))) else input_bool('B1'))

var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);

function fn57(x4, x11, b1, b32, s52, b23, s25) {
    var b19 = b1;
    var b55 = b1;
    var e3 = "var e2 = \"b1\";eval(e2)";
    var b17;
    if (eval(e3) !== !(eval("eval(\"var x8 = x11; var b7 = !!(eval(\\\"(x4).toString()\\\"));var x12; if (b7) { var s9 = '' + (x8);var l10 = (s9).length; x12 = l10; } else { x12 = x11; }Boolean(x12)\")"))) {
        b17 = true;
    } else {
        b17 = false;
    }
    var x56;
    if (b17) {
        var e20 = "b19";
        var x21 = (eval(e20)) ? 1 : 0;
        var e51 = "var s36 = s25; var e27 = \"eval(\\\"s25\\\")\";var b29 = String(b23); var b30 = eval(\"eval(e27)\");var b40 = b32; var x35 = parseInt(eval(\"var s33 = '' + (b32);s33\"), 10);var x45 = ~~(eval(\"var b37 = Boolean(s36);var b41; if (!!(Number(b37)) && b40) { b41 = true; } else { b41 = false; }var b43; if (b41) { b43 = false; } else { b43 = true; }b43\"));var b46 = false; if (x35 !== x45) { b46 = true; }var s48 = (b46).toString();(String(b29 <= b30) === s48)";
        var x54;
        if ((x21) ? true : false) {
            x54 = eval(e51);
        } else {
            x54 = (s52) ? true : false;
        }
        x56 = x54;
    } else {
        x56 = b55;
    }
    return x56;
}
fn57(input_I2, input_I1, input_B1, input_B3, input_S2, input_B2, input_S3);
