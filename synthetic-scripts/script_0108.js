// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(input_string('S2')) !== int(regex-test(str(bool(input_int('I2'))), /^(MgP|[a-z])+$/))) then (bool((input_int('I1') % 82)) === input_bool('B2')) else not(bool(str(int((if bool(input_string('S2')) then input_bool('B3') else bool(int(bool(input_string('S3'))))))))))

var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);

function fn38(b16, x11, s1, b21, s22, x4) {
    var s19 = s1;
    var e3 = "parseInt(s1, 10)";
    var re7 = new RegExp("^(MgP|[a-z])+$");
    var b9 = eval(e3);
    var b10 = (re7.test(String( !! (x4)))) ? 1 : 0;
    var x37;
    if (b9 !== b10) {
        var e12 = "x11";
        x13 = eval(e12) % 82;
        var b15 = Boolean(x13);
        var b17 = false;
        if (b15 === b16) {
            b17 = true;
        }
        x37 = b17;
    } else {
        var e29 = "var e28 = \"var e27 = \\\"var x25 = +(eval(\\\\\\\"var b23 = (s22) ? true : false;b23\\\\\\\"));var b26 = (x25) ? true : false;b26\\\";eval(e27)\";eval(e28)";
        var x30;
        if ( !! (s19)) {
            x30 = b21;
        } else {
            x30 = eval(e29);
        }
        var e31 = "x30";
        var e33 = "~~(eval(e31))";
        var s34 = String(eval(e33));
        var b35 = Boolean(s34);
        x37 = !(b35);
    }
    return x37;
}
fn38(input_B2, input_I1, input_S2, input_B3, input_S3, input_I2);
