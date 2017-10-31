// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if false then input_bool('B3') else regex-test(str((input_int('I2') >= (int((if (str(input_int('I3')) in ['iQRxz', 'BK', '', 'uho4A', '3XZs4']) then (input_bool('B2') != input_bool('B3')) else (str(bool(len(str(input_int('I1'))))) < input_string('S2')))) - int((str(input_int('I3')) >= str(len(input_string('S2')))))))), /^(nD\W*\tZUY|[A-Z])$/))

var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);

var fn44 = function (x16, b1, x3, x27, b9, s22) {
    var b11 = b1;
    var e2 = "b1";
    var s30 = s22;
    var x4 = x27;
    var s5 = (x4).toString();
    var opts7 = ['iQRxz', 'BK', '', 'uho4A', '3XZs4'];
    var b6 = false;
    for (var idx8 = 0; idx8 < opts7.length; idx8++) {
        if (opts7[idx8] == s5) {
            b6 = true;
        }
    }
    var e10 = "b9";
    var e13 = "eval(\"b11\")";
    var b14;
    if (eval(e10) != eval(e13)) {
        b14 = true;
    } else {
        b14 = false;
    }
    var s17 = (x16).toString();
    var l18 = (s17).length;
    var b19 = !! (l18);
    var s20 = String(b19);
    var b23 = eval("s20") < s22;
    var x25;
    if (b6) {
        x25 = b14;
    } else {
        x25 = b23;
    }
    var x26 = ~~ (x25);
    var e29 = "var s28 = '' + (x27);s28";
    var l31 = (s30).length;
    var s32 = String(l31);
    var e33 = "s32";
    x37 = x26 - ~~((eval(e29) >= eval(e33)));
    var b39;
    if (x3 >= x37) {
        b39 = true;
    } else {
        b39 = false;
    }
    return (false ? eval(e2) : ((b39).toString()).match(/^(nD\W*\tZUY|[A-Z])$/) !== null);
}
fn44(input_I1, input_B3, input_I2, input_I3, input_B2, input_S2);
