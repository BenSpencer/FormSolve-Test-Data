// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S1')) then (63 / len(str(int(not(bool(str(not((bool(str(bool(str((true && input_bool('B3')))))) && input_bool('B1')))))))))) else -45)

var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);

(function (b3, b13, s1) {
    var x28;
    if ((s1) ? true : false) {
        var e21 = "var e19 = \"var b12 = Boolean((eval(\\\"var s8 = String(eval(\\\\\\\"var b5; if (true) { var e4 = \\\\\\\\\\\\\\\"b3\\\\\\\\\\\\\\\"; b5 = eval(e4); } else { b5 = false; }b5\\\\\\\"));Boolean(s8)\\\")).toString());var b14 = false; if (b12 && b13) { b14 = true; }var b16; if (b14) { b16 = false; } else { b16 = true; }var s17 = String(b16);var b18 = (s17) ? true : false;b18\";var e20 = \"eval(e19)\";eval(e20)";
        var b22 = !(eval(e21));
        var s24 = (+(b22)).toString();
        x26 = 63 / (s24).length;
        x28 = x26;
    } else {
        x28 = -45;
    }
    return x28;
})(input_B3, input_B1, input_S1);
