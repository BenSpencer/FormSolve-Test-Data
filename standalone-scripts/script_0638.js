// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((len(input_string('S3')) >= len(str((if (input_bool('B2') == (bool(str(input_bool('B2'))) === (input_bool('B2') && false))) then (if input_bool('B1') then false else bool((if input_bool('B2') then 56 else int((int(input_string('S1')) >= len(input_string('S3'))))))) else input_bool('B3'))))) != not(bool(str(input_bool('B1'))))) then bool(input_string('S3')) else input_bool('B2'))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn52 = function (b17, s1, b31, s19, b18) {
    var s45 = s1;
    var b49 = b18;
    var b37 = b17;
    var s23 = s1;
    var e2 = "s1";
    var b4 = b18;
    var b5 = b4;
    var x30;
    if (b17) {
        x30 = false;
    } else {
        var e20 = "s19";
        var b25;
        if (eval("parseInt(eval(e20), 10)") >= (s23).length) {
            b25 = true;
        } else {
            b25 = false;
        }
        var x28;
        if (b18) {
            x28 = 56;
        } else {
            x28 = ~~ (b25);
        }
        x30 = Boolean(x28);
    }
    var x32;
    if ((b4 == eval("var b8 = b5; var b7 = !!((b5).toString());var b10 = eval(\"b8\") && false;(b7 === b10)"))) {
        x32 = x30;
    } else {
        x32 = b31;
    }
    var b35 = (eval(e2)).length >= ('' + (x32)).length;
    var s40 = String(eval("eval(\"b37\")"));
    var b42 = !(Boolean(s40));
    var b43;
    if (b35 != b42) {
        b43 = true;
    } else {
        b43 = false;
    }
    var e48 = "var e47 = \"(s45) ? true : false\";eval(e47)";
    var x51;
    if (b43) {
        x51 = eval(e48);
    } else {
        var e50 = "b49";
        x51 = eval(e50);
    }
    return x51;
}
fn52(input_B1, input_S3, input_B3, input_S1, input_B2);
