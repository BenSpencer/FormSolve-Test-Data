// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I1') < input_int('I1')) then not(input_bool('B3')) else (input_bool('B1') && (input_string('S1') <= str((if bool(int(regex-test(str(not((if input_bool('B2') then input_bool('B2') else not((int(input_bool('B3')) >= int(str(int(input_string('S1'))))))))), /^([a-z]?|m)Oq$/))) then int(bool(input_string('S1'))) else len(str(int((int(input_bool('B3')) < len((if not(bool(input_int('I3'))) then str(len((str(bool(input_string('S3'))) + str((input_int('I1') != len(input_string('S1'))))))) else str(input_int('I3')))))))))))))

var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");

function fn66(b12, x44, x36, b10, s40, s14) {
    var b34 = b12;
    var s31 = s14;
    var s45 = s14;
    var e26 = "eval(\"var b9 = b10; var x22; if (b9) {  x22 = eval(\\\"b10\\\"); } else { var x13 = ~~(b12);var e16 = \\\"var x15 = Number(s14);x15\\\";var s17 = '' + (eval(e16));var x18 = Number(s17);var b19; if (x13 >= x18) { b19 = true; } else { b19 = false; } x22 = !(b19); }var s24 = '' + (!(x22));s24\")";
    var re27 = /^([a-z]?|m)Oq$/;
    var x56 = x36;
    var b37 = Boolean(x36);
    var b38;
    if (b37) {
        b38 = false;
    } else {
        b38 = true;
    }
    var e39 = "b38";
    var s43 = String(eval("Boolean(s40)"));
    var b49 = x44;
    var b50 = eval("(eval(\"s45\")).length");
    var s51 = (b49 != b50).toString();
    var x52 = s43 + s51;
    var x58;
    if (eval(e39)) {
        x58 = '' + ((x52).length);
    } else {
        var s57 = (x56).toString();
        x58 = s57;
    }
    var b60 = ~~ (b34);
    var b61 = (x58).length;
    var x62 = (b60 < b61) | 0;
    var s63 = String(x62);
    var l64 = (s63).length;
    var x65;
    if (Boolean(+(eval("re27.test(eval(e26))")))) {
        var b32 = (s31) ? true : false;
        var x33 = +(b32);
        x65 = x33;
    } else {
        x65 = l64;
    }
    return x65;
}
var fn79 = Function('x1', 'b5', 'b70', 'x69', 's71', 'b7', 's72', "var x68 = x1; var b67 = b5; var x2 = x1; var s8 = s72; var b74; if (s8 <= (fn66(b67, x68, x69, b70, s71, s72)).toString()) { b74 = true; } else { b74 = false; }var b76 = false; if (b7 && b74) { b76 = true; }var x78; if ((x1 < x2)) {  x78 = !(b5); } else { x78 = b76; } return x78;");
fn79(input_I1, input_B3, input_B2, input_I3, input_S3, input_B1, input_S1);
