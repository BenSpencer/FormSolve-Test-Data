// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B1') then not((if (bool(input_int('I2')) && not((if not(input_bool('B3')) then input_bool('B3') else input_bool('B1')))) then not(input_bool('B3')) else input_bool('B2'))) else not(bool(input_string('S3')))) then bool(len(str((len(input_string('S3')) < int(input_string('S2')))))) else bool(str(((str(int((input_int('I2') > len(input_string('S3'))))) != str(input_int('I2'))) === bool(input_string('S1'))))))

var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn57 = function (s21, x2, s50, b15, b1, s30, b18) {
    var s27 = s21;
    var s38 = s21;
    var x37 = x2;
    var b10 = b1;
    var x26;
    if (b1) {
        var b5 = b15;
        var b3 = (x2) ? true : false;
        var b13;
        if (eval("b3")) {
            var b8 = b5;
            var e6 = "b5";
            var b7;
            if (eval(e6)) {
                b7 = false;
            } else {
                b7 = true;
            }
            var x11;
            if (b7) {
                var e9 = "b8";
                x11 = eval(e9);
            } else {
                x11 = b10;
            }
            var b12;
            if (x11) {
                b12 = false;
            } else {
                b12 = true;
            }
            b13 = b12;
        } else {
            b13 = false;
        }
        var x19;
        if (b13) {
            var e17 = "!(b15)";
            x19 = eval(e17);
        } else {
            x19 = b18;
        }
        x26 = !(x19);
    } else {
        var b23 = !! (eval("s21"));
        var e25 = "!(b23)";
        x26 = eval(e25);
    }
    var e29 = "var l28 = (s27).length;l28";
    var x31 = parseInt(s30, 10);
    var b32 = false;
    if (eval(e29) < x31) {
        b32 = true;
    }
    var x56;
    if (x26) {
        x56 = ((String(b32)).length) ? true : false;
    } else {
        var b51 = Boolean(s50);
        var b55 = Boolean(((eval("var x45 = x37; var l39 = (s38).length;var b40 = x37; var b41 = l39;var x42 = +(b40 > b41);var s43 = String(x42);var e44 = \"s43\";var s46 = String(x45);var b47 = eval(e44) != s46;b47") === b51)).toString());
        x56 = b55;
    }
    return x56;
}
fn57(input_S3, input_I2, input_S1, input_B3, input_B1, input_S2, input_B2);
