// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_string('S2') >= str(bool(int((2 != len(str((int((not(regex-test(str(bool(str(int(((input_string('S2') in ['gjRW', 'z', 'cbjI', 'XTC', '9dzVA', 'GmCN']) != true))))), /^wws\dBuk(d|Ky)+XF[A-Z]yV$/)) || (input_int('I1') != int((str(not(input_bool('B3'))) == str(input_int('I1'))))))) <= int((if bool(input_string('S3')) then (str(not(not(bool(input_int('I1'))))) === input_string('S2')) else bool(input_int('I2')))))))))))) then true else regex-test(str(int(bool(str(int(input_string('S1')))))), /^(\r+|[a-z])u$/))

var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);

(function (b17, s1, x16, s30, s62, x43) {
    var s2 = s1;
    var s39 = s2;
    var x32 = x16;
    var e11 = "eval(\"var opts4 = ['gjRW', 'z', 'cbjI', 'XTC', '9dzVA', 'GmCN'];var b3 = false; for (var idx5 = 0; idx5 < opts4.length; idx5++) { if (opts4[idx5] == s2) { b3 = true; break; } }var b6 = false; if (b3 != true) { b6 = true; }var x8 = Number(b6);String(x8)\")";
    var s13 = '' + (Boolean(eval(e11)));
    var re14 = /^wws\dBuk(d|Ky)+XF[A-Z]yV$/;
    var x20 = x16;
    var b18 = !(b17);
    var s19 = '' + (b18);
    var s21 = '' + (x20);
    var b22;
    if (s19 == s21) {
        b22 = true;
    } else {
        b22 = false;
    }
    var x24 = ~~ (b22);
    var b27 = !(re14.test(s13));
    var b28 = (x16 != x24);
    var b31 = !! (s30);
    var e42 = "var e34 = \"eval(\\\"x32\\\")\";var b37 = !(!(!!(eval(e34))));var b40 = false; if (String(b37) === s39) { b40 = true; }b40";
    var x47;
    if (b31) {
        x47 = eval(e42);
    } else {
        x47 = eval("var e45 = \"Boolean(x43)\";eval(e45)");
    }
    var x48 = (x47) ? 1 : 0;
    var b50 = (b27 || b28) | 0 <= eval("x48");
    var s52 = String(b50);
    var l53 = (s52).length;
    var b54;
    if (2 != l53) {
        b54 = true;
    } else {
        b54 = false;
    }
    var e58 = "!!(Number(b54))";
    var s59 = (eval(e58)).toString();
    var b60;
    if (s1 >= s59) {
        b60 = true;
    } else {
        b60 = false;
    }
    var x70;
    if (b60) {
        x70 = true;
    } else {
        var b66 = !! ((eval("var x63 = Number(s62);x63")).toString());
        var x67 = ~~ (b66);
        x70 = ('' + (x67)).match(/^(\r+|[a-z])u$/) !== null;
    }
    return x70;
})(input_B3, input_S2, input_I1, input_S3, input_S1, input_I2);
