// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S3')) then ((input_int('I1') > int(input_string('S1'))) !== bool(int((input_int('I1') != int(input_string('S3')))))) else bool(len(str((input_int('I1') <= int((int(not((input_string('S3') <= str(int(input_bool('B2')))))) >= int(bool(len(input_string('S1')))))))))))

var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);

function fn44(s28, x18, s1, b20) {
    var x3 = x18;
    var s10 = s1;
    var s19 = s1;
    var s4 = s28;
    var s22 = String((b20) | 0);
    var b23;
    if (s19 <= s22) {
        b23 = true;
    } else {
        b23 = false;
    }
    var b25 = !(b23);
    var l29 = (s28).length;
    var b30 = (l29) ? true : false;
    var b36 = false;
    if (x18 <= (eval("(eval(\"~~(b25)\") >= ~~(b30))")) ? 1 : 0) {
        b36 = true;
    }
    var s38 = '' + (b36);
    var e39 = "s38";
    var l40 = (eval(e39)).length;
    var b41 = !! (l40);
    var x43;
    if (Boolean(s1)) {
        var x8 = x3;
        var b6 = x3 > Number(s4);
        var x11 = parseInt(s10, 10);
        var b12 = eval("x8");
        var b13 = x11;
        var x14 = +(b12 != b13);
        var b16 = false;
        if (b6 !== (x14) ? true : false) {
            b16 = true;
        }
        x43 = b16;
    } else {
        x43 = eval("b41");
    }
    return x43;
}
fn44(input_S1, input_I1, input_S3, input_B2);
