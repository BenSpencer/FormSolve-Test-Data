// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(input_int('I2')) >= str(not((if false then input_bool('B3') else false)))) then not(not(not((input_bool('B3') === input_bool('B2'))))) else not(not((if bool(int(str(int(bool(input_string('S3')))))) then bool(str((input_int('I1') !== int(not((input_int('I1') <= int((str(not(input_bool('B3'))) > str(regex-test(input_string('S1'), /^fKIEsCxa\wNn(j|E[0-9])+$/)))))))))) else bool(input_int('I2'))))))

var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");

var fn6 = Function('b4', "var x5; if (false) {  x5 = b4; } else {  x5 = false; } return x5;");
var fn60 = function (b15, x32, x1, s37, b16, s24) {
    var x53 = x1;
    var b34 = b15;
    var b7 = b15;
    var e3 = "String(x1)";
    var e11 = "eval(\"var e9 = \\\"var b8 = !(fn6(b7));b8\\\";eval(e9)\")";
    var s12 = String(eval(e11));
    var b13 = eval(e3) >= s12;
    var e19 = "var b17 = b15; var b18 = b16;b17 === b18";
    var e21 = "!(eval(e19))";
    var b22;
    if (eval(e21)) {
        b22 = false;
    } else {
        b22 = true;
    }
    var b23;
    if (b22) {
        b23 = false;
    } else {
        b23 = true;
    }
    var b57 = !(eval("var x28 = ~~(eval(\"eval(\\\"(s24) ? true : false\\\")\"));var b31 = !!(Number('' + (x28)));var b54 = (x53) ? true : false;var x55; if (b31) { var x33 = x32; var e48 = \"eval(\\\"var b35 = !(b34);var s36 = (b35).toString();var re38 = /^fKIEsCxa\\\\\\\\wNn(j|E[0-9])+$/;var s39 = (re38.test(s37)).toString();var b40 = false; if (s36 > s39) { b40 = true; }var x42 = +(b40);var b43 = false; if (x33 <= x42) { b43 = true; }var b45; if (b43) { b45 = false; } else { b45 = true; }Number(b45)\\\")\";var b52 = !!(String((x32 !== eval(e48)))); x55 = b52; } else { x55 = b54; }x55"));
    var x59;
    if (b13) {
        x59 = b23;
    } else {
        x59 = !(b57);
    }
    return x59;
}
fn60(input_B3, input_I1, input_I2, input_S1, input_B2, input_S3);
