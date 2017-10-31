// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool((input_int('I1') - input_int('I2'))) then int((str((str(int((input_string('S1') in ['Fe3', 'eot', 'nB', '', 'p1glh']))) in ['KXu', '', '3', 'Lne', 'ev'])) === str(input_int('I1')))) else (if input_bool('B2') then int(str(len(input_string('S3')))) else input_int('I2')))

var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");

var fn34 = function (b25, x1, x2, s8, s27) {
    var x19 = x1;
    var x31 = x2;
    var opts11 = ['Fe3', 'eot', 'nB', '', 'p1glh'];
    var b10 = false;
    for (var idx12 = 0; idx12 < opts11.length; idx12++) {
        if (opts11[idx12] == eval("s8")) {
            b10 = true;
            break;
        }
    }
    var x13 = (b10) | 0;
    var s14 = (x13).toString();
    var opts16 = ['KXu', '', '3', 'Lne', 'ev'];
    var b15 = false;
    for (var idx17 = 0; idx17 < opts16.length; idx17++) {
        if (opts16[idx17] == s14) {
            b15 = true;
            break;
        }
    }
    var s18 = '' + (b15);
    var b21;
    if (s18 === '' + (x19)) {
        b21 = true;
    } else {
        b21 = false;
    }
    var e26 = "b25";
    var x33;
    if (eval("eval(\"Boolean((x1 - x2))\")")) {
        x33 = Number(eval("b21"));
    } else {
        x33 = (eval(e26) ? Number(((s27).length).toString()) : x31);
    }
    return x33;
}
fn34(input_B2, input_I1, input_I2, input_S1, input_S3);
