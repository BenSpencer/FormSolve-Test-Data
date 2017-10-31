// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(int(str(int(input_string('S1')))))) then bool((if not((int(input_string('S2')) !== int(input_bool('B1')))) then int((if not(not((input_bool('B3') !== not(not(input_bool('B3')))))) then (input_bool('B3') == input_bool('B3')) else bool(input_int('I3')))) else int(input_string('S2')))) else input_bool('B3'))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");

function fn42(s1, x33, s36, b9, b34) {
    var b40 = b34;
    var b5 = Boolean(parseInt('' + (parseInt(s1, 10)), 10));
    var b6;
    if (b5) {
        b6 = false;
    } else {
        b6 = true;
    }
    var x41;
    if (b6) {
        var s7 = s36;
        var e16 = "var x8 = Number(s7);var e11 = \"eval(\\\"b9\\\")\";var x12 = +(eval(e11));var b13 = false; if (x8 !== x12) { b13 = true; }var b15 = !(b13);b15";

        function fn32(x29, b17) {
            var b25 = b17;
            var b18 = b17;
            var b19;
            if (b18) {
                b19 = false;
            } else {
                b19 = true;
            }
            var b21 = false;
            if (b17 !== !(b19)) {
                b21 = true;
            }
            var b23;
            if (b21) {
                b23 = false;
            } else {
                b23 = true;
            }
            var x31;
            if (!(b23)) {
                var b26 = b25;
                var b27;
                if (b25) {
                    b27 = b26;
                } else {
                    b27 = !b26;
                }
                x31 = b27;
            } else {
                x31 = (x29) ? true : false;
            }
            return x31;
        }
        var x37 = parseInt(s36, 10);
        var x38;
        if (eval(e16)) {
            x38 = +(fn32(x33, b34));
        } else {
            x38 = x37;
        }
        x41 = Boolean(x38);
    } else {
        x41 = b40;
    }
    return x41;
}
fn42(input_S1, input_I3, input_S2, input_B1, input_B3);
