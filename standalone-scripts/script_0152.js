// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B1') != input_bool('B1')) then regex-test(input_string('S2'), /^It.Ny(\s[0-9]*jPr|Um)l$/) else bool(len(str(len((if regex-test(input_string('S2'), /^([a-z]\d+|K)$/) then str(int(input_bool('B3'))) else str(int(not((if (regex-test(str(input_int('I2')), /^([A-Z]*|K\sqFO)$/) !== true) then bool(input_string('S1')) else true))))))))))

var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn36 = Function('x31', 'b15', 's30', 's12', "var e14 = \"(s12).match(/^([a-z]\\\\d+|K)$/) !== null\";var e17 = \"+(b15)\";var fn29 = Function('s26', 'x19', \"var b24 = false; if (eval(\\\"var s21 = '' + (eval(\\\\\\\"x19\\\\\\\"));var re22 = /^([A-Z]*|K\\\\\\\\sqFO)$/;re22.test(s21)\\\") !== true) { b24 = true; }var x28; if (b24) { x28 = Boolean(s26); } else {  x28 = true; } return x28;\"); var b32 = !(fn29(s30, x31));var x35; if (eval(e14)) { x35 = String(eval(e17)); } else { x35 = '' + ((b32) | 0); } return x35;");
(function (b38, s40, s39, b1, x37) {
    var s9 = s40;
    var b4 = b1;
    var e5 = "b4";
    var s42 = '' + ((fn36(x37, b38, s39, s40)).length);
    var l43 = (s42).length;
    var b44 = !! (l43);
    var x45;
    if ((eval("eval(\"b1\")") != eval("eval(e5)"))) {
        var e10 = "s9";
        var re11 = /^It.Ny(\s[0-9]*jPr|Um)l$/;
        x45 = re11.test(eval(e10));
    } else {
        x45 = b44;
    }
    return x45;
})(input_B3, input_S2, input_S1, input_B1, input_I2);
