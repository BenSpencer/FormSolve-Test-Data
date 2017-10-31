// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str((input_string('S2') == input_string('S1'))) === input_string('S3')) then str(bool((if not(regex-test(input_string('S2'), /^(\dFX|[A-Z]+.S)$/)) then (if (int((str(int(str(len(input_string('S3'))))) in ['SjxRu', 'hl', 'o1c', 'rjs', 'rIxtd', 'H9y', '', 'De', 'AyE'])) <= input_int('I1')) then int(input_string('S3')) else int(not(not(input_bool('B1'))))) else len(input_string('S3'))))) else input_string('S3'))

var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn45 = function (b32, s16, s1, x27, s2) {
    var s12 = s1;
    var s43 = s16;
    var s7 = s16;
    var e3 = "s2";
    var b4 = false;
    if (s1 == eval(e3)) {
        b4 = true;
    }
    var e9 = "var e8 = \"s7\";eval(e8)";
    var b10 = '' + (b4);
    var b11 = eval(e9);
    var s37 = s16;
    var b15 = !((eval("s12")).match(/^(\dFX|[A-Z]+.S)$/) !== null);
    var s30 = s16;
    var e22 = "var e17 = \"s16\";var x20 = parseInt('' + ((eval(e17)).length), 10);var s21 = String(x20);s21";
    var opts24 = ['SjxRu', 'hl', 'o1c', 'rjs', 'rIxtd', 'H9y', '', 'De', 'AyE'];
    var x26 = (opts24.indexOf(eval(e22)) > -1) | 0;
    var b28 = x26;
    var b29 = x27;
    var x31 = parseInt(s30, 10);
    var b34 = !(!(b32));
    var x35 = ~~ (b34);
    var l39 = (eval("s37")).length;
    var x40;
    if (b15) {
        x40 = (b28 <= b29 ? x31 : x35);
    } else {
        x40 = l39;
    }
    var s42 = (Boolean(x40)).toString();
    return (b10 === b11 ? s42 : s43);
}
fn45(input_B1, input_S3, input_S2, input_I1, input_S1);
