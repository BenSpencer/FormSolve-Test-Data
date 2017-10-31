// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then regex-test(input_string('S2'), /^U(M|[-_ ]X)+mP$/) else (str(int(input_bool('B3'))) < str(int((true == bool(input_int('I1')))))))

var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);

function fn16(s1, x7, b4) {
    var e2 = "s1";
    var re3 = /^U(M|[-_ ]X)+mP$/;
    var x5 = (b4) | 0;
    var s6 = '' + (x5);
    var b9;
    if (true) {
        b9 = (x7) ? true : false;
    } else {
        b9 = !(x7) ? true : false;
    }
    var x11 = (b9) ? 1 : 0;
    var b13 = false;
    if (s6 < '' + (x11)) {
        b13 = true;
    }
    var x15;
    if (true) {
        x15 = re3.test(eval(e2));
    } else {
        x15 = b13;
    }
    return x15;
}
fn16(input_S2, input_I1, input_B3);
