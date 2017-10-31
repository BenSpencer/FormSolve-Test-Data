// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then not(not((input_int('I1') == int(str(not(not(input_bool('B1')))))))) else ((if bool(str(len(str(not((input_string('S1') !== input_string('S1'))))))) then (if input_bool('B1') then bool(str(input_int('I1'))) else input_bool('B1')) else (str(input_int('I1')) < str(int(input_string('S3'))))) != bool(input_string('S2'))))

var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");

var fn51 = function (s34, s14, x27, b26, b1, s44) {
    var b4 = b26;
    var x3 = x27;
    var e2 = "b1";
    var e43 = "var x32 = x27; var e18 = \"var s15 = s14; (s14 !== s15)\";var b19; if (eval(e18)) { b19 = false; } else { b19 = true; }var l21 = ((b19).toString()).length;var s24 = (eval(\"eval(\\\"l21\\\")\")).toString();var b25 = Boolean(s24);var b30 = b26; var s28 = String(x27);var x31; if (b26) { x31 = Boolean(s28); } else { x31 = b30; }var x42; if (b25) { x42 = x31; } else { var e41 = \"var s33 = String(x32);var b39 = s33; var b40 = eval(\\\"var s37 = '' + (parseInt(eval(\\\\\\\"s34\\\\\\\"), 10));s37\\\");b39 < b40\"; x42 = eval(e41); }x42";
    var e47 = "eval(\"!!(s44)\")";
    var b48 = false;
    if (eval(e43) != eval(e47)) {
        b48 = true;
    }
    var x50;
    if (eval(e2)) {
        var e11 = "var b5; if (b4) { b5 = false; } else { b5 = true; }var b6 = !(b5);var b9 = x3 == Number('' + (b6));b9";
        var b12;
        if (eval(e11)) {
            b12 = false;
        } else {
            b12 = true;
        }
        var b13 = !(b12);
        x50 = b13;
    } else {
        x50 = b48;
    }
    return x50;
}
fn51(input_S3, input_S1, input_I1, input_B1, input_B3, input_S2);
