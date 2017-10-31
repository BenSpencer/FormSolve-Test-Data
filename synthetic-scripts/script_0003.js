// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((str(len(str(input_int('I3')))) < str((int((input_string('S2') in ['f', 'nVU', '', '', 'Pc', 'U'])) >= (input_int('I2') % (int(str(int(not((input_int('I3') > input_int('I3')))))) - 0))))) === not(input_bool('B1'))) then bool(int(input_string('S2'))) else false)

var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);

var fn40 = function (b32, x1, x11, s36) {
    var s6 = s36;
    var x12 = x1;
    var e4 = "var s2 = String(x1);(s2).length";
    var b30 = String(eval(e4));
    var b31 = eval("var opts8 = ['f', 'nVU', '', '', 'Pc', 'U'];var x10 = (opts8.indexOf(s6) > -1) ? 1 : 0;x22 = Number(eval(\"var x13 = x12; var b14 = x12 > x13;var x17 = Number(!(b14));var s18 = (x17).toString();var e19 = \\\"s18\\\";eval(e19)\")); x23 = 0;x24 = x11 % x22 - x23;var b26 = x10 >= x24;var s28 = (b26).toString();s28");
    var b34 = b30 < b31;
    var b35 = !(b32);
    var b38 = Boolean(parseInt(s36, 10));
    var x39;
    if (b34 === b35) {
        x39 = b38;
    } else {
        x39 = false;
    }
    return x39;
}
fn40(input_B1, input_I3, input_I2, input_S2);
