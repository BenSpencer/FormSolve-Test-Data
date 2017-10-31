// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(input_string('S1'))) then "" else str(int((str(not((str(not((input_string('S1') !== str((if bool(len(str((if input_bool('B2') then (8 != int(str(input_bool('B1')))) else input_bool('B1'))))) then true else not(((if input_bool('B2') then input_bool('B2') else (int(input_bool('B1')) >= int(not(input_bool('B2'))))) && not(bool(input_string('S2')))))))))) !== str(input_bool('B1'))))) != str(bool(input_int('I2')))))))

var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn61 = function (x52, b17, b12, s1, s29) {
    var s4 = s1;
    var x2 = Number(s1);
    var b3 = (x2) ? true : false;
    var e51 = "var s50 = (eval(\"var e48 = \\\"eval(\\\\\\\"var b41 = b12; var b5 = b17; var b20 = b12; var b6 = b12; var e7 = \\\\\\\\\\\\\\\"b6\\\\\\\\\\\\\\\";var x9 = Number((eval(e7)).toString());var b10 = 8; var b11 = x9;var x13; if (b5) { x13 = b10 != b11; } else {  x13 = b12; }var l15 = (String(x13)).length;var x35; if (Boolean(l15)) {  x35 = true; } else { var b18 = b17; var b22 = b17; var x24 = +(!(b22));var b25 = false; if ((b20) | 0 >= x24) { b25 = true; }var e27 = \\\\\\\\\\\\\\\"b25\\\\\\\\\\\\\\\";var x28; if (b17) { var e19 = \\\\\\\\\\\\\\\"b18\\\\\\\\\\\\\\\"; x28 = eval(e19); } else { x28 = eval(e27); }var b31; if (!!(s29)) { b31 = false; } else { b31 = true; } x35 = !((x28 && b31)); }var s36 = '' + (x35);var b37 = s4 !== s36;var b39 = !(b37);var b44 = '' + (b39); var b45 = eval(\\\\\\\\\\\\\\\"'' + (b41)\\\\\\\\\\\\\\\");var b46 = !(b44 !== b45);b46\\\\\\\")\\\";eval(e48)\")).toString();s50";
    var e53 = "x52";
    var b54 = !! (eval(e53));
    var b56 = eval(e51);
    var b57 = String(b54);
    var x58 = ~~ (b56 != b57);
    var s59 = '' + (x58);
    var x60;
    if (b3) {
        x60 = "";
    } else {
        x60 = s59;
    }
    return x60;
}
fn61(input_I2, input_B2, input_B1, input_S1, input_S2);
