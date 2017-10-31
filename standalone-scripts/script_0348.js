// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if false then (str(not(input_bool('B3'))) >= input_string('S3')) else (int(input_string('S3')) > len(str((not(not(input_bool('B1'))) === (input_bool('B2') == (int(input_bool('B2')) > (if (int(input_bool('B3')) > input_int('I3')) then input_int('I3') else int(str(bool(int((bool(str(bool(int(bool(input_string('S3')))))) === (not(input_bool('B2')) !== (str(input_int('I3')) === "2qGg")))))))))))))))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn57 = function (b13, x19, s24, b10, b1) {
    var b17 = b1;
    var s4 = s24;
    var b2 = !(b1);
    var s3 = (b2).toString();
    var b6;
    if (s3 >= eval("s4")) {
        b6 = true;
    } else {
        b6 = false;
    }
    var x56;
    if (false) {
        x56 = b6;
    } else {
        var s8 = s24;
        var b12;
        if (!(b10)) {
            b12 = false;
        } else {
            b12 = true;
        }
        var b15 = b13;
        var e14 = "b13";
        var b31 = b15;
        var x23 = x19;
        var x33 = x19;
        var e20 = "x19";
        var b21 = (b17) ? 1 : 0 > eval(e20);
        var e25 = "s24";
        var b26 = (eval(e25)) ? true : false;
        var x27 = (b26) ? 1 : 0;
        var b28 = Boolean(x27);
        var b32;
        if (b31) {
            b32 = false;
        } else {
            b32 = true;
        }
        var s34 = String(x33);
        var b35 = s34 === "2qGg";
        var b37 = b32 !== b35;
        var b39 = (String(b28)) ? true : false === b37;
        var x41 = Number(b39);
        var b42 = (x41) ? true : false;
        var b46 = Number(b15);
        var b47 = (b21 ? x23 : parseInt((b42).toString(), 10));
        var b48 = eval(e14) == b46 > b47;
        var b50 = false;
        if (b12 === b48) {
            b50 = true;
        }
        var s52 = String(b50);
        var b54 = Number(s8);
        var b55 = (s52).length;
        x56 = b54 > b55;
    }
    return x56;
}
fn57(input_B2, input_I3, input_S3, input_B1, input_B3);
