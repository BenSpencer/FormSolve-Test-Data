// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((str((input_bool('B3') !== input_bool('B1'))) > str((bool(int(input_bool('B2'))) && (len(str(input_int('I3'))) < int(not(input_bool('B3')))))))) then input_bool('B3') else (input_int('I2') < int((if input_bool('B2') then bool(input_string('S2')) else true))))

var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn38 = function (b3, b29, x13, s31, b1, x28) {
    var b27 = b1;
    var b7 = b29;
    var b16 = b1;
    var b4 = eval("b1");
    var b5 = b3;
    var e10 = "var e8 = \"b7\";Number(eval(e8))";
    var s14 = '' + (x13);
    var b17 = !(b16);
    var b19 = (s14).length;
    var b20 = (b17) | 0;
    var b21 = eval("!!(eval(e10))") && b19 < b20;
    var b24;
    if ('' + (b4 !== b5) > '' + (b21)) {
        b24 = true;
    } else {
        b24 = false;
    }
    var x37;
    if (!(b24)) {
        x37 = b27;
    } else {
        var e30 = "b29";
        var x33;
        if (eval(e30)) {
            x33 = Boolean(s31);
        } else {
            x33 = true;
        }
        var x34 = Number(x33);
        var b35;
        if (x28 < x34) {
            b35 = true;
        } else {
            b35 = false;
        }
        x37 = b35;
    }
    return x37;
}
fn38(input_B1, input_B2, input_I3, input_S2, input_B3, input_I2);
