// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then input_bool('B2') else regex-test(str((len(str(input_int('I1'))) == (if (if regex-test(input_string('S1'), /^ \r+(ZY|[a-z]Xp)yX JVckq$/) then (str(int(not(bool(str(input_bool('B2')))))) > input_string('S3')) else (input_int('I2') in [0, 0, 5, 0, 0])) then int(input_string('S3')) else int(input_string('S2'))))), /^([0-9]*Q\s|dd)$/))

var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);

(function (s6, x3, s14, b2, x18, b1, s25) {
    var b8 = b2;
    var s4 = (x3).toString();
    var s23 = s14;
    var re7 = new RegExp("^ \\r+(ZY|[a-z]Xp)yX JVckq$");
    var opts20 = [0, 0, 5, 0, 0];
    var b19 = opts20.indexOf(x18) > -1;
    var x22;
    if (re7.test(s6)) {
        var b10 = ((b8).toString()) ? true : false;
        var b11;
        if (b10) {
            b11 = false;
        } else {
            b11 = true;
        }
        var e15 = "s14";
        var b16 = String(~~(b11));
        var b17 = eval(e15);
        x22 = b16 > b17;
    } else {
        x22 = b19;
    }
    var x27;
    if (x22) {
        x27 = parseInt(s23, 10);
    } else {
        x27 = parseInt(s25, 10);
    }
    var b28 = (s4).length;
    var b29 = x27;
    var x32;
    if (b1) {
        x32 = b2;
    } else {
        x32 = ((b28 == b29).toString()).match(/^([0-9]*Q\s|dd)$/) !== null;
    }
    return x32;
})(input_S1, input_I1, input_S3, input_B2, input_I2, input_B3, input_S2);
