// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(bool(input_string('S3')))) then ((if (if input_bool('B2') then input_bool('B1') else regex-test(input_string('S3'), /^(jVdM|P-[a-z]+ATicZ)t\r$/)) then input_bool('B1') else input_bool('B1')) != not(bool(int((if bool(input_int('I1')) then not(input_bool('B2')) else input_bool('B2')))))) else input_bool('B3'))

var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);

function fn35(b33, s1, b17, b16, x18) {
    var s15 = s1;
    var b2 = Boolean(s1);
    var b3 = !(b2);
    var b4;
    if (b3) {
        b4 = false;
    } else {
        b4 = true;
    }
    var b22 = b16;
    var b24 = b22;
    var e21 = "var b19 = (x18) ? true : false;eval(\"b19\")";
    var b23 = !(b22);
    var x27;
    if (eval(e21)) {
        x27 = b23;
    } else {
        var e26 = "var e25 = \"b24\";eval(e25)";
        x27 = eval(e26);
    }
    var x28 = (x27) | 0;
    var b29 = (x28) ? true : false;
    var b31;
    if ((function (s7, b5, b11) {
        var b12 = b11;
        var b6 = b11;
        var x10;
        if (b5) {
            x10 = b6;
        } else {
            var re8 = new RegExp("^(jVdM|P-[a-z]+ATicZ)t\\r$");
            var e9 = "re8.test(s7)";
            x10 = eval(e9);
        }
        var x13;
        if (x10) {
            x13 = b11;
        } else {
            x13 = b12;
        }
        return x13;
    })(s15, b16, b17)) {
        b31 = !! (b29);
    } else {
        b31 = !(b29);
    }
    var x34;
    if (b4) {
        x34 = b31;
    } else {
        x34 = b33;
    }
    return x34;
}
fn35(input_B3, input_S3, input_B1, input_B2, input_I1);
