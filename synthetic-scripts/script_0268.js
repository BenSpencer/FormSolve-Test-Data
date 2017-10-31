// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_string('S2') != input_string('S1')) then int((bool(int((len(input_string('S3')) === input_int('I2')))) || not(not(not(input_bool('B3')))))) else int((if (if bool(input_string('S2')) then input_bool('B2') else bool((input_int('I2') + len(str((str((not(bool(str(input_int('I2')))) && input_bool('B3'))) in ['A', '', 'R', 'jX', 'tJ', 'y', 'c7LA'])))))) then bool(input_string('S3')) else bool(input_int('I2')))))

var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn56 = function (s46, x26, s1, b13, b25, s2) {
    var s5 = s46;
    var s23 = s1;
    var x7 = x26;
    var b32 = b13;
    var b3 = s1 != s2;
    var x55;
    if (b3) {
        var e21 = "var l6 = (s5).length;var b8 = l6 === x7;var b11 = ((b8) ? 1 : 0) ? true : false;var e12 = \"b11\";var b15; if (eval(\"b13\")) { b15 = false; } else { b15 = true; }var b17 = !(eval(\"b15\"));var b18 = !(b17);var b19 = eval(e12); var b20 = b18;b19 || b20";
        x55 = Number(eval(e21));
    } else {
        var x49 = x26;
        var x27 = x26;
        x42 = x26;
        x43 = eval("var b33; if (eval(\"var s28 = (x27).toString();var b29 = (s28) ? true : false;var b30; if (b29) { b30 = false; } else { b30 = true; }b30\")) {  b33 = b32; } else { b33 = false; }var opts37 = ['A', '', 'R', 'jX', 'tJ', 'y', 'c7LA'];var l40 = ((opts37.indexOf((b33).toString()) > -1).toString()).length;l40");
        var b44 = (x42 + x43) ? true : false;
        var e51 = "eval(\"x49\")";
        var x53;
        if (((s23) ? true : false ? b25 : b44)) {
            var e47 = "s46";
            var b48 = !! (eval(e47));
            x53 = b48;
        } else {
            x53 = (eval(e51)) ? true : false;
        }
        var x54 = (x53) | 0;
        x55 = x54;
    }
    return x55;
}
fn56(input_S3, input_I2, input_S2, input_B3, input_B2, input_S1);
