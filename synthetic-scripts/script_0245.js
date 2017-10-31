// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(bool(input_string('S3')))) then int((len(str((str((int((str((true != input_bool('B3'))) in ['4', '0I9', 'Dz', '9', 'S9Zu', '', 'aMN', 'd'])) <= len(str(input_bool('B1'))))) <= input_string('S2')))) in [3, 62, 1, -95, 1, 97, 0, 1, 6])) else len(str(input_int('I3'))))

var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);

var fn45 = function (x40, s1, s25, b17, b5) {
    var b2 = Boolean(s1);
    var b4 = (+(b2)) ? true : false;
    var x44;
    if (b4) {
        var e33 = "var opts14 = ['4', '0I9', 'Dz', '9', 'S9Zu', '', 'aMN', 'd'];var b13 = false; for (var idx15 = 0; idx15 < opts14.length; idx15++) { if (opts14[idx15] == eval(\"var e10 = \\\"var b7; if (true) { b7 = !eval(\\\\\\\"b5\\\\\\\"); } else { b7 = eval(\\\\\\\"b5\\\\\\\"); }var s9 = '' + (b7);s9\\\";eval(\\\"eval(e10)\\\")\")) { b13 = true; break; } }var e19 = \"var s18 = '' + (b17);s18\";var e20 = \"eval(e19)\";var l21 = (eval(e20)).length;var b22 = false; if ((b13) | 0 <= l21) { b22 = true; }var s24 = '' + (b22);var e27 = \"var e26 = \\\"s25\\\";eval(e26)\";var b28 = s24 <= eval(e27);var e30 = \"b28\";var s31 = (eval(e30)).toString();(s31).length";
        var e34 = "eval(e33)";
        var opts37 = [3, 62, 1, -95, 1, 97, 0, 1, 6];
        var b36 = false;
        for (var idx38 = 0; idx38 < opts37.length; idx38++) {
            if (opts37[idx38] == eval("eval(e34)")) {
                b36 = true;
            }
        }
        var x39 = (b36) ? 1 : 0;
        x44 = x39;
    } else {
        x44 = eval("((x40).toString()).length");
    }
    return x44;
}
fn45(input_I3, input_S3, input_S2, input_B1, input_B3);
