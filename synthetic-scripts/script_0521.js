// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B2') then input_bool('B3') else (not((str(int((input_int('I2') >= input_int('I3')))) >= str(input_bool('B1')))) == (input_bool('B3') || not(bool(input_int('I1')))))) then len(str(input_int('I2'))) else len(input_string('S1')))

var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);

(function (b29, x30, s35, b31, b26, x28, x27) {
    var x32 = x30;
    var l36 = (s35).length;
    var x37;
    if ((function (b1, x17, x6, b16, x5, b11) {
        var b2 = b16;
        var e4 = "eval(\"b2\")";
        var x24;
        if (b1) {
            x24 = eval(e4);
        } else {
            var b15;
            if (('' + (+((x5 >= x6))) >= (b11).toString())) {
                b15 = false;
            } else {
                b15 = true;
            }
            var b20 = b16 || !((x17) ? true : false);
            var b22 = b15 == b20;
            x24 = b22;
        }
        return x24;
    })(b26, x27, x28, b29, x30, b31)) {
        x37 = (String(x32)).length;
    } else {
        x37 = l36;
    }
    return x37;
})(input_B3, input_I2, input_S1, input_B1, input_B2, input_I3, input_I1);
