// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if (not(input_bool('B3')) != not((bool(str(input_bool('B2'))) != (str(input_bool('B2')) !== str(len(str(not(not((bool(str(len(input_string('S2')))) || bool(str(bool(int(str(input_int('I2')))))))))))))))) then bool(str(input_bool('B1'))) else input_bool('B1')) then str(input_bool('B2')) else "rvl")

var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);

var fn46 = function (b1, x14, b37, b3, s9) {
    var b43 = b3;
    var b40 = b37;
    var e36 = "var b2; if (b1) { b2 = false; } else { b2 = true; }var b7 = b3; var s8 = String(b7);var l11 = (eval(\"s9\")).length;var s15 = (x14).toString();var s18 = '' + (Boolean(parseInt(s15, 10)));var b20; if (Boolean(s18)) { b20 = true; } else { b20 = Boolean((l11).toString()); }var b23 = !(!(b20));var s24 = String(b23);var e27 = \"eval(\\\"(s24).length\\\")\";var s28 = String(eval(e27));var b29; if (s8 !== s28) { b29 = true; } else { b29 = false; }var b31; if (eval(\"Boolean('' + (b3))\")) { b31 = !b29; } else { b31 = b29; }var b33 = !(b31);var b34 = b2; var b35 = b33;b34 != b35";
    var s38 = (b37).toString();
    var x42;
    if (eval(e36)) {
        x42 = Boolean(s38);
    } else {
        x42 = eval("b40");
    }
    var x45;
    if (x42) {
        var s44 = String(b43);
        x45 = s44;
    } else {
        x45 = "rvl";
    }
    return x45;
}
fn46(input_B3, input_I2, input_B1, input_B2, input_S2);
