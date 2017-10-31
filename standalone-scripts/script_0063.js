// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int((if (input_int('I2') !== int((input_bool('B2') != bool(input_int('I1'))))) then bool(int((int(input_string('S1')) > int(input_string('S1'))))) else bool(int(bool(input_int('I1'))))))) then input_bool('B3') else ((input_int('I1') - int(input_string('S1'))) != -54))

var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn40 = function (x22, x1, b29, s12, b2) {
    var x30 = x22;
    var s31 = s12;
    var x3 = x22;
    var b7 = b2 != eval("var e4 = \"x3\";!!(eval(e4))");
    var x9 = (b7) | 0;
    var b10;
    if (x1 !== x9) {
        b10 = true;
    } else {
        b10 = false;
    }
    var b23 = (x22) ? true : false;
    var x24 = Number(b23);
    var x26;
    if (b10) {
        var e21 = "var s14 = s12; var x13 = Number(s12);var b16 = x13; var b17 = Number(s14);var x18 = (b16 > b17) | 0;var b19 = !!(x18);var e20 = \"b19\";eval(e20)";
        x26 = eval(e21);
    } else {
        x26 = !! (x24);
    }
    var b28 = !! (Number(x26));
    var x39;
    if (b28) {
        x39 = b29;
    } else {
        var e34 = "eval(\"Number(s31)\")";
        x39 = ((x30 - eval(e34)) != -54);
    }
    return x39;
}
fn40(input_I1, input_I2, input_B3, input_S1, input_B2);
