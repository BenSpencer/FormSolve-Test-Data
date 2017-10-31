// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then str(regex-test(str((if (int(str(bool(str(int((input_bool('B3') && (input_string('S1') === input_string('S1')))))))) != len(input_string('S2'))) then not((input_bool('B3') || bool(input_string('S3')))) else regex-test(input_string('S1'), /^([a-z]?XF|_)\d$/))), /^oIap.dGe(w|[a-z]*pIh)I$/)) else str((input_string('S3') > input_string('S3'))))

var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");

function fn44(s24, b2, s18, s30, b1) {
    var s36 = s24;
    var s39 = s36;
    var e38 = "eval(\"s36\")";
    var b40;
    if (eval(e38) > s39) {
        b40 = true;
    } else {
        b40 = false;
    }
    var s42 = (b40).toString();
    var x43;
    if (b1) {
        var b22 = b2;
        var s4 = s30;
        var e8 = "var s5 = s4; (s4 === s5)";
        var b9;
        if (eval(e8)) {
            b9 = eval("b2");
        } else {
            b9 = false;
        }
        var e11 = "b9";
        var s13 = String(Number(eval(e11)));
        var s15 = String( !! (s13));
        var l19 = (s18).length;
        var re31 = new RegExp("^([a-z]?XF|_)\\d$");
        var x32;
        if ((eval("Number(s15)") != l19)) {
            x32 = eval("var b26; if (eval(\"b22\") || (s24) ? true : false) { b26 = true; } else { b26 = false; }!(b26)");
        } else {
            x32 = re31.test(s30);
        }
        var re34 = /^oIap.dGe(w|[a-z]*pIh)I$/;
        x43 = (re34.test('' + (x32))).toString();
    } else {
        x43 = s42;
    }
    return x43;
}
fn44(input_S3, input_B3, input_S2, input_S1, input_B2);
