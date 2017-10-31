// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str((input_string('S3') >= str(int(((if (true && (str(bool(len(input_string('S1')))) <= input_string('S2'))) then bool(str(int(str((if input_bool('B1') then bool(input_string('S1')) else (str(int(str(len(str((len(input_string('S2')) in [3, 0, 100, 14, 1, 1, 93, 41, 107, 0])))))) == str(input_bool('B1')))))))) else bool(input_int('I1'))) && true)))))) then not(bool((if bool(str(input_bool('B3'))) then str((input_int('I1') in [8, 82, 1])) else input_string('S3')))) else bool(str(input_bool('B1'))))

var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn70 = function (s1, b53, x40, s17, s14, b13) {
    var s62 = s1;
    var b66 = b13;
    var x56 = x40;
    var s7 = s17;
    var s2 = s14;
    var e4 = "var l3 = (s2).length;l3";
    var b5 = Boolean(eval(e4));
    var s6 = (b5).toString();
    var b11 = false;
    if (true && eval("(s6 <= s7)")) {
        b11 = true;
    }
    var x35 = parseInt(eval("eval(\"var b27 = b13; var l18 = (s17).length;var opts20 = [3, 0, 100, 14, 1, 1, 93, 41, 107, 0];var b19 = false; for (var idx21 = 0; idx21 < opts20.length; idx21++) { if (opts20[idx21] == l18) { b19 = true; break; } }var s22 = String(b19);var l23 = (s22).length;var s24 = '' + (l23);var x25 = Number(s24);var b29 = String(x25); var b30 = String(b27);var x31; if (b13) { var e15 = \\\"s14\\\"; x31 = (eval(e15)) ? true : false; } else { x31 = b29 == b30; }var s32 = (x31).toString();s32\")"), 10);
    var e36 = "x35";
    var b41 = (x40) ? true : false;
    var x42;
    if (b11) {
        x42 = eval("(String(eval(e36))) ? true : false");
    } else {
        x42 = b41;
    }
    var b43 = false;
    if (x42 && true) {
        b43 = true;
    }
    var s46 = '' + ((b43) ? 1 : 0);
    var b47;
    if (s1 >= s46) {
        b47 = true;
    } else {
        b47 = false;
    }
    var e49 = "b47";
    var e61 = "var opts58 = [8, 82, 1];var b57 = opts58.indexOf(x56) > -1;var s60 = '' + (b57);s60";
    var x63;
    if (Boolean((b53).toString())) {
        x63 = eval(e61);
    } else {
        x63 = s62;
    }
    var b65;
    if (Boolean(x63)) {
        b65 = false;
    } else {
        b65 = true;
    }
    var b68 = Boolean((b66).toString());
    var x69;
    if (eval("!!('' + (eval(e49)))")) {
        x69 = b65;
    } else {
        x69 = b68;
    }
    return x69;
}
fn70(input_S3, input_B3, input_I1, input_S2, input_S1, input_B1);
