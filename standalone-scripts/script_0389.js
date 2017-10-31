// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_string('S1') != str(input_bool('B1'))) then int(not(bool(str(not((if not(bool(input_string('S1'))) then (if not(input_bool('B1')) then true else regex-test(input_string('S3'), /^(j|a\wAc)[a-z]?smx$/)) else bool(input_int('I1')))))))) else int(str(bool(input_string('S3')))))

var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");

var fn31 = function (x15, s1, b10, s12) {
    var s26 = s12;
    var b2 = b10;
    var s6 = s1;
    var s3 = String(b2);
    var x30;
    if ((s1 != s3)) {
        var b9 = !(eval("Boolean(s6)"));
        var b11 = !(b10);
        var re13 = /^(j|a\wAc)[a-z]?smx$/;
        var x14;
        if (b11) {
            x14 = true;
        } else {
            x14 = re13.test(s12);
        }
        var x19;
        if (b9) {
            x19 = x14;
        } else {
            var e17 = "var e16 = \"x15\";eval(e16)";
            var b18 = (eval(e17)) ? true : false;
            x19 = b18;
        }
        var b20;
        if (x19) {
            b20 = false;
        } else {
            b20 = true;
        }
        var b22 = !! (String(b20));
        var e24 = "!(b22)";
        x30 = (eval(e24)) | 0;
    } else {
        var b27 = !! (s26);
        var s28 = String(b27);
        x30 = parseInt(s28, 10);
    }
    return x30;
}
fn31(input_I1, input_S1, input_B1, input_S3);
