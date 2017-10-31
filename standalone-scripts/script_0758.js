// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int((if true then input_bool('B1') else (if (input_bool('B2') != input_bool('B2')) then not(bool(int((str(bool(str(bool(input_int('I2'))))) in ['D', 'hpaGk', 'PCGm', '', 'YXh', 'Vp', 'XUh6W', 'Xg', 'mULH'])))) else (bool((len(input_string('S2')) - (if bool(input_string('S3')) then 15 else int(input_string('S3'))))) != not(not(regex-test(input_string('S3'), /^([0-9]+E|Vi)$/))))))) <= int(str(len(input_string('S2'))))) then input_int('I2') else -99)

var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);

function fn26(s21) {
    var s23 = s21;
    var x25;
    if ( !! (s21)) {
        x25 = 15;
    } else {
        x25 = Number(s23);
    }
    return x25;
}
function fn53(s19, s27, b2, b1, x51) {
    var x8 = x51;
    var s43 = s19;
    var e39 = "var b4 = b2; var s10 = '' + ((x8) ? true : false);var b11 = Boolean(s10);var s12 = '' + (b11);var opts14 = ['D', 'hpaGk', 'PCGm', '', 'YXh', 'Vp', 'XUh6W', 'Xg', 'mULH'];var b13 = opts14.indexOf(s12) > -1;var b17 = ((b13) ? 1 : 0) ? true : false;var s31 = s27; var l20 = (s19).length;x28 = l20 - fn26(s27);var b30 = (x28) ? true : false;var e33 = \"(s31).match(/^([0-9]+E|Vi)$/) !== null\";var b34; if (eval(e33)) { b34 = false; } else { b34 = true; }((eval(\"b2\") != eval(\"b4\")) ? !(b17) : (b30 != !(b34)))";
    var x40;
    if (true) {
        x40 = b1;
    } else {
        x40 = eval(e39);
    }
    var x42 = (eval("x40")) | 0;
    var b48 = x42 <= eval("var l44 = (s43).length;var s45 = '' + (l44);parseInt(s45, 10)");
    var e50 = "b48";
    return (eval(e50) ? x51 : -99);
}
fn53(input_S2, input_S3, input_B2, input_B1, input_I2);
