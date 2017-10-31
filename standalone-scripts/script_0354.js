// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(bool(int((if (if (input_bool('B1') === not(bool(str(not((int(input_bool('B3')) < input_int('I1'))))))) then input_bool('B2') else input_bool('B1')) then input_string('S1') else input_string('S3')))))) then 1 else int((if bool((if (input_string('S2') == replace(input_string('S1'), "qLi", "Zoc")) then input_string('S2') else input_string('S2'))) then input_string('S2') else input_string('S1'))))

var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn43 = function (x4, s27, s20, b16, s21, b1, b2) {
    var s28 = s20;
    var b17 = b1;
    var b11 = ((eval("var x3 = (b2) | 0;var b6; if (x3 < eval(\"x4\")) { b6 = true; } else { b6 = false; }var b8 = !(b6);b8")).toString()) ? true : false;
    var b14 = false;
    if (b1 === eval("!(b11)")) {
        b14 = true;
    }
    var x19;
    if (b14) {
        x19 = b16;
    } else {
        x19 = eval("b17");
    }
    var x22;
    if (x19) {
        x22 = s20;
    } else {
        x22 = s21;
    }
    var s25 = ( !! (Number(x22))).toString();
    var b26 = !! (s25);
    var s36 = s27;
    var s38 = s28;
    var s32 = s27;
    var s33 = s27;
    var s29 = (s28).replace("qLi", "Zoc");
    var x34;
    if ((s27 == s29)) {
        x34 = s32;
    } else {
        x34 = s33;
    }
    var b35 = Boolean(x34);
    var x39;
    if (b35) {
        var e37 = "s36";
        x39 = eval(e37);
    } else {
        x39 = s38;
    }
    var x40 = Number(x39);
    var e41 = "x40";
    return (b26 ? 1 : eval(e41));
}
fn43(input_I1, input_S2, input_S1, input_B2, input_S3, input_B1, input_B3);
