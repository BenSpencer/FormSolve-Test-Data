// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then (if bool(str(input_bool('B2'))) then bool(str(input_bool('B2'))) else ((not(bool(str(int(input_string('S1'))))) == bool(input_string('S1'))) !== (bool((if input_bool('B1') then input_int('I1') else input_int('I2'))) === not(not(input_bool('B2')))))) else bool(int((false || (input_bool('B3') == (input_string('S3') >= input_string('S3')))))))

var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);

function fn56(s45, b43, s38, x42, b39, x40, b1) {
    var b41 = b1;
    var fn37 = function (s16, b2, x22, b21, x23) {
        var b28 = b2;
        var b5 = b2;
        var b4 = !! (String(b2));
        var x36;
        if (b4) {
            var e8 = "var s6 = '' + (b5);Boolean(s6)";
            x36 = eval(e8);
        } else {
            x36 = eval("var e20 = \"var s9 = s16; var e10 = \\\"s9\\\";var e13 = \\\"(parseInt(eval(e10), 10)).toString()\\\";var b15; if (Boolean(eval(e13))) { b15 = false; } else { b15 = true; }var b18; if (b15) { if ((s16) ? true : false) { b18 = true; } else { b18 = false; } } else { if ((s16) ? true : false) { b18 = false; } else { b18 = true; } }b18\";var e26 = \"var x25; if (b21) {  x25 = x22; } else {  x25 = eval(\\\"x23\\\"); }x25\";var b27 = !!(eval(e26));var b29; if (b28) { b29 = false; } else { b29 = true; }var b31 = false; if (b27 === !(b29)) { b31 = true; }(eval(e20) !== b31)");
        }
        return x36;
    }
    var e44 = "b43";
    var s46 = s45;
    var b49;
    if (eval(e44) == (s45 >= s46)) {
        b49 = true;
    } else {
        b49 = false;
    }
    var b51 = false;
    if (false || b49) {
        b51 = true;
    }
    var x53 = ~~ (b51);
    var b54 = (x53) ? true : false;
    return (b1 ? fn37(s38, b39, x40, b41, x42) : b54);
}
fn56(input_S3, input_B3, input_S1, input_I2, input_B2, input_I1, input_B1);
