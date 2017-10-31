// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(input_bool('B3')) then int(input_string('S1')) else int(str(((if input_bool('B1') then not(input_bool('B1')) else (if bool(int((int(input_bool('B3')) !== 58))) then (not(not(input_bool('B3'))) !== (len(str(len(input_string('S3')))) !== input_int('I2'))) else input_bool('B2'))) !== not((if bool(str(input_bool('B3'))) then (input_bool('B3') == input_bool('B2')) else not(input_bool('B1'))))))))

var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);

function fn52(x22, b1, b43, s3, b28, s18) {
    var b15 = b1;
    var x4 = parseInt(s3, 10);
    var b33 = b15;
    var b5 = b43;
    var b38 = b28;
    var b6 = b5;
    var b7;
    if (b6) {
        b7 = false;
    } else {
        b7 = true;
    }
    var x31;
    if (b5) {
        x31 = b7;
    } else {
        var b8 = b15;
        var x9 = +(b8);
        var b10 = x9 !== 58;
        var e12 = "b10";
        var x13 = Number(eval(e12));
        var l21 = (String((s18).length)).length;
        var b26;
        if (!(!(b15)) !== (l21 !== eval("x22"))) {
            b26 = true;
        } else {
            b26 = false;
        }
        var x30;
        if ((x13) ? true : false) {
            x30 = b26;
        } else {
            var e29 = "b28";
            x30 = eval(e29);
        }
        x31 = x30;
    }
    var e32 = "x31";
    var b36 = b33;
    var b44;
    if (b43) {
        b44 = false;
    } else {
        b44 = true;
    }
    var b46;
    if (( !! ((b33).toString()) ? eval("var e41 = \"(eval(\\\"b36\\\") == b38)\";eval(e41)") : b44)) {
        b46 = false;
    } else {
        b46 = true;
    }
    var b47;
    if (eval(e32) !== b46) {
        b47 = true;
    } else {
        b47 = false;
    }
    var x50 = Number(String(b47));
    return (!(b1) ? x4 : x50);
}
fn52(input_I2, input_B3, input_B1, input_S1, input_B2, input_S3);
