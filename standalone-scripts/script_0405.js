// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if not(bool(str(input_bool('B3')))) then input_bool('B3') else bool(int(bool(input_int('I2'))))) then not(((if input_bool('B2') then input_int('I1') else (if input_bool('B3') then (input_int('I1') % int(input_bool('B1'))) else len(str((int(bool(int(input_string('S3')))) < input_int('I1')))))) >= len(input_string('S3')))) else (str(bool(input_string('S2'))) in ['5aL4', 'pA43o', 'F4', 'X', 'cl']))

var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");

var fn32 = function (b14, x12, b11, s20, b16) {
    var x15 = x12;
    var x24 = x15;
    x18 = x15;
    x19 = ~~ (b16);
    var x21 = parseInt(s20, 10);
    var b22 = (x21) ? true : false;
    var x23 = ~~ (b22);
    var b26 = x23 < eval("x24");
    var s28 = '' + (b26);
    var l29 = (s28).length;
    var x31;
    if (b11) {
        var e13 = "x12";
        x31 = eval(e13);
    } else {
        x31 = (b14 ? x18 % x19 : l29);
    }
    return x31;
}
var fn51 = function (s43, b35, x34, s36, x6, b37, b1) {
    var b33 = b1;
    var b5 = b1;
    var s2 = '' + (b1);
    var b3 = Boolean(s2);
    var x10;
    if (!(b3)) {
        x10 = b5;
    } else {
        var b7 = !! (x6);
        var x8 = (b7) ? 1 : 0;
        var b9 = !! (x8);
        x10 = b9;
    }
    var s38 = s36;
    var s45 = String((s43) ? true : false);
    var e46 = "s45";
    var opts48 = ['5aL4', 'pA43o', 'F4', 'X', 'cl'];
    var b47 = opts48.indexOf(eval(e46)) > -1;
    var x50;
    if (x10) {
        x50 = !((fn32(b33, x34, b35, s36, b37) >= (s38).length));
    } else {
        x50 = b47;
    }
    return x50;
}
fn51(input_S2, input_B2, input_I1, input_S3, input_I2, input_B1, input_B3);
