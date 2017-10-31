// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S1')) then (input_string('S1') === (str(bool(int(not((false && not((input_int('I2') === int(not((if (bool(input_string('S2')) != not((input_string('S1') >= "jcah"))) then bool(str(bool((input_int('I3') / int(input_string('S1')))))) else bool(int(input_bool('B2'))))))))))))) + input_string('S2'))) else bool(int(not((len(str((input_bool('B1') !== bool(input_int('I2'))))) in [1, 25, 0, 1, 1, 0, 68])))))

var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");

function fn59(s39, s1, b22, x4, x14, b44) {
    var x45 = x4;
    var s15 = s1;
    var x58;
    if ( !! (s1)) {
        var s3 = s15;
        var s5 = s39;
        var s7 = s15;
        var e8 = "s7";
        var b9 = eval(e8);
        var b10 = "jcah";
        var b11 = !(b9 >= b10);
        var b12 = (s5) ? true : false;
        var b13 = b11;
        var x27;
        if (b12 != b13) {
            var x16 = parseInt(s15, 10);
            var s20 = (((x14 / x16)) ? true : false).toString();
            x27 = (s20) ? true : false;
        } else {
            var e23 = "b22";
            var x24 = ~~ (eval(e23));
            x27 = (eval("x24")) ? true : false;
        }
        var x29 = ~~ (!(x27));
        var b30 = false;
        if (x4 === x29) {
            b30 = true;
        }
        var b32 = !(b30);
        var b33;
        if (b32) {
            b33 = false;
        } else {
            b33 = false;
        }
        var b35;
        if (b33) {
            b35 = false;
        } else {
            b35 = true;
        }
        var x36 = ~~ (b35);
        var b37 = !! (x36);
        var x40 = '' + (b37);
        var x41 = s39;
        var b42;
        if (s3 === x40 + x41) {
            b42 = true;
        } else {
            b42 = false;
        }
        x58 = b42;
    } else {
        var b46 = (x45) ? true : false;
        var b47 = b44 !== b46;
        var s49 = String(b47);
        var l50 = (s49).length;
        var opts52 = [1, 25, 0, 1, 1, 0, 68];
        var b51 = false;
        for (var idx53 = 0; idx53 < opts52.length; idx53++) {
            if (opts52[idx53] == l50) {
                b51 = true;
                break;
            }
        }
        var e54 = "b51";
        var b55;
        if (eval(e54)) {
            b55 = false;
        } else {
            b55 = true;
        }
        var x56 = (b55) ? 1 : 0;
        x58 = Boolean(x56);
    }
    return x58;
}
fn59(input_S2, input_S1, input_B2, input_I2, input_I3, input_B1);
