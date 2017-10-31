// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then str((if input_bool('B3') then (input_bool('B1') !== bool(str(bool((input_int('I1') + input_int('I2')))))) else (if input_bool('B3') then not(bool(len(input_string('S2')))) else input_bool('B1')))) else str(input_bool('B1')))

var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);

(function (b1, x4, b18, x5, s14) {
    var b13 = b1;
    var b22 = b18;
    var x24;
    if (b1) {
        var b2 = b13;
        var b3 = b18;
        var x20;
        if (b2) {
            x6 = x4 + x5;
            var b8 = !! (x6);
            var b11 = b3 !== ((b8).toString()) ? true : false;
            x20 = b11;
        } else {
            var x19;
            if (b13) {
                var l15 = (s14).length;
                var b17;
                if (Boolean(l15)) {
                    b17 = false;
                } else {
                    b17 = true;
                }
                x19 = b17;
            } else {
                x19 = b18;
            }
            x20 = x19;
        }
        x24 = '' + (x20);
    } else {
        var s23 = '' + (b22);
        x24 = s23;
    }
    return x24;
})(input_B3, input_I1, input_B1, input_I2, input_S2);
