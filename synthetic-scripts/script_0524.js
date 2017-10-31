// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((if (input_bool('B2') || input_bool('B3')) then int(input_string('S3')) else input_int('I1')) == int(input_bool('B1'))) then (8 > input_int('I3')) else (int(str(input_int('I2'))) > int(not(not(((input_int('I1') / len(replace(str(bool(int(str(not((input_bool('B1') !== input_bool('B3'))))))), "6iy", "ScbW"))) in [0, 0, 1, 1, 8, 1, 66]))))))

var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn46 = function (b22, x21, s5, x18, x14, b2, b1) {
    var b9 = b22;
    var x7 = x21;
    var b23 = b2;
    var b3 = b1;
    var b4 = b2;
    var x8;
    if (b3 || b4) {
        x8 = parseInt(s5, 10);
    } else {
        x8 = x7;
    }
    var x10 = ~~ (b9);
    var e11 = "x10";
    var x45;
    if ((x8 == eval(e11))) {
        x45 = (8 > eval("x14"));
    } else {
        var s27 = '' + (!((b22 !== b23)));
        var x28 = Number(s27);
        var l32 = ((((x28) ? true : false).toString()).replace("6iy", "ScbW")).length;
        var opts36 = [0, 0, 1, 1, 8, 1, 66];
        var b35 = opts36.indexOf((x21 / l32)) > -1;
        var e38 = "b35";
        var b39 = !(eval(e38));
        var e42 = "Number(!(b39))";
        var b43;
        if (parseInt('' + (x18), 10) > eval(e42)) {
            b43 = true;
        } else {
            b43 = false;
        }
        x45 = b43;
    }
    return x45;
}
fn46(input_B1, input_I1, input_S3, input_I2, input_I3, input_B3, input_B2);
