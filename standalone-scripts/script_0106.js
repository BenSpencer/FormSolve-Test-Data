// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((bool((if (bool((if input_bool('B3') then input_string('S3') else input_string('S2'))) == bool(int(input_string('S1')))) then str(len(input_string('S3'))) else input_string('S3'))) || input_bool('B1'))) then 68 else int(("7Hs" > (if ((input_bool('B1') || not(input_bool('B2'))) || input_bool('B3')) then input_string('S1') else str(input_int('I3'))))))

var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);

var fn19 = function (s5, s8, s13, b1) {
    var s17 = s13;
    var s3 = s13;
    var e2 = "b1";
    var x6;
    if (eval(e2)) {
        x6 = eval("s3");
    } else {
        x6 = s5;
    }
    var b7 = Boolean(x6);
    var x9 = Number(s8);
    var b11 = false;
    if (b7 == !! (x9)) {
        b11 = true;
    }
    var x18;
    if (b11) {
        var l14 = (s13).length;
        var s15 = '' + (l14);
        x18 = eval("s15");
    } else {
        x18 = s17;
    }
    return x18;
}(function (x42, s21, b23, s22, b32, s20, b26) {
    var b31 = b26;
    var b36 = b23;
    var s41 = s21;
    var e25 = "!!(fn19(s20, s21, s22, b23))";
    var b28 = false;
    if (eval(e25) || eval("b26")) {
        b28 = true;
    }
    var b30;
    if (b28) {
        b30 = false;
    } else {
        b30 = true;
    }
    var x49;
    if (b30) {
        x49 = 68;
    } else {
        var b33;
        if (b32) {
            b33 = false;
        } else {
            b33 = true;
        }
        var b34 = false;
        if (b31 || b33) {
            b34 = true;
        }
        var e38 = "var e37 = \"b36\";eval(e37)";
        var b39;
        if (b34 || eval(e38)) {
            b39 = true;
        } else {
            b39 = false;
        }
        var b45;
        if ("7Hs" > (b39 ? s41 : '' + (x42))) {
            b45 = true;
        } else {
            b45 = false;
        }
        var x47 = +(b45);
        x49 = eval("x47");
    }
    return x49;
})(input_I3, input_S1, input_B3, input_S3, input_B2, input_S2, input_B1);
