// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(input_string('S2')) !== int(bool(len(input_string('S3'))))) then len(regex-replace(input_string('S3'), /rlOeR.[A-Z](b|\w?)ity/, "UQypv")) else len(str(not((str(int((if not(input_bool('B2')) then (len(str(input_int('I3'))) < int(input_bool('B3'))) else input_bool('B1')))) !== input_string('S2'))))))

var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");

function fn37(s12, b21, b25, s1, x18, b16) {
    var s4 = s12;
    var s29 = s1;
    var x3 = parseInt(eval("s1"), 10);
    var l7 = (eval("var e5 = \"s4\";eval(e5)")).length;
    var b10 = x3 !== ((l7) ? true : false) ? 1 : 0;
    var x22 = Number(b21);
    var b23 = false;
    if (((x18).toString()).length < x22) {
        b23 = true;
    }
    var x26;
    if (!(b16)) {
        x26 = b23;
    } else {
        x26 = b25;
    }
    var x27 = (x26) | 0;
    var b31;
    if (String(x27) !== eval("s29")) {
        b31 = true;
    } else {
        b31 = false;
    }
    var s34 = String(!(b31));
    var l35 = (s34).length;
    var x36;
    if (b10) {
        var s13 = (s12).replace(/rlOeR.[A-Z](b|\w?)ity/, "UQypv");
        x36 = (s13).length;
    } else {
        x36 = l35;
    }
    return x36;
}
fn37(input_S3, input_B3, input_B1, input_S2, input_I3, input_B2);
