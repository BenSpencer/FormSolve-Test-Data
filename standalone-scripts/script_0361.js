// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((if regex-test(str(not(bool(str((if bool(len(input_string('S3'))) then bool(len(str(len(input_string('S2'))))) else bool(input_string('S3'))))))), /^(H|i)*_[A-Z]$/) then bool(int(((str(int(input_bool('B3'))) <= input_string('S3')) || input_bool('B3')))) else not(input_bool('B1')))) then not(regex-test(str(not(input_bool('B3'))), /^\t.?(pW[-_ ]U|m )$/)) else not(not(bool(int(not(not((str(input_bool('B2')) >= input_string('S1')))))))))

var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);

var fn54 = function (b20, b42, b32, s44, s5, s1) {
    var b37 = b20;
    var s23 = s1;
    var e16 = "eval(\"var s10 = s1; var e2 = \\\"s1\\\";var b4 = ((eval(e2)).length) ? true : false;var x12; if (b4) { var s7 = String((s5).length);var l8 = (s7).length;var b9 = !!(l8); x12 = b9; } else { x12 = Boolean(s10); }var s13 = (x12).toString();!!(s13)\")";
    var b17;
    if (eval(e16)) {
        b17 = false;
    } else {
        b17 = true;
    }
    var s18 = String(b17);
    var re19 = new RegExp("^(H|i)*_[A-Z]$");
    var x35;
    if (re19.test(s18)) {
        x35 = !! (~~(eval("var b26 = b20; var x21 = +(b20);var s22 = String(x21);var b24 = s22 <= s23;var b27 = b24; var b28 = b26;b27 || b28")));
    } else {
        x35 = eval("var b33; if (b32) { b33 = false; } else { b33 = true; }b33");
    }
    var b38;
    if (b37) {
        b38 = false;
    } else {
        b38 = true;
    }
    var b41 = !((String(b38)).match(/^\t.?(pW[-_ ]U|m )$/) !== null);
    var s43 = String(b42);
    var b47;
    if ((s43 >= s44)) {
        b47 = false;
    } else {
        b47 = true;
    }
    var b51 = !( !! (~~(!(b47))));
    var b52 = !(b51);
    var x53;
    if (!(x35)) {
        x53 = b41;
    } else {
        x53 = b52;
    }
    return x53;
}
fn54(input_B3, input_B2, input_B1, input_S1, input_S2, input_S3);
