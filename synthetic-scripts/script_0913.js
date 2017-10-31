// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((if ((input_string('S1') in ['rqTRu', '', 'Ol', 'wraH', '', 'Wn', 'pard']) !== input_bool('B2')) then (bool(input_string('S3')) == input_bool('B2')) else (not(bool(len(input_string('S1')))) === (input_int('I3') != (input_int('I1') % (int(bool(input_string('S2'))) * input_int('I2')))))) === false) then len(str(int(not(regex-test(input_string('S1'), /^Pk[a-z](gqc|M)-Ze\d\D+$/))))) else int(str((str(int(str(int(str(input_bool('B2')))))) !== input_string('S1')))))

var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);

var fn59 = function (x18, b10, x24, s1, s20, x19, s8) {
    var b42 = b10;
    var s36 = s1;
    var s49 = s1;
    var b5 = b10;
    var s13 = s1;
    var opts3 = ['rqTRu', '', 'Ol', 'wraH', '', 'Wn', 'pard'];
    var b2 = false;
    for (var idx4 = 0; idx4 < opts3.length; idx4++) {
        if (opts3[idx4] == s1) {
            b2 = true;
            break;
        }
    }
    var b6 = false;
    if (b2 !== b5) {
        b6 = true;
    }
    var b11 = false;
    if (Boolean(s8) == b10) {
        b11 = true;
    }
    var x33;
    if (b6) {
        x33 = b11;
    } else {
        var l14 = (s13).length;
        var e15 = "l14";
        var b17 = !( !! (eval(e15)));
        var e23 = "~~(!!(s20))";
        x25 = eval(e23) * x24;
        x27 = x19 % x25;
        var b29 = x18 != x27;
        var b31;
        if (b17 === b29) {
            b31 = true;
        } else {
            b31 = false;
        }
        x33 = b31;
    }
    var b34 = x33;
    var b35 = false;
    var re37 = new RegExp("^Pk[a-z](gqc|M)-Ze\\d\\D+$");
    var s43 = '' + (b42);
    var e45 = "Number(s43)";
    var s46 = '' + (eval(e45));
    var b52 = false;
    if ('' + (parseInt(s46, 10)) !== eval("eval(\"s49\")")) {
        b52 = true;
    }
    var s54 = String(b52);
    var e57 = "Number(eval(\"s54\"))";
    return (b34 === b35 ? (String(+(!(re37.test(s36))))).length : eval(e57));
}
fn59(input_I3, input_B2, input_I2, input_S1, input_S2, input_I1, input_S3);
