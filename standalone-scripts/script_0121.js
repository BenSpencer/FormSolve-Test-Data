// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not(bool(int(((if input_bool('B2') then ((input_int('I2') * int(str(bool(int(str(int(input_bool('B3')))))))) * int(input_bool('B3'))) else len(str(bool(input_string('S2'))))) >= input_int('I3'))))) && bool(input_string('S3'))) then input_int('I3') else int(str(int((input_int('I1') === input_int('I1'))))))

var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");

var fn52 = function (x42, s26, x30, s37, b27, x29, b28) {
    var x41 = x30;
    var fn25 = Function('s20', 'b1', 'b16', 'x5', "var e3 = \"var e2 = \\\"b1\\\";eval(e2)\";var b6 = b16; var x8 = ~~(eval(\"b6\"));var x10 = parseInt('' + (x8), 10);var b11 = Boolean(x10);x14 = x5 * parseInt('' + (b11), 10);x18 = x14 * Number(b16);var x24; if (eval(\"eval(e3)\")) { x24 = x18; } else { var s22 = '' + (Boolean(s20)); x24 = (s22).length; } return x24;");
    var x33 = Number((fn25(s26, b27, b28, x29) >= x30));
    var b34 = (x33) ? true : false;
    var e35 = "b34";
    var b36 = !(eval(e35));
    var b39 = b36;
    var b40 = !! (s37);
    var x51;
    if (b39 && b40) {
        x51 = x41;
    } else {
        var x43 = x42;
        var e47 = "eval(\"(x42 === x43)\")";
        var s49 = ((eval(e47)) ? 1 : 0).toString();
        var x50 = parseInt(s49, 10);
        x51 = x50;
    }
    return x51;
}
fn52(input_I1, input_S2, input_I3, input_S3, input_B2, input_I2, input_B3);
