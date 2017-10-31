// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_string('S3') == replace(str(not(not((str(not(not((int(input_bool('B2')) === int((if bool(input_int('I3')) then (input_int('I1') == input_int('I2')) else input_bool('B3'))))))) === input_string('S2'))))), "KslB", "")) then input_bool('B1') else input_bool('B1'))

var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn38 = function (x18, b3, b16, x15, x17, b34, s25, s1) {
    var b35 = b34;
    var x4 = ~~ (b3);
    var fn14 = Function('x9', 'b12', 'x5', 'x7', "var b10 = eval(\"x7\") == x9; return (Boolean(x5) ? b10 : b12);");
    var b20 = x4 === ~~(fn14(x15, b16, x17, x18));
    var b22;
    if (b20) {
        b22 = false;
    } else {
        b22 = true;
    }
    var b23 = !(b22);
    var b26;
    if ('' + (b23) === s25) {
        b26 = true;
    } else {
        b26 = false;
    }
    var b28 = !(b26);
    var b29 = !(b28);
    var b32 = eval("s1") == (String(b29)).replace("KslB", "");
    var x37;
    if (b32) {
        x37 = b34;
    } else {
        x37 = eval("b35");
    }
    return x37;
}
fn38(input_I1, input_B2, input_B3, input_I2, input_I3, input_B1, input_S2, input_S3);
