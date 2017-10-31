// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(((int(((int(input_string('S1')) + input_int('I2')) === input_int('I3'))) < len(input_string('S2'))) && not((input_int('I3') >= int(bool(str(int((input_string('S3') !== str(not(bool(input_int('I2'))))))))))))) == input_string('S3')) then not(input_bool('B3')) else not(regex-test(str((str(input_int('I2')) in ['m', 'l3x', 'b4I', 'ET'])), /^(MPWM|E\d[a-z]+)$/)))

var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");

var fn54 = function (x17, s18, x20, s12, s1, b41) {
    var x43 = x20;
    var s38 = s18;
    var x5 = x20;
    var x8 = x17;
    var e19 = "s18";
    var b23;
    if (eval("!!(x20)")) {
        b23 = false;
    } else {
        b23 = true;
    }
    var s24 = String(b23);
    var b25 = eval(e19) !== s24;
    var x27 = ~~ (b25);
    var b31 = false;
    if (x17 >= (Boolean((x27).toString())) ? 1 : 0) {
        b31 = true;
    }
    var b33 = !(b31);
    var s36 = '' + ((eval("x6 = Number(eval(\"eval(\\\"s1\\\")\")); x7 = x5;var b9 = x6 + x7 === x8;var x11 = ~~(b9);var b14 = x11 < (s12).length;b14") && b33));
    var e37 = "s36";
    var b39 = eval(e37);
    var b40 = s38;
    var x53;
    if (b39 == b40) {
        var b42;
        if (b41) {
            b42 = false;
        } else {
            b42 = true;
        }
        x53 = b42;
    } else {
        var e49 = "var opts47 = ['m', 'l3x', 'b4I', 'ET'];var b46 = false; for (var idx48 = 0; idx48 < opts47.length; idx48++) { if (opts47[idx48] == String(eval(\"x43\"))) { b46 = true; break; } }b46";
        x53 = !((String(eval(e49))).match(/^(MPWM|E\d[a-z]+)$/) !== null);
    }
    return x53;
}
fn54(input_I3, input_S3, input_I2, input_S2, input_S1, input_B3);
