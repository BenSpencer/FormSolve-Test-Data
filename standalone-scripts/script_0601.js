// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str((input_string('S2') > str(bool(len(str((((8 >= int((input_string('S2') !== input_string('S1')))) != input_bool('B2')) === (len(str(input_bool('B1'))) == input_int('I2')))))))))) then input_int('I1') else (int(input_string('S1')) % int((if input_bool('B2') then (str(input_int('I2')) !== input_string('S2')) else not(not(not(input_bool('B2'))))))))

var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

(function (b14, s3, x18, b36, x33, s1) {
    var s39 = s1;
    var x37 = x18;
    var b9 = b36;
    var s34 = s3;
    var s2 = s1;
    var e28 = "var b4 = false; if (s2 !== s3) { b4 = true; }var x6 = Number(b4);var b7 = false; if (8 >= x6) { b7 = true; }var e10 = \"b9\";var e11 = \"eval(e10)\";var l17 = (eval(\"String(b14)\")).length;var b19; if (l17 == x18) { b19 = true; } else { b19 = false; }var b21 = (b7 != eval(e11)); var b22 = b19;var s23 = '' + (b21 === b22);var l24 = (s23).length;var b25 = !!(l24);var e26 = \"b25\";var s27 = '' + (eval(e26));s27";
    var b29 = false;
    if (s1 > eval(e28)) {
        b29 = true;
    }
    var b42 = b36;
    var x46;
    if (b36) {
        var b40 = String(x37);
        var b41 = s39;
        x46 = b40 !== b41;
    } else {
        var b44;
        if (!(b42)) {
            b44 = false;
        } else {
            b44 = true;
        }
        var b45 = !(b44);
        x46 = b45;
    }
    var x47 = Number(x46);
    x48 = Number(s34) % x47;
    var x50;
    if (Boolean('' + (b29))) {
        x50 = x33;
    } else {
        x50 = x48;
    }
    return x50;
})(input_B1, input_S1, input_I2, input_B2, input_I1, input_S2);
