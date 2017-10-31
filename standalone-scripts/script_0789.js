// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I1')) then int(str(len(input_string('S3')))) else len(str((if (not(input_bool('B3')) && not(input_bool('B2'))) then int((str((if input_bool('B3') then not(input_bool('B2')) else bool(str(bool(str(int(bool(input_int('I1'))))))))) === input_string('S3'))) else input_int('I1')))))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);

function fn40(s3, x1, b15, b14) {
    var x17 = x1;
    var s30 = s3;
    var b2 = Boolean(x1);
    var l4 = (s3).length;
    var x6 = Number('' + (l4));
    var x35 = x17;
    var b7 = b14;
    var b9 = b15;
    var e13 = "var b8; if (b7) { b8 = false; } else { b8 = true; }var b10; if (b9) { b10 = false; } else { b10 = true; }var b11 = b8 && b10;b11";
    var x36;
    if (eval(e13)) {
        var s29 = '' + (eval("eval(\"var x26; if (b14) { x26 = !(b15); } else { x26 = Boolean(eval(\\\"var b19 = (eval(\\\\\\\"x17\\\\\\\")) ? true : false;var b22 = Boolean((Number(b19)).toString());var s23 = (b22).toString();s23\\\")); }x26\")"));
        var b31 = s29;
        var b32 = s30;
        var e33 = "b31 === b32";
        var x34 = ~~ (eval(e33));
        x36 = x34;
    } else {
        x36 = x35;
    }
    var l38 = (String(x36)).length;
    return (b2 ? x6 : l38);
}
fn40(input_S3, input_I1, input_B2, input_B3);
