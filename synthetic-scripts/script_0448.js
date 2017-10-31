// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if not(input_bool('B2')) then false else not(not(bool(input_string('S1'))))) then (input_string('S3') < str((if input_bool('B3') then regex-test(input_string('S1'), /^o([a-z]?-|h)HtOZqBA $/) else input_bool('B2')))) else not(bool(input_string('S2'))))

var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");

var fn31 = function (s8, s24, s20, b19, b1) {
    var s3 = s20;
    var b18 = b1;
    var x30;
    if ((!(b1) ? false : !(!((s3) ? true : false)))) {
        var fn17 = function (b14, b9, s10) {
            var x16;
            if (b9) {
                var e11 = "s10";
                var re13 = /^o([a-z]?-|h)HtOZqBA $/;
                x16 = re13.test(eval("eval(e11)"));
            } else {
                x16 = eval("b14");
            }
            return x16;
        }
        var b22;
        if (s8 < (fn17(b18, b19, s20)).toString()) {
            b22 = true;
        } else {
            b22 = false;
        }
        x30 = b22;
    } else {
        var e29 = "var e28 = \"eval(\\\"var b26 = !(!!(s24));b26\\\")\";eval(e28)";
        x30 = eval(e29);
    }
    return x30;
}
fn31(input_S3, input_S2, input_S1, input_B3, input_B2);
