// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then not(input_bool('B2')) else bool(str((if bool(int((input_string('S1') + str(int(not(bool(len(str(int((bool(input_int('I2')) || input_bool('B3')))))))))))) then bool(str(input_int('I1'))) else (len(str(((str(bool((if bool(input_int('I2')) then int(not((input_bool('B2') || false))) else input_int('I1')))) + "C9Zd1") in ['K', 't', 'm90uU', 'f', 'Sf', 'e', 'I', 'z']))) >= int(input_string('S1')))))))

var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn57 = function (x27, b1, x24, b8, s48) {
    var b2 = b1;
    var b29 = b1;
    var e54 = "var x34 = x24; var x6 = x27; var s5 = s48; var e16 = \"Boolean((eval(\\\"var b7 = (x6) ? true : false;var b9; if (b7 || b8) { b9 = true; } else { b9 = false; }var x11 = ~~(b9);var s12 = '' + (x11);s12\\\")).length)\";var x20 = s5; var x21 = '' + (+(!(eval(e16))));var x22 = parseInt(x20 + x21, 10);var x52; if (Boolean(x22)) { x52 = !!(String(x24)); } else { var e38 = \"var b28 = Boolean(x27);var b30 = b29 || false;var b32 = !(b30);var x33 = (b32) ? 1 : 0;var x35; if (b28) { x35 = x33; } else { x35 = x34; }(eval(\\\"x35\\\")) ? true : false\";var s39 = '' + (eval(e38));var x40 = s39 + \"C9Zd1\";var e42 = \"x40\";var opts44 = ['K', 't', 'm90uU', 'f', 'Sf', 'e', 'I', 'z'];var b43 = false; for (var idx45 = 0; idx45 < opts44.length; idx45++) { if (opts44[idx45] == eval(e42)) { b43 = true; } }var x49 = Number(s48);var b50 = (String(b43)).length >= x49; x52 = b50; }var s53 = String(x52);s53";
    var b55 = !! (eval(e54));
    var x56;
    if (b1) {
        var e4 = "var b3 = !(b2);b3";
        x56 = eval(e4);
    } else {
        x56 = b55;
    }
    return x56;
}
fn57(input_I2, input_B2, input_I1, input_B3, input_S1);
