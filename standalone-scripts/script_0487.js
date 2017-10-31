// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then (input_int('I3') >= int((if input_bool('B1') then (input_bool('B1') || not(bool(len(str(input_bool('B3')))))) else (int(input_bool('B3')) === input_int('I3'))))) else (str(int(bool(input_int('I1')))) > str(input_int('I1'))))

var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn34 = function (b5, x18, b1, x25) {
    var b16 = b1;
    var e3 = "eval(\"b1\")";
    var x4 = x18;
    var b8 = b16;
    var b6 = b5;
    var e7 = "b6";
    var e12 = "var b11 = (((b8).toString()).length) ? true : false;b11";
    var b13 = !(eval(e12));
    var b14 = eval(e7);
    var b15 = b13;
    var x21;
    if (b5) {
        x21 = b14 || b15;
    } else {
        var b19 = false;
        if (+(b16) === x18) {
            b19 = true;
        }
        x21 = b19;
    }
    var x22 = ~~ (x21);
    var b23;
    if (x4 >= x22) {
        b23 = true;
    } else {
        b23 = false;
    }
    var x29 = x25;
    var s28 = '' + (~~(Boolean(x25)));
    var s30 = '' + (x29);
    var b31 = s28;
    var b32 = s30;
    var x33;
    if (eval(e3)) {
        x33 = b23;
    } else {
        x33 = b31 > b32;
    }
    return x33;
}
fn34(input_B1, input_I3, input_B3, input_I1);
