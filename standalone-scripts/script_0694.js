// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then input_int('I3') else len((str((false || not((input_string('S1') == str(bool(str((str((not(not(input_bool('B3'))) || (if input_bool('B3') then not((int(regex-test(str(bool(input_string('S2'))), /^[A-Z]\d(bU\t|yo)*$/)) in [6, 1, 48, 50, 92])) else input_bool('B3')))) != input_string('S2'))))))))) + str(bool(int((input_string('S2') in ['mbE', 'Y', 'p7H', 'DB', '', 'wC', '', 'Ac', 'rI'])))))))

var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");

(function (s24, b1, s3, x2) {
    var b18 = b1;
    var x50;
    if (b1) {
        x50 = x2;
    } else {
        var s39 = s24;
        var e36 = "var e4 = \"s3\";var s9 = s24; var b5 = b18; var b7; if (!(b5)) { b7 = false; } else { b7 = true; }var b8 = b18; var b10 = (s9) ? true : false;var s11 = String(b10);var re12 = /^[A-Z]\\d(bU\\t|yo)*$/;var x13 = (re12.test(s11)) ? 1 : 0;var opts15 = [6, 1, 48, 50, 92];var b14 = opts15.indexOf(x13) > -1;var b17; if (b14) { b17 = false; } else { b17 = true; }var x19; if (b8) { x19 = b17; } else { x19 = b18; }var b20 = b7 || x19;var s23 = '' + (eval(\"b20\"));var b25 = s23; var b26 = s24;var b28 = Boolean(String(b25 != b26));var s30 = String(eval(\"b28\"));var b31; if (eval(e4) == s30) { b31 = true; } else { b31 = false; }var b33; if (b31) { b33 = false; } else { b33 = true; }(false || b33)";
        var e38 = "(eval(e36)).toString()";
        var e40 = "s39";
        var opts42 = ['mbE', 'Y', 'p7H', 'DB', '', 'wC', '', 'Ac', 'rI'];
        var x44 = Number(opts42.indexOf(eval(e40)) > -1);
        var x47 = eval(e38) + ( !! (x44)).toString();
        var l49 = (x47).length;
        x50 = l49;
    }
    return x50;
})(input_S2, input_B3, input_S1, input_I3);
