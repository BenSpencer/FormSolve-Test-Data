// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(len(input_string('S1'))) then (int(not((input_int('I1') != int(str(int(not((if bool(replace(str(bool(int(str(input_int('I1'))))), "YM", "PG")) then (input_string('S3') != str(len(str(len(input_string('S1')))))) else not(input_bool('B3')))))))))) === int(bool(len(str(input_int('I1')))))) else false)

var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");

(function (b23, s14, s1, x35) {
    var s15 = s1;
    var e4 = "var b3 = Boolean((s1).length);b3";
    var x43;
    if (eval(e4)) {
        x43 = eval("var x5 = x35; var e33 = \"var x6 = x5; var s7 = (x6).toString();var e9 = \\\"parseInt(s7, 10)\\\";var s11 = String(!!(eval(e9)));var b13 = !!((s11).replace(\\\"YM\\\", \\\"PG\\\"));var x25; if (b13) { var l18 = (((s15).length).toString()).length;var s20 = String(eval(\\\"l18\\\"));var b21; if (s14 != s20) { b21 = true; } else { b21 = false; } x25 = b21; } else { x25 = !(b23); }var x27 = +(!(x25));var s28 = (x27).toString();var x29 = parseInt(s28, 10);var b30; if (x5 != x29) { b30 = true; } else { b30 = false; }var b32 = !(b30);b32\";var b38 = !!((String(x35)).length);var x39 = Number(b38);var b40 = false; if (~~(eval(e33)) === x39) { b40 = true; }b40");
    } else {
        x43 = false;
    }
    return x43;
})(input_B3, input_S3, input_S1, input_I1);
