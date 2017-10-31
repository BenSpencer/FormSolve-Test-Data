// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(int(input_bool('B3'))) > str(bool(input_int('I3')))) then int(bool(int((int(input_string('S3')) in [0, 88, 1])))) else int(str(len(input_string('S1')))))

var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);

function fn25(s19, x4, b1, s10) {
    var x2 = +(b1);
    var b8 = '' + (x2);
    var b9 = eval("var s6 = (Boolean(x4)).toString();s6");
    var e11 = "s10";
    var opts14 = [0, 88, 1];
    var b13 = false;
    for (var idx15 = 0; idx15 < opts14.length; idx15++) {
        if (opts14[idx15] == Number(eval(e11))) {
            b13 = true;
        }
    }
    var b17 = !! (+(b13));
    var x24;
    if (b8 > b9) {
        x24 = (b17) | 0;
    } else {
        var s21 = ((s19).length).toString();
        var x22 = Number(s21);
        x24 = eval("x22");
    }
    return x24;
}
fn25(input_S1, input_I3, input_B3, input_S3);
