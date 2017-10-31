// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if regex-test(str(input_int('I3')), /^\D[A-Z]C(n|\s)\D_jv\W\W+p$/) then (input_bool('B1') !== (if (not((if true then ((if (len(str(input_bool('B2'))) < input_int('I1')) then input_int('I3') else input_int('I1')) != int(input_bool('B1'))) else bool((input_int('I1') * len(str(bool(int(input_bool('B2'))))))))) !== (not((input_string('S2') == input_string('S3'))) != input_bool('B1'))) then (int(bool(input_string('S3'))) === input_int('I3')) else bool(input_string('S3')))) else not(input_bool('B1')))

var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn62 = function (s34, x1, b17, s35, b22, x14) {
    var b59 = b17;
    var x12 = x1;
    var b4 = b17;
    var s47 = s35;
    var s53 = s35;
    var x50 = x12;
    var b39 = b17;
    var x21 = x14;
    var b5 = b22;
    var b24 = !! ((b22) | 0);
    x27 = x21 * ('' + (b24)).length;
    var b29 = (x27) ? true : false;
    var x30;
    if (true) {
        var x9 = x14;
        var s6 = String(b5);
        var e8 = "(s6).length";
        var b10;
        if (eval(e8) < x9) {
            b10 = true;
        } else {
            b10 = false;
        }
        var x16;
        if (b10) {
            x16 = eval("x12");
        } else {
            x16 = eval("x14");
        }
        var x18 = +(b17);
        var b19 = x16;
        var b20 = x18;
        x30 = b19 != b20;
    } else {
        x30 = b29;
    }
    var e31 = "x30";
    var b32 = !(eval(e31));
    var e33 = "b32";
    var b38 = !((s34 == s35));
    var e40 = "b39";
    var e43 = "(b38 != eval(e40))";
    var e44 = "eval(e43)";
    var b45;
    if (eval(e33) !== eval(e44)) {
        b45 = true;
    } else {
        b45 = false;
    }
    var x49 = +( !! (s47));
    var b51;
    if (x49 === x50) {
        b51 = true;
    } else {
        b51 = false;
    }
    var x55;
    if (b45) {
        x55 = b51;
    } else {
        var b54 = (s53) ? true : false;
        x55 = b54;
    }
    var b60;
    if (b59) {
        b60 = false;
    } else {
        b60 = true;
    }
    return ((String(x1)).match(/^\D[A-Z]C(n|\s)\D_jv\W\W+p$/) !== null ? (b4 !== eval("x55")) : b60);
}
fn62(input_S2, input_I3, input_B1, input_S3, input_B2, input_I1);
