// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool((input_int('I2') - int(bool((if ((input_int('I2') === int((input_int('I3') == int(input_bool('B3'))))) != (input_string('S2') === str(input_int('I1')))) then str(input_int('I2')) else input_string('S2')))))) then "8FOjt" else str(int(str(((input_string('S3') in ['Ja8p', 'orp', 'P']) && input_bool('B3'))))))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");

var fn25 = function (x2, s12, b5, x3, x14) {
    var s22 = s12;
    var x20 = x2;
    var b7;
    if (eval("x3") == (b5) | 0) {
        b7 = true;
    } else {
        b7 = false;
    }
    var x9 = Number(b7);
    var b16 = eval("s12");
    var b17 = (x14).toString();
    var b18 = (x2 === x9) != b16 === b17;
    var x24;
    if (b18) {
        x24 = (x20).toString();
    } else {
        x24 = eval("s22");
    }
    return x24;
}(function (x30, b28, s37, s27, x1, x29) {
    var b41 = b28;
    var x26 = x1;
    var e32 = "!!(fn25(x26, s27, b28, x29, x30))";
    var x33 = ~~ (eval(e32));
    var b36 = !! ((x1 - x33));
    var x48;
    if (b36) {
        x48 = "8FOjt";
    } else {
        x48 = String(eval("var opts39 = ['Ja8p', 'orp', 'P'];var b38 = false; for (var idx40 = 0; idx40 < opts39.length; idx40++) { if (opts39[idx40] == s37) { b38 = true; break; } }var b42; if (b38) { b42 = b41; } else { b42 = false; }var s44 = String(b42);Number(s44)"));
    }
    return x48;
})(input_I1, input_B3, input_S3, input_S2, input_I2, input_I3);
