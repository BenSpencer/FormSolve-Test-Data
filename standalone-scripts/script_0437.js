// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((if input_bool('B2') then bool(replace(str(bool(str(not(not((if ((input_string('S3') > str(int(input_bool('B3')))) != (bool(str((int(input_string('S3')) - len(input_string('S1'))))) && bool(input_int('I2')))) then (str(input_int('I1')) in ['Cira', '5MQv', '', 'jQt', '', 'EC7', 'xus9Y', '']) else not((input_bool('B3') && bool(input_int('I2')))))))))), "ByvH", "tyVf")) else input_bool('B2'))) then 2 else len(str(input_int('I1'))))

var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn59 = function (s40, b1, s37, x41, x39, b38) {
    var x55 = x39;
    var b51 = b1;
    var s48 = String(Boolean(eval("var fn36 = Function('s10', 'b29', 'x24', 's12', 'x18', \"var x30 = x18; var b3 = b29; var s2 = s10; var x4 = (b3) ? 1 : 0;var s5 = '' + (x4);var e6 = \\\"s5\\\";var b8 = s2 > eval(\\\"eval(e6)\\\");var b19 = !!(x18);var b20; if (b19) { var x11 = parseInt(s10, 10);var l13 = (s12).length;x14 = x11; x15 = l13;var s16 = (x14 - x15).toString();var b17 = Boolean(s16); b20 = b17; } else { b20 = false; }var b22; if (b8) { b22 = !b20; } else { b22 = b20; }var s25 = String(x24);var opts27 = ['Cira', '5MQv', '', 'jQt', '', 'EC7', 'xus9Y', ''];var b26 = opts27.indexOf(s25) > -1;var b32; if (!!(x30)) {  b32 = b29; } else { b32 = false; }var b34 = !(b32); return (b22 ? b26 : b34);\"); var b42 = !(fn36(s37, b38, x39, s40, x41));var s45 = (!(eval(\"b42\"))).toString();s45")));
    var s49 = (s48).replace("ByvH", "tyVf");
    var b50 = !! (s49);
    var b54;
    if ((b1 ? b50 : eval("b51"))) {
        b54 = false;
    } else {
        b54 = true;
    }
    var s56 = '' + (x55);
    return (b54 ? 2 : (s56).length);
}
fn59(input_S1, input_B2, input_S3, input_I2, input_I1, input_B3);
