// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((input_int('I3') === input_int('I2')) !== input_bool('B1')) then "ZXB5" else str((if not(bool(len(str(input_bool('B1'))))) then bool(int((input_string('S3') in ['v', '36', '', 'isX', 'R', '63', 'F', 'Xo', 'BfcJp', 'ox']))) else not(bool((str((input_int('I2') == len(input_string('S1')))) + (if (str(not(bool(len(input_string('S3'))))) <= input_string('S1')) then str(bool(input_string('S1'))) else str(input_int('I2')))))))))

var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn52 = function (x1, s14, s21, b5, x2) {
    var x20 = x2;
    var b8 = b5;
    var b3 = x1;
    var b4 = x2;
    var b6 = b3 === b4 !== b5;
    var x51;
    if (b6) {
        x51 = "ZXB5";
    } else {
        var s27 = s14;
        var b12 = Boolean(eval("((b8).toString()).length"));
        var b13;
        if (b12) {
            b13 = false;
        } else {
            b13 = true;
        }
        var opts16 = ['v', '36', '', 'isX', 'R', '63', 'F', 'Xo', 'BfcJp', 'ox'];
        var b15 = false;
        for (var idx17 = 0; idx17 < opts16.length; idx17++) {
            if (opts16[idx17] == s14) {
                b15 = true;
                break;
            }
        }
        var b19 = (~~(b15)) ? true : false;
        var x42 = x20;
        var s36 = s21;
        var l22 = (s21).length;
        var b23 = x20;
        var b24 = l22;
        var e26 = "'' + (b23 == b24)";
        var s39 = s36;
        var b33 = (eval("eval(\"var e30 = \\\"eval(\\\\\\\"var l28 = (s27).length;l28\\\\\\\")\\\";eval(e30)\")")) ? true : false;
        var b34 = !(b33);
        var b37;
        if ('' + (b34) <= s36) {
            b37 = true;
        } else {
            b37 = false;
        }
        var s41 = '' + (Boolean(s39));
        var x44;
        if (b37) {
            x44 = s41;
        } else {
            x44 = (x42).toString();
        }
        var x45 = eval(e26);
        var x46 = x44;
        var b47 = !! (x45 + x46);
        var s50 = '' + ((b13 ? b19 : !(b47)));
        x51 = s50;
    }
    return x51;
}
fn52(input_I3, input_S3, input_S1, input_B1, input_I2);
