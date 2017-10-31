// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then (bool(input_string('S2')) != input_bool('B2')) else bool(len((if (input_string('S2') > str(bool(len(input_string('S3'))))) then str(int(str(bool(input_string('S3'))))) else str(input_bool('B3'))))))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn28 = function (b22, s16, s1, b4) {
    var s8 = s1;
    var e2 = "s1";
    var b6 = !! (eval(e2)) != eval("b4");
    var s9 = s16;
    var l10 = (s9).length;
    var b12 = !! (eval("l10"));
    var b14;
    if (s8 > String(b12)) {
        b14 = true;
    } else {
        b14 = false;
    }
    var x24;
    if (b14) {
        var e18 = "!!(s16)";
        var s19 = String(eval(e18));
        var x20 = parseInt(s19, 10);
        var s21 = String(x20);
        x24 = s21;
    } else {
        x24 = '' + (b22);
    }
    var b26 = ((x24).length) ? true : false;
    var x27;
    if (true) {
        x27 = b6;
    } else {
        x27 = b26;
    }
    return x27;
}
fn28(input_B3, input_S3, input_S2, input_B2);
