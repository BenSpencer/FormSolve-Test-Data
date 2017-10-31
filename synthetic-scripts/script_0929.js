// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if ((input_int('I3') === len(str(bool((int(bool(int(input_bool('B2')))) + input_int('I1')))))) && bool(input_int('I1'))) then (input_int('I2') <= len(str(not(bool(input_string('S1')))))) else bool(str(input_bool('B3')))) then input_bool('B3') else ((if (str((str(not(input_bool('B3'))) >= input_string('S1'))) !== input_string('S3')) then int((input_string('S2') <= str(input_bool('B1')))) else int((input_bool('B2') === bool(int((input_int('I1') == input_int('I1'))))))) == input_int('I3')))

var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);

function fn73(s21, x20, b48, b29, x1, s46, b2, x15, s43) {
    var x56 = x15;
    var b34 = b29;
    var b35 = b29;
    var x69 = x1;
    var b55 = b2;
    var s38 = s21;
    var x7 = x15;
    var e3 = "b2";
    var b5 = !! (+(eval(e3)));
    var s11 = (Boolean((Number(b5) + x7))).toString();
    var b13;
    if (x1 === (s11).length) {
        b13 = true;
    } else {
        b13 = false;
    }
    var b17;
    if (b13) {
        b17 = (x15) ? true : false;
    } else {
        b17 = false;
    }
    var e19 = "b17";
    var x32;
    if (eval(e19)) {
        var b27 = x20;
        var b28 = (eval("var b23; if (!!(s21)) { b23 = false; } else { b23 = true; }String(b23)")).length;
        x32 = b27 <= b28;
    } else {
        var s30 = (b29).toString();
        var b31 = Boolean(s30);
        x32 = b31;
    }
    var s42 = '' + (eval("var b36 = !(b35);var s37 = (b36).toString();(s37 >= s38)"));
    var b44;
    if (s42 !== s43) {
        b44 = true;
    } else {
        b44 = false;
    }
    var x68;
    if (b44) {
        var b52 = eval("s46");
        var b53 = (eval("eval(\"b48\")")).toString();
        x68 = (b52 <= b53) ? 1 : 0;
    } else {
        var x57 = x56;
        var e59 = "eval(\"x57\")";
        var b61;
        if (x56 == eval("eval(e59)")) {
            b61 = true;
        } else {
            b61 = false;
        }
        var x67 = ((b55 === ((b61) ? 1 : 0) ? true : false)) | 0;
        x68 = x67;
    }
    var b70;
    if (x68 == x69) {
        b70 = true;
    } else {
        b70 = false;
    }
    var x72;
    if (eval("x32")) {
        x72 = b34;
    } else {
        x72 = b70;
    }
    return x72;
}
fn73(input_S1, input_I2, input_B1, input_B3, input_I3, input_S2, input_B2, input_I1, input_S3);
