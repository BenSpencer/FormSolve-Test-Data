// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(len(input_string('S2'))) >= str((str(len(input_string('S1'))) < input_string('S3')))) then true else (input_string('S1') === input_string('S2')))

var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");

var fn19 = function (s8, s14, s1) {
    var s15 = s1;
    var s5 = s14;
    var e2 = "s1";
    var l3 = (eval(e2)).length;
    var s4 = '' + (l3);
    var l6 = (s5).length;
    var s7 = (l6).toString();
    var b9 = s7 < s8;
    var b12 = false;
    if (s4 >= '' + (b9)) {
        b12 = true;
    }
    var x18;
    if (b12) {
        x18 = true;
    } else {
        var b16;
        if (s14 === s15) {
            b16 = true;
        } else {
            b16 = false;
        }
        x18 = b16;
    }
    return x18;
}
fn19(input_S3, input_S1, input_S2);
