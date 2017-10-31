// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if (88 === (if not((input_int('I1') in [0, 61, 0, 7])) then int(not(bool(len(str(input_int('I2')))))) else int(bool(str(input_bool('B2')))))) then input_bool('B2') else not(input_bool('B2'))) then input_int('I1') else int(not(bool(str(len(str(int(input_string('S2')))))))))

var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");

function fn42(s29, b14, x6, x1) {
    var x27 = x1;
    var b22 = b14;
    var b24 = b14;
    var b20;
    if (88 === eval("var opts3 = [0, 61, 0, 7];var b2 = false; for (var idx4 = 0; idx4 < opts3.length; idx4++) { if (opts3[idx4] == x1) { b2 = true; } }var b5 = !(b2);var s15 = '' + (b14);var x17 = (Boolean(s15)) | 0;var x18; if (b5) { x18 = eval(\"var s7 = (x6).toString();var l8 = (s7).length;var e10 = \\\"!!(l8)\\\";var b11 = !(eval(e10));var x12 = (b11) | 0;x12\"); } else { x18 = x17; }x18")) {
        b20 = true;
    } else {
        b20 = false;
    }
    var e23 = "b22";
    var x26;
    if (b20) {
        x26 = eval(e23);
    } else {
        var b25;
        if (b24) {
            b25 = false;
        } else {
            b25 = true;
        }
        x26 = b25;
    }
    var x41;
    if (x26) {
        x41 = eval("x27");
    } else {
        var e36 = "var e34 = \"var l33 = (eval(\\\"var x30 = Number(s29);'' + (x30)\\\")).length;l33\";(eval(e34)).toString()";
        var x39 = Number(!((eval(e36)) ? true : false));
        x41 = eval("x39");
    }
    return x41;
}
fn42(input_S2, input_B2, input_I2, input_I1);
