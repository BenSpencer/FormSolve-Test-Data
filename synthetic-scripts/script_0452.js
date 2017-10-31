// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(len(input_string('S3')))) then (input_string('S1') in ['7Ev0i', 'vNx', 'GlHtK', '5GQXx', '', '1c', 'z']) else bool(str(bool(str((str(int((bool(input_int('I1')) === bool(input_string('S1'))))) <= input_string('S2')))))))

var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");

(function (s13, x11, s22, s1) {
    var s7 = s13;
    var opts9 = ['7Ev0i', 'vNx', 'GlHtK', '5GQXx', '', '1c', 'z'];
    var b8 = false;
    for (var idx10 = 0; idx10 < opts9.length; idx10++) {
        if (opts9[idx10] == s7) {
            b8 = true;
            break;
        }
    }
    var x29;
    if ( !! (eval("var l3 = (eval(\"s1\")).length;(l3).toString()"))) {
        x29 = b8;
    } else {
        var s25 = String((eval("var b12 = !!(x11);var b14 = Boolean(s13);var b15 = false; if (b12 === b14) { b15 = true; }var x17 = Number(b15);var s19 = (eval(\"x17\")).toString();eval(\"s19\")") <= s22));
        var b26 = (s25) ? true : false;
        var s27 = '' + (b26);
        x29 = (s27) ? true : false;
    }
    return x29;
})(input_S1, input_I1, input_S2, input_S3);
