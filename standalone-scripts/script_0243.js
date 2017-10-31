// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if regex-test(regex-replace(str((bool(int(str(not(bool(str(not(bool(input_string('S2'))))))))) == (not(((input_int('I3') + input_int('I2')) != input_int('I2'))) && input_bool('B1')))), /[a-z](F|\t)amNXl\s\d+wI/, ""), /^(o|[0-9])*$/) then "xmsa" else str((2 < int((bool(input_int('I2')) || bool(input_int('I3')))))))

var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);

var fn48 = function (x12, b20, s1, x13) {
    var x31 = x13;
    var x34 = x12;
    var e3 = "var b2 = Boolean(s1);b2";
    var s5 = (!(eval(e3))).toString();
    var b7 = !! (eval("s5"));
    var x16 = x13;
    x14 = x12;
    x15 = x13;
    var b17 = x14 + x15;
    var b18 = x16;
    var b23 = false;
    if (!(b17 != b18) && eval("var e21 = \"b20\";eval(e21)")) {
        b23 = true;
    }
    var b25;
    if ((Number('' + (!(b7)))) ? true : false) {
        b25 = b23;
    } else {
        b25 = !b23;
    }
    var s27 = (b25).toString();
    var re29 = new RegExp("[a-z](F|\\t)amNXl\\s\\d+wI");
    var x47;
    if (((s27).replace(re29, "")).match(/^(o|[0-9])*$/) !== null) {
        x47 = "xmsa";
    } else {
        x47 = eval("var e44 = \"eval(\\\"var e33 = \\\\\\\"Boolean(x31)\\\\\\\";var b35 = !!(x34);var e36 = \\\\\\\"b35\\\\\\\";'' + ((2 < ((eval(e33) || eval(e36))) | 0))\\\")\";eval(\"eval(e44)\")");
    }
    return x47;
}
fn48(input_I3, input_B1, input_S2, input_I2);
