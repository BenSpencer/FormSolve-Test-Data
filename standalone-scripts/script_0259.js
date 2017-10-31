// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then input_bool('B2') else bool((if (str(bool(str((input_bool('B1') === bool(str(input_bool('B2'))))))) > input_string('S3')) then len(input_string('S2')) else int(input_string('S2')))))

var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");

var fn24 = function (b2, b1, s17, s14) {
    var b3 = b1;
    var b5 = b2;
    var x23;
    if (b1) {
        x23 = b2;
    } else {
        var s19 = s17;
        var b15;
        if (eval("((String((eval(\"b3\") === !!(String(b5))))) ? true : false).toString()") > s14) {
            b15 = true;
        } else {
            b15 = false;
        }
        var l18 = (s17).length;
        var x21;
        if (b15) {
            x21 = l18;
        } else {
            var x20 = Number(s19);
            x21 = x20;
        }
        var b22 = !! (x21);
        x23 = b22;
    }
    return x23;
}
fn24(input_B2, input_B1, input_S2, input_S3);
