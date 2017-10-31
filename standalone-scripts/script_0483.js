// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((bool(input_string('S3')) === not((bool(input_int('I3')) == (if not(((int(not(input_bool('B3'))) > input_int('I3')) || input_bool('B1'))) then false else input_bool('B1'))))) === (if regex-test((if input_bool('B1') then input_string('S1') else input_string('S2')), /^([A-Z]|C)Ic\ssPqcIfzxvyQS\S+C\d$/) then bool(int(not((str(("Pq5s" != str(int(input_bool('B2'))))) === input_string('S1'))))) else input_bool('B1'))) then bool(input_int('I1')) else not((bool(input_int('I3')) && (input_int('I1') === input_int('I2')))))

var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);

var fn62 = function (s1, b31, x10, x50, b13, s27, x55, s25, b6) {
    var x54 = x50;
    var x52 = x10;
    var b24 = b13;
    var b2 = Boolean(s1);
    var x3 = x10;
    var b5 = !! (eval("x3"));
    var b17 = b13;
    var e8 = "!(b6)";
    var b14;
    if ((~~(eval(e8)) > x10)) {
        b14 = true;
    } else {
        b14 = b13;
    }
    var x18;
    if (!(b14)) {
        x18 = false;
    } else {
        x18 = b17;
    }
    var b19 = b5 == x18;
    var b21 = !(b19);
    var b22 = b2 === b21;
    var b46 = b24;
    var s39 = s25;
    var x28;
    if (b24) {
        x28 = eval("s25");
    } else {
        x28 = s27;
    }
    var re29 = /^([A-Z]|C)Ic\ssPqcIfzxvyQS\S+C\d$/;
    var b34;
    if ("Pq5s" != String(Number(b31))) {
        b34 = true;
    } else {
        b34 = false;
    }
    var e36 = "b34";
    var e37 = "eval(e36)";
    var s38 = '' + (eval(e37));
    var b40 = s38;
    var b41 = s39;
    var b42 = !(b40 === b41);
    var x43 = +(b42);
    var e45 = "(x43) ? true : false";
    var x47;
    if (eval("re29.test(x28)")) {
        x47 = eval(e45);
    } else {
        x47 = b46;
    }
    var b48 = false;
    if (b22 === x47) {
        b48 = true;
    }
    var b51 = Boolean(x50);
    var x61;
    if (b48) {
        x61 = b51;
    } else {
        var b53 = !! (x52);
        var b56;
        if (x54 === x55) {
            b56 = true;
        } else {
            b56 = false;
        }
        var b58;
        if (b53) {
            b58 = b56;
        } else {
            b58 = false;
        }
        var b60;
        if (b58) {
            b60 = false;
        } else {
            b60 = true;
        }
        x61 = b60;
    }
    return x61;
}
fn62(input_S3, input_B2, input_I3, input_I1, input_B1, input_S2, input_I2, input_S1, input_B3);
