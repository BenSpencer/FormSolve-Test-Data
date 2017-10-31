// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((true || (if input_bool('B2') then input_bool('B3') else not(bool(int(str(int(str(not(bool(str(len(input_string('S3'))))))))))))) || bool(input_int('I3'))) then bool(str(not((((input_int('I3') * input_int('I1')) in [98, 31, 1, 1, 1, 1, 1]) || bool(str((bool(str(bool(str(input_bool('B2'))))) != not(input_bool('B1'))))))))) else input_bool('B3'))

var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);

(function (b3, x26, s5, x21, b40, b1) {
    var b53 = b3;
    var x25 = x21;
    var b33 = b1;
    var e17 = "var b8 = (((s5).length).toString()) ? true : false;var b9; if (b8) { b9 = false; } else { b9 = true; }var x11 = Number(String(b9));var s12 = '' + (x11);var b16; if (eval(\"Boolean(parseInt(s12, 10))\")) { b16 = false; } else { b16 = true; }b16";
    var b19;
    if ((eval("b1") ? eval("b3") : eval(e17))) {
        b19 = true;
    } else {
        b19 = true;
    }
    var b23 = b19;
    var b24 = Boolean(x21);
    return (b23 || b24 ? eval("var opts31 = [98, 31, 1, 1, 1, 1, 1];var b30 = opts31.indexOf(eval(\"(x25 * x26)\")) > -1;var b39 = (eval(\"(eval(\\\"((b33).toString()) ? true : false\\\")).toString()\")) ? true : false;var b41; if (b40) { b41 = false; } else { b41 = true; }var b42 = b39 != b41;var b47 = b30; var b48 = (eval(\"String(b42)\")) ? true : false;var b49 = !(b47 || b48);var s50 = (b49).toString();var b51 = Boolean(s50);b51") : eval("b53"));
})(input_B3, input_I1, input_S3, input_I3, input_B1, input_B2);
