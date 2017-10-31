// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool((if (input_bool('B1') && input_bool('B3')) then len((if not(input_bool('B1')) then str(("6kl8I" <= input_string('S2'))) else str(input_bool('B2')))) else input_int('I3'))) then (if bool(input_int('I1')) then (input_string('S1') > "Aiy") else (regex-test(input_string('S3'), /^Guk\S?\s+(C|[-_ ])GaTDE$/) != input_bool('B2'))) else (len(input_string('S3')) >= int((if input_bool('B1') then input_bool('B3') else (input_bool('B2') != bool(len(str(input_int('I1')))))))))

var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);

function fn47(b36, x39, b38, b35) {
    var e37 = "b36";
    var e45 = "var s40 = '' + (x39);var l41 = (s40).length;var b43 = b38; var b44 = (l41) ? true : false;b43 != b44";
    return (b35 ? eval(e37) : eval(e45));
}(function (b13, x21, b3, x17, s9, b1, s23, s26) {
    var s32 = s26;
    var b51 = b1;
    var x49 = x21;
    var b48 = b3;
    var b28 = b13;
    var b50 = b13;
    var b6 = b1;
    var b4;
    if (eval("b1")) {
        b4 = b3;
    } else {
        b4 = false;
    }
    var e8 = "!(b6)";
    var b10;
    if ("6kl8I" <= s9) {
        b10 = true;
    } else {
        b10 = false;
    }
    var x15;
    if (eval(e8)) {
        x15 = (b10).toString();
    } else {
        x15 = '' + (b13);
    }
    var x18;
    if (b4) {
        x18 = (x15).length;
    } else {
        x18 = x17;
    }
    var b19 = !! (x18);
    var e20 = "b19";
    var b22 = Boolean(x21);
    var x31;
    if (b22) {
        x31 = (s23 > "Aiy");
    } else {
        var re27 = new RegExp("^Guk\\S?\\s+(C|[-_ ])GaTDE$");
        var b29 = re27.test(s26);
        var b30 = b28;
        x31 = b29 != b30;
    }
    var e52 = "fn47(b48, x49, b50, b51)";
    var x56;
    if (eval(e20)) {
        x56 = x31;
    } else {
        x56 = (eval("(s32).length") >= +(eval(e52)));
    }
    return x56;
})(input_B2, input_I1, input_B3, input_I3, input_S2, input_B1, input_S1, input_S3);
