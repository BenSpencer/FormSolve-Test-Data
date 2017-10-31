// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((if regex-test(str(input_int('I3')), /^(M|[a-z])+$/) then (input_string('S1') == input_string('S3')) else (bool(int(input_bool('B1'))) && not((input_string('S3') == str(int(not(input_bool('B3'))))))))) then (input_int('I1') - (if not(not(bool(input_int('I1')))) then int(input_string('S3')) else int(input_bool('B1')))) else input_int('I3'))

var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);

(function (s15, x1, x27, b16, s6, b12) {
    var s32 = s15;
    var b34 = b12;
    var x39 = x1;
    var s7 = s15;
    var s3 = String(eval("x1"));
    var e5 = "(s3).match(/^(M|[a-z])+$/) !== null";
    var e11 = "var b9 = s6 == eval(\"s7\");b9";
    var x13 = +(b12);
    var b20 = s15;
    var b21 = (+(!(b16))).toString();
    var b23;
    if ((x13) ? true : false && !(b20 == b21)) {
        b23 = true;
    } else {
        b23 = false;
    }
    var x25;
    if (eval(e5)) {
        x25 = eval(e11);
    } else {
        x25 = b23;
    }
    var b26;
    if (x25) {
        b26 = false;
    } else {
        b26 = true;
    }
    var x42;
    if (b26) {
        var x28 = x27;
        var x36;
        if (!(!(Boolean(x28)))) {
            x36 = parseInt(s32, 10);
        } else {
            x36 = ~~ (b34);
        }
        x37 = x27;
        x38 = x36;
        x42 = x37 - x38;
    } else {
        var e40 = "x39";
        x42 = eval("eval(e40)");
    }
    return x42;
})(input_S3, input_I3, input_I1, input_B3, input_S1, input_B1);
