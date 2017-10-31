// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then (input_string('S2') in ['8z', 'GP3', 'G', 'bC', 'v', '']) else bool((if not((str((input_string('S2') in ['', 'mpwa', 'uDY', 'q', 'FK', 'F', 'jpy', 'C'])) >= (if not(bool(str(bool(input_string('S2'))))) then str(input_bool('B2')) else input_string('S1')))) then (len(str(bool(input_int('I2')))) + input_int('I1')) else -33)))

var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn36 = function (x32, x28, s23, s13, b20) {
    var s8 = s13;
    var opts10 = ['', 'mpwa', 'uDY', 'q', 'FK', 'F', 'jpy', 'C'];
    var b9 = false;
    for (var idx11 = 0; idx11 < opts10.length; idx11++) {
        if (opts10[idx11] == s8) {
            b9 = true;
        }
    }
    var e15 = "var e14 = \"s13\";eval(e14)";
    var b16 = !! (eval(e15));
    var b18 = !! ((b16).toString());
    var e21 = "b20";
    var s22 = String(eval(e21));
    var b25 = String(b9) >= (!(b18) ? s22 : s23);
    var b27 = !(b25);
    var x35;
    if (b27) {
        var b29 = (x28) ? true : false;
        var s30 = String(b29);
        x33 = (s30).length + x32;
        x35 = x33;
    } else {
        x35 = -33;
    }
    return x35;
}(function (x37, b41, x38, b1, s39, s3) {
    var s40 = s3;
    var opts5 = ['8z', 'GP3', 'G', 'bC', 'v', ''];
    var b4 = false;
    for (var idx6 = 0; idx6 < opts5.length; idx6++) {
        if (opts5[idx6] == s3) {
            b4 = true;
            break;
        }
    }
    var e7 = "b4";
    var b42 = !! (fn36(x37, x38, s39, s40, b41));
    return (eval("b1") ? eval(e7) : b42);
})(input_I1, input_B2, input_I2, input_B3, input_S1, input_S2);
