// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if true then (if not(bool(int(input_bool('B3')))) then input_bool('B3') else (if not((int(input_string('S3')) in [1, 95, 8, 0, 0, 97, 1, 178, 0])) then input_bool('B1') else not(input_bool('B3')))) else bool(input_string('S3'))) then "Ub" else str(input_int('I2')))

var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");

(function (x22, b13, s19, b1) {
    var s7 = s19;
    var b14 = b1;
    var b6 = b1;
    var b3 = !! (Number(b1));
    var b5 = !(eval("b3"));
    var x18;
    if (b5) {
        x18 = b6;
    } else {
        var x8 = Number(s7);
        var opts10 = [1, 95, 8, 0, 0, 97, 1, 178, 0];
        var b9 = false;
        for (var idx11 = 0; idx11 < opts10.length; idx11++) {
            if (opts10[idx11] == x8) {
                b9 = true;
                break;
            }
        }
        var b12;
        if (b9) {
            b12 = false;
        } else {
            b12 = true;
        }
        var x17;
        if (b12) {
            x17 = b13;
        } else {
            var e15 = "b14";
            var b16 = !(eval(e15));
            x17 = b16;
        }
        x18 = x17;
    }
    var b20 = Boolean(s19);
    var x21;
    if (true) {
        x21 = x18;
    } else {
        x21 = b20;
    }
    var e24 = "'' + (x22)";
    var x25;
    if (x21) {
        x25 = "Ub";
    } else {
        x25 = eval(e24);
    }
    return x25;
})(input_I2, input_B1, input_S3, input_B3);
