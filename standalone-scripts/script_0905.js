// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if ((int((bool(input_int('I2')) || input_bool('B2'))) + input_int('I3')) in [31, -65, 0, 0, 0]) then (input_bool('B3') !== (if (input_int('I3') < int(input_bool('B2'))) then input_bool('B2') else true)) else bool(str(input_int('I2')))) then len(str(not((input_string('S2') in ['', 'QPVJg', 'dL', 'puS', '', 'CaBx', 'tuMP'])))) else int(input_string('S1')))

var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);

var fn40 = function (s36, b14, x1, s28, b16, x15) {
    var x24 = x1;
    var b4 = b16;
    var x8 = x15;
    var e2 = "x1";
    var b5;
    if (Boolean(eval(e2))) {
        b5 = true;
    } else {
        b5 = b4;
    }
    x9 = (b5) | 0 + x8;
    var opts12 = [31, -65, 0, 0, 0];
    var b11 = false;
    for (var idx13 = 0; idx13 < opts12.length; idx13++) {
        if (opts12[idx13] == x9) {
            b11 = true;
            break;
        }
    }
    var x27;
    if (b11) {
        var b20 = b16;
        var x17 = Number(b16);
        var b18 = x15 < x17;
        var x21;
        if (b18) {
            x21 = b20;
        } else {
            x21 = true;
        }
        x27 = (b14 !== x21);
    } else {
        var s25 = (x24).toString();
        var b26 = (s25) ? true : false;
        x27 = b26;
    }
    var e38 = "var x37 = parseInt(s36, 10);x37";
    var x39;
    if (x27) {
        var e34 = "var opts30 = ['', 'QPVJg', 'dL', 'puS', '', 'CaBx', 'tuMP'];var b29 = false; for (var idx31 = 0; idx31 < opts30.length; idx31++) { if (opts30[idx31] == s28) { b29 = true; break; } }var b32 = !(b29);'' + (b32)";
        var l35 = (eval(e34)).length;
        x39 = l35;
    } else {
        x39 = eval(e38);
    }
    return x39;
}
fn40(input_S1, input_B3, input_I2, input_S2, input_B2, input_I3);
