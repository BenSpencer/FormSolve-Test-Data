// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int((input_string('S1') > "2l")) >= (if (if bool(int(input_bool('B3'))) then input_bool('B3') else bool(str((if bool((len(input_string('S3')) % input_int('I1'))) then input_bool('B1') else (input_string('S2') < input_string('S1')))))) then int(not((if input_bool('B2') then input_bool('B2') else bool(str((bool(input_int('I3')) == regex-test(input_string('S1'), /^d\t[A-Z](P_GR\r*Hc|\D)$/))))))) else int(not(input_bool('B3'))))) then input_int('I3') else int(input_bool('B3')))

var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn54 = function (x13, b26, s18, x28, s1, b44, b17, s10) {
    var b51 = b44;
    var x50 = x28;
    var s19 = s1;
    var b2;
    if (s1 > "2l") {
        b2 = true;
    } else {
        b2 = false;
    }
    var b6 = b44;
    var s30 = s19;
    var b9 = b6;
    var e11 = "s10";
    x14 = (eval(e11)).length;
    x15 = x13;
    var b16 = Boolean(x14 % x15);
    var b20 = false;
    if (s18 < s19) {
        b20 = true;
    }
    var x22;
    if (b16) {
        x22 = b17;
    } else {
        x22 = b20;
    }
    var s23 = String(x22);
    var b24 = (s23) ? true : false;
    var e43 = "var b40 = !(eval(\"var e37 = \\\"var b27 = b26; var s34 = String(((x28) ? true : false == (s30).match(/^d\\\\\\\\t[A-Z](P_GR\\\\\\\\r*Hc|\\\\\\\\D)$/) !== null));(b26 ? b27 : (s34) ? true : false)\\\";eval(\\\"eval(e37)\\\")\"));Number(eval(\"b40\"))";
    var x47;
    if ((Boolean((b6) | 0) ? b9 : b24)) {
        x47 = eval(e43);
    } else {
        x47 = (!(b44)) ? 1 : 0;
    }
    var b48 = eval("(b2) ? 1 : 0");
    var b49 = x47;
    var x52 = (b51) ? 1 : 0;
    return (b48 >= b49 ? x50 : x52);
}
fn54(input_I1, input_B2, input_S2, input_I3, input_S1, input_B3, input_B1, input_S3);
