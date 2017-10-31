// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I2') == input_int('I3')) then str(bool(int(not(bool(int(regex-test(input_string('S1'), /^(AiK\w[A-Z]*\tmVxG|\D)$/))))))) else str(bool(str(int((int(str(input_int('I2'))) in [5, -24, 2, 11, 10, 1]))))))

var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn26 = function (x1, s5, x2) {
    var x15 = x1;
    var b13 = !! ((eval("var re6 = /^(AiK\\w[A-Z]*\\tmVxG|\\D)$/;var b10; if (!!((eval(\"re6.test(s5)\")) ? 1 : 0)) { b10 = false; } else { b10 = true; }b10")) | 0);
    var s14 = '' + (b13);
    var s16 = String(x15);
    var x17 = Number(s16);
    var opts19 = [5, -24, 2, 11, 10, 1];
    var s22 = ((opts19.indexOf(x17) > -1) | 0).toString();
    var b23 = (s22) ? true : false;
    var s24 = (b23).toString();
    var x25;
    if ((x1 == x2)) {
        x25 = s14;
    } else {
        x25 = s24;
    }
    return x25;
}
fn26(input_I2, input_S1, input_I3);
