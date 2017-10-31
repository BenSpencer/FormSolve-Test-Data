// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(str((int(input_string('S3')) >= int(not(bool((int(not(bool(int(regex-replace(str(bool(((if bool(input_string('S1')) then input_int('I3') else len(input_string('S3'))) * input_int('I2')))), /\DOvyL(c|L.[0-9]S)?/, "sW"))))) % input_int('I2')))))))) != (if true then input_int('I3') else int(input_string('S2')))) then not(bool(input_int('I2'))) else not(((input_int('I2') == 1) || bool(int(input_bool('B1'))))))

var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn58 = function (s3, s1, x35, b49, s36, x12) {
    var x42 = x12;
    var x46 = x12;
    var x7 = x35;
    var s9 = s1;
    var x25 = x12;
    var b22 = !! (parseInt((String(eval("var e4 = \"s3\";var e5 = \"eval(e4)\";var x11; if (!!(eval(e5))) { x11 = eval(\"x7\"); } else { var l10 = (s9).length; x11 = l10; }x13 = x11 * x12;var b15 = (x13) ? true : false;eval(\"b15\")"))).replace(/\DOvyL(c|L.[0-9]S)?/, "sW"), 10));
    var b23 = !(b22);
    var x24 = +(b23);
    x26 = x24;
    x27 = x25;
    var b29 = !( !! (x26 % x27));
    var b31;
    if (Number(s1) >= +(b29)) {
        b31 = true;
    } else {
        b31 = false;
    }
    var s33 = (b31).toString();
    var x38;
    if (true) {
        x38 = x35;
    } else {
        var x37 = Number(s36);
        x38 = x37;
    }
    var b39;
    if (Number(s33) != x38) {
        b39 = true;
    } else {
        b39 = false;
    }
    var b43 = (x42) ? true : false;
    var b44;
    if (b43) {
        b44 = false;
    } else {
        b44 = true;
    }
    var x57;
    if (eval("b39")) {
        x57 = eval("b44");
    } else {
        var e54 = "var b47 = x46; var b48 = 1;var b52; if (b47 == b48) { b52 = true; } else {  b52 = Boolean((b49) ? 1 : 0); }b52";
        var b56 = !(eval("eval(e54)"));
        x57 = b56;
    }
    return x57;
}
fn58(input_S1, input_S3, input_I3, input_B1, input_S2, input_I2);
