// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(len((str(bool(int(input_bool('B3')))) + input_string('S1'))))) then str((if input_bool('B1') then input_int('I3') else int(input_string('S2')))) else str((if bool((if bool(int(input_bool('B1'))) then input_int('I3') else int(input_bool('B3')))) then input_bool('B3') else not((input_int('I3') == input_int('I2'))))))

var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");

(function (x30, s6, b13, s15, b1, x14) {
    var b19 = b13;
    var b23 = b1;
    var x22 = x14;
    var e9 = "var e3 = \"Number(b1)\";var b4 = (eval(e3)) ? true : false;var s5 = String(b4);(s5 + s6)";
    var l10 = (eval(e9)).length;
    var b11 = Boolean(l10);
    var x17;
    if (b13) {
        x17 = x14;
    } else {
        x17 = parseInt(s15, 10);
    }
    var x37;
    if (!(b11)) {
        x37 = String(x17);
    } else {
        var b27 = b23;
        var x28 = x22;
        var b21 = Boolean(Number(b19));
        var x25;
        if (b21) {
            x25 = x22;
        } else {
            x25 = Number(b23);
        }
        var b26 = (x25) ? true : false;
        var x35;
        if (b26) {
            x35 = b27;
        } else {
            var e29 = "x28";
            var b31 = eval(e29);
            var b32 = x30;
            var e33 = "b31 == b32";
            var b34 = !(eval(e33));
            x35 = b34;
        }
        var s36 = '' + (x35);
        x37 = s36;
    }
    return x37;
})(input_I2, input_S1, input_B1, input_S2, input_B3, input_I3);
