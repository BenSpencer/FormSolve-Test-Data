// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if (if input_bool('B2') then regex-test((if (input_int('I1') < int(input_bool('B2'))) then "" else input_string('S1')), /^(c|T)Sx[A-Z]+$/) else not(bool(int((bool(input_string('S2')) == (input_int('I3') === input_int('I2'))))))) then not(bool(int(input_string('S2')))) else bool(int(input_string('S3')))) then bool(input_string('S1')) else (input_string('S1') in ['', 'mAanh', 'd', 'uFRBJ', 'IVM', 'QN']))

var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);

var fn11 = function (x2, s9, b4) {
    var x6 = Number(eval("b4"));
    var b7 = eval("x2") < x6;
    var x10;
    if (b7) {
        x10 = "";
    } else {
        x10 = s9;
    }
    return x10;
}
var fn45 = function (b1, s13, x19, s34, x18, s16, x12) {
    var s38 = s13;
    var s40 = s13;
    var s29 = s16;
    var b14 = b1;
    var re15 = new RegExp("^(c|T)Sx[A-Z]+$");
    var b17 = (s16) ? true : false;
    var b20 = x18;
    var b21 = x19;
    var b22 = b17 == b20 === b21;
    var e25 = "(b22) | 0";
    var b27 = !( !! (eval(e25)));
    var x28;
    if (b1) {
        x28 = re15.test(fn11(x12, s13, b14));
    } else {
        x28 = b27;
    }
    var b32 = !(Boolean(parseInt(s29, 10)));
    var x37;
    if (x28) {
        x37 = eval("b32");
    } else {
        var x35 = Number(s34);
        x37 = !! (x35);
    }
    var x44;
    if (x37) {
        var b39 = Boolean(s38);
        x44 = b39;
    } else {
        var opts42 = ['', 'mAanh', 'd', 'uFRBJ', 'IVM', 'QN'];
        var b41 = opts42.indexOf(s40) > -1;
        x44 = b41;
    }
    return x44;
}
fn45(input_B2, input_S1, input_I2, input_S3, input_I3, input_S2, input_I1);
