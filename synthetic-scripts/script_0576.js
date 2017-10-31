// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then int((not(not(not(bool(input_int('I2'))))) === input_bool('B1'))) else int((int(not(input_bool('B1'))) < int((input_bool('B2') === not(not((int(input_bool('B3')) !== (len(str(int(str(((if input_bool('B1') then not(input_bool('B2')) else bool(input_string('S1'))) === (input_int('I3') in [-15, 1, 0, 0, 81, 74, -36, 1, 47])))))) - input_int('I3'))))))))))

var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn52 = function (b18, x2, x27, b13, s24, b1) {
    var b9 = b13;
    var b17 = b1;
    var b3 = Boolean(x2);
    var e5 = "eval(\"b3\")";
    var b7;
    if (!(eval(e5))) {
        b7 = false;
    } else {
        b7 = true;
    }
    var b8;
    if (b7) {
        b8 = false;
    } else {
        b8 = true;
    }
    var b10;
    if (b8 === b9) {
        b10 = true;
    } else {
        b10 = false;
    }
    var x12 = (b10) ? 1 : 0;
    var x51;
    if (b1) {
        x51 = x12;
    } else {
        var b20 = b13;
        var e14 = "b13";
        var x16 = (!(eval(e14))) | 0;
        var b22 = b17;
        var x38 = x27;
        var e36 = "var b23; if (b22) { b23 = false; } else { b23 = true; }var b25 = !!(s24);var opts29 = [-15, 1, 0, 0, 81, 74, -36, 1, 47];var b28 = false; for (var idx30 = 0; idx30 < opts29.length; idx30++) { if (opts29[idx30] == x27) { b28 = true; break; } }var s33 = String(((eval(\"b20\") ? b23 : b25) === b28));var x34 = Number(s33);(x34).toString()";
        var l37 = (eval(e36)).length;
        x39 = l37 - x38;
        var b43 = !(((b18) | 0 !== x39));
        var b44;
        if (b43) {
            b44 = false;
        } else {
            b44 = true;
        }
        var x47 = ((b17 === b44)) ? 1 : 0;
        var b48;
        if (x16 < x47) {
            b48 = true;
        } else {
            b48 = false;
        }
        var x50 = ~~ (b48);
        x51 = x50;
    }
    return x51;
}
fn52(input_B3, input_I2, input_I3, input_B1, input_S1, input_B2);
