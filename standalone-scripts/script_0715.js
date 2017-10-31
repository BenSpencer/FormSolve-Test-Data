// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (bool(input_string('S2')) == (input_string('S1') in ['', 'B', '1Iw3', '4ixF', 'ajwsu'])) then int(bool(len(str((if bool(input_string('S1')) then int(str(input_int('I2'))) else int(str(not((input_int('I1') != 9))))))))) else int(bool(input_int('I2'))))

var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");

var fn34 = function (x16, s10, x12, s1) {
    var x30 = x12;
    var s4 = s10;
    var opts6 = ['', 'B', '1Iw3', '4ixF', 'ajwsu'];
    var b5 = false;
    for (var idx7 = 0; idx7 < opts6.length; idx7++) {
        if (opts6[idx7] == s4) {
            b5 = true;
        }
    }
    var b8 = !! (eval("s1"));
    var b9 = b5;
    var b31 = !! (x30);
    var x32 = +(b31);
    var x33;
    if (b8 == b9) {
        x33 = eval("var x22; if ((s10) ? true : false) {  x22 = eval(\"var s13 = (x12).toString();var x14 = Number(s13);x14\"); } else { var b17; if (x16 != 9) { b17 = true; } else { b17 = false; }var b19; if (b17) { b19 = false; } else { b19 = true; }var s20 = '' + (b19);var x21 = parseInt(s20, 10); x22 = x21; }var s23 = String(x22);var e25 = \"(s23).length\";var e26 = \"eval(e25)\";+(Boolean(eval(e26)))");
    } else {
        x33 = x32;
    }
    return x33;
}
fn34(input_I1, input_S1, input_I2, input_S2);
