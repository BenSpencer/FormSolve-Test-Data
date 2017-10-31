// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((not(not(bool((if (str(input_int('I1')) > input_string('S2')) then input_int('I1') else input_int('I1'))))) === (bool(str(regex-test(str(input_int('I2')), /^(\S|p[-_ ])+$/))) === not((if bool(input_string('S1')) then not(input_bool('B1')) else bool(input_int('I1')))))) === input_bool('B1')) then (input_bool('B2') || not((str(input_int('I1')) != str(int(str((str(int((input_bool('B1') != input_bool('B2')))) >= input_string('S1')))))))) else input_bool('B2'))

var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn58 = function (x1, s20, x14, s5, b22, b35) {
    var b38 = b22;
    var x36 = x1;
    var b56 = b35;
    var s45 = s20;
    var b32 = b22;
    var x24 = x1;
    var x8 = x1;
    var x9 = x1;
    var e3 = "eval(\"x1\")";
    var b6 = false;
    if ((eval(e3)).toString() > s5) {
        b6 = true;
    }
    var x10;
    if (b6) {
        x10 = x8;
    } else {
        x10 = x9;
    }
    var b11 = !! (x10);
    var b12;
    if (b11) {
        b12 = false;
    } else {
        b12 = true;
    }
    var b13 = !(b12);
    var b19 = !! (eval("var re16 = new RegExp(\"^(\\\\S|p[-_ ])+$\");var s17 = (re16.test(String(x14))).toString();s17"));
    var b21 = !! (s20);
    var x26;
    if (b21) {
        x26 = !(b22);
    } else {
        var b25 = Boolean(x24);
        x26 = b25;
    }
    var b27;
    if (x26) {
        b27 = false;
    } else {
        b27 = true;
    }
    var b28;
    if (b19 === b27) {
        b28 = true;
    } else {
        b28 = false;
    }
    var b30;
    if (b13 === b28) {
        b30 = true;
    } else {
        b30 = false;
    }
    var b33 = b30 === b32;
    var b39 = b35;
    var s37 = (x36).toString();
    var b40;
    if (b38 != b39) {
        b40 = true;
    } else {
        b40 = false;
    }
    var x42 = +(b40);
    var s44 = String(eval("x42"));
    var b46 = false;
    if (s44 >= s45) {
        b46 = true;
    }
    var x49 = Number((b46).toString());
    var s50 = '' + (x49);
    var b53 = !((s37 != s50));
    var b54;
    if (b35) {
        b54 = true;
    } else {
        b54 = b53;
    }
    return (b33 ? b54 : b56);
}
fn58(input_I1, input_S1, input_I2, input_S2, input_B1, input_B2);
