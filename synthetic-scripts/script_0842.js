// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I2')) then (len(str(bool(input_string('S2')))) < input_int('I3')) else bool(str(bool(int(not((if input_bool('B2') then (((str((if true then int(input_bool('B2')) else input_int('I3'))) == input_string('S1')) == input_bool('B2')) === not(input_bool('B1'))) else (if input_bool('B1') then bool(int(input_bool('B1'))) else bool(input_int('I1'))))))))))

var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");

function fn45(b25, s3, x34, x1, b11, x15, s18) {
    var x8 = x15;
    var b13 = b11;
    var b29 = b25;
    var e12 = "b11";
    var x37;
    if (eval(e12)) {
        var b22 = b13;
        var x16;
        if (true) {
            x16 = ~~ (b13);
        } else {
            x16 = x15;
        }
        var e21 = "('' + (x16) == s18)";
        var b23;
        if (eval(e21)) {
            if (b22) {
                b23 = true;
            } else {
                b23 = false;
            }
        } else {
            if (b22) {
                b23 = false;
            } else {
                b23 = true;
            }
        }
        var b26;
        if (b25) {
            b26 = false;
        } else {
            b26 = true;
        }
        var b27 = false;
        if (b23 === b26) {
            b27 = true;
        }
        x37 = b27;
    } else {
        var b31 = b29;
        var e30 = "b29";
        var b33 = (~~(b31)) ? true : false;
        var b35 = Boolean(x34);
        x37 = (eval(e30) ? b33 : b35);
    }
    var x39 = ~~ (!(x37));
    var e42 = "'' + (!!(x39))";
    var x44;
    if ((x1) ? true : false) {
        var e4 = "s3";
        var b5 = (eval(e4)) ? true : false;
        var l7 = ((b5).toString()).length;
        var b9 = false;
        if (l7 < x8) {
            b9 = true;
        }
        x44 = b9;
    } else {
        x44 = Boolean(eval(e42));
    }
    return x44;
}
fn45(input_B1, input_S2, input_I1, input_I2, input_B2, input_I3, input_S1);
