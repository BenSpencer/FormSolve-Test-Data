// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then false else bool((if input_bool('B2') then str((if bool(len(str(not(not(input_bool('B1')))))) then bool(int(not(input_bool('B1')))) else not(regex-test(str((input_string('S1') == str(int(str(int(not(input_bool('B3')))))))), /^(U|[0-9])*$/)))) else "67")))

var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn35 = function (b2, s15, b1, b11) {
    var b17 = b1;
    var x34;
    if (b1) {
        x34 = false;
    } else {
        var e30 = "var b3 = b11; var e5 = \"eval(\\\"b3\\\")\";var b6 = !(eval(e5));var s8 = (!(b6)).toString();var b12; if (b11) { b12 = false; } else { b12 = true; }var x13 = (b12) | 0;var b14 = (x13) ? true : false;var e25 = \"var x21 = parseInt((~~(!(b17))).toString(), 10);var s22 = '' + (x21);(eval(\\\"s15\\\") == s22)\";var b28 = !(((eval(e25)).toString()).match(/^(U|[0-9])*$/) !== null);var x29; if (!!((s8).length)) { x29 = b14; } else { x29 = b28; }x29";
        var x32;
        if (b2) {
            x32 = '' + (eval(e30));
        } else {
            x32 = "67";
        }
        x34 = Boolean(x32);
    }
    return x34;
}
fn35(input_B2, input_S1, input_B3, input_B1);
