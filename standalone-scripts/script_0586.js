// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B1') === ((len((if not((((input_int('I1') * input_int('I3')) / int(not(bool(int((input_int('I3') !== (len(str(bool(input_string('S1')))) % input_int('I3')))))))) in [4, 141, 6, 40, -60])) then str(input_int('I3')) else str(input_bool('B1')))) > len(input_string('S1'))) && not(input_bool('B2')))) then (len(str(int(input_bool('B1')))) >= 67) else input_bool('B1'))

var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);

function fn56(x2, b40, b1, x11, s36) {
    var b48 = b1;
    var b54 = b1;
    var b30 = b1;
    var b46;
    if (b1 === eval("var s7 = s36; var x27 = x11; var x3 = x11; x4 = x2; x5 = x3;var e18 = \"var x6 = x11; var b8 = (s7) ? true : false;var s9 = (b8).toString();x12 = (s9).length % x11;var b14 = false; if (x6 !== x12) { b14 = true; }((b14) | 0) ? true : false\";x21 = x4 * x5 / Number(!(eval(e18)));var opts24 = [4, 141, 6, 40, -60];var b23 = opts24.indexOf(x21) > -1;var b26; if (b23) { b26 = false; } else { b26 = true; }var e29 = \"'' + (x27)\";var e32 = \"eval(\\\"b30\\\")\";var x34; if (b26) { x34 = eval(e29); } else { x34 = '' + (eval(e32)); }var l35 = (x34).length;var l37 = (s36).length;var b38; if (l35 > l37) { b38 = true; } else { b38 = false; }var b41 = !(b40);var e42 = \"b41\";(b38 && eval(e42))")) {
        b46 = true;
    } else {
        b46 = false;
    }
    var x49 = +(b48);
    var b52;
    if (((x49).toString()).length >= 67) {
        b52 = true;
    } else {
        b52 = false;
    }
    var x55;
    if (b46) {
        x55 = b52;
    } else {
        x55 = b54;
    }
    return x55;
}
fn56(input_I1, input_B2, input_B1, input_I3, input_S1);
