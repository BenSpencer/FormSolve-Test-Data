// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then (input_int('I3') % int(input_bool('B2'))) else int(((int(str(int(bool(input_string('S3'))))) !== input_int('I3')) || (bool(str((input_string('S2') === str((int(str(int(input_string('S1')))) - input_int('I3')))))) !== input_bool('B1')))))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn38 = function (b30, s17, b1, s8, s18, x13, b3) {
    var x2 = x13;
    var x37;
    if (b1) {
        var e5 = "var x4 = (b3) ? 1 : 0;x4";
        x37 = (x2 % eval(e5));
    } else {
        var x22 = x13;
        var b9 = Boolean(s8);
        var x10 = ~~ (b9);
        var x12 = parseInt(String(x10), 10);
        var e16 = "(x12 !== x13)";
        var x21 = Number('' + (parseInt(s18, 10)));
        x23 = x21;
        x24 = x22;
        var s25 = (x23 - x24).toString();
        var b34 = false;
        if (eval(e16) || (('' + ((s17 === s25))) ? true : false !== eval("b30"))) {
            b34 = true;
        }
        x37 = (b34) | 0;
    }
    return x37;
}
fn38(input_B1, input_S2, input_B3, input_S3, input_S1, input_I3, input_B2);
