// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (bool(input_string('S2')) !== regex-test(input_string('S3'), /^FuB[-_ ]A(X|GlQtL\S+W)m_a$/)) then len(str(input_bool('B1'))) else (int((input_bool('B2') && (if bool(input_string('S3')) then ((input_int('I1') == input_int('I1')) === regex-test(str(bool(input_int('I3'))), /^KN(G\di|b)*\n[0-9]ydA$/)) else (if input_bool('B3') then not(input_bool('B3')) else not((input_int('I1') < input_int('I2'))))))) / input_int('I1')))

var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);

(function (s15, b14, x34, s1, b29, x18, b7, x22) {
    var s3 = s15;
    var re4 = /^FuB[-_ ]A(X|GlQtL\S+W)m_a$/;
    var b5 = (s1) ? true : false !== re4.test(s3);
    var x45 = x18;
    var x32 = x18;
    var e17 = "var b16 = !!(s15);b16";
    var x19 = x18;
    var b20 = false;
    if (x18 == x19) {
        b20 = true;
    }
    var re26 = /^KN(G\di|b)*\n[0-9]ydA$/;
    var x41;
    if (eval(e17)) {
        x41 = (b20 === re26.test(eval("'' + (Boolean(x22))")));
    } else {
        var e40 = "var b30 = b29; var x39; if (b29) { var b31 = !(b30); x39 = b31; } else { var e33 = \"x32\";var b37; if ((eval(e33) < x34)) { b37 = false; } else { b37 = true; }var e38 = \"b37\"; x39 = eval(e38); }x39";
        x41 = eval(e40);
    }
    var b42;
    if (x41) {
        b42 = b14;
    } else {
        b42 = false;
    }
    var x44 = Number(b42);
    x46 = x44 / x45;
    var x48;
    if (b5) {
        var e12 = "eval(\"eval(\\\"var e9 = \\\\\\\"String(b7)\\\\\\\";eval(e9)\\\")\")";
        x48 = (eval(e12)).length;
    } else {
        x48 = x46;
    }
    return x48;
})(input_S3, input_B2, input_I2, input_S2, input_B3, input_I1, input_B1, input_I3);
