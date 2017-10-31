// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(not(input_bool('B2')))) then (str(int(bool(str(int(input_bool('B1')))))) <= str((if bool(str(input_bool('B2'))) then true else input_bool('B3')))) else ((str(int(str(bool(input_string('S3'))))) != (input_string('S1') + str(int(input_bool('B1'))))) != not(input_bool('B3'))))

var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);

(function (b1, s35, s26, b20, b36) {
    var b45 = b20;
    var b7 = b36;
    var b14 = b1;
    var e4 = "var e3 = \"var b2; if (b1) { b2 = false; } else { b2 = true; }b2\";eval(e3)";
    var x49;
    if (!(!(eval(e4)))) {
        var x22;
        if (eval("Boolean(eval(\"String(eval(\\\"b14\\\"))\"))")) {
            x22 = true;
        } else {
            x22 = eval("b20");
        }
        var b24 = false;
        if (((eval("var x8 = (b7) ? 1 : 0;var s9 = '' + (x8);Boolean(s9)")) ? 1 : 0).toString() <= (x22).toString()) {
            b24 = true;
        }
        x49 = b24;
    } else {
        var e34 = "var s30 = (eval(\"var e28 = \\\"var b27 = !!(s26);b27\\\";eval(e28)\")).toString();var s32 = '' + (Number(s30));eval(\"s32\")";
        var b43;
        if (eval(e34) != eval("eval(\"var x37 = (b36) | 0;var x39 = s35; var x40 = String(x37);x39 + x40\")")) {
            b43 = true;
        } else {
            b43 = false;
        }
        var b46;
        if (b45) {
            b46 = false;
        } else {
            b46 = true;
        }
        var b47;
        if (b43) {
            if (b46) {
                b47 = false;
            } else {
                b47 = true;
            }
        } else {
            if (b46) {
                b47 = true;
            } else {
                b47 = false;
            }
        }
        x49 = b47;
    }
    return x49;
})(input_B2, input_S1, input_S3, input_B3, input_B1);
