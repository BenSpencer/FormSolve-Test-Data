// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(bool(replace(str((if (input_string('S1') in ['T', 'a', 't7', 'pHlC0', '9', 'y3PD']) then len(str(input_int('I3'))) else input_int('I3'))), "j", "WgtxZ")))) then input_int('I2') else len(str(input_int('I2'))))

var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");

function fn25(x5, s1, x20) {
    var x21 = x20;
    var e15 = "var e12 = \"var x8 = x5; var opts3 = ['T', 'a', 't7', 'pHlC0', '9', 'y3PD'];var b2 = false; for (var idx4 = 0; idx4 < opts3.length; idx4++) { if (opts3[idx4] == s1) { b2 = true; } }var l7 = ((x5).toString()).length;var e10 = \\\"(b2 ? l7 : x8)\\\";var s11 = '' + (eval(e10));s11\";var s13 = (eval(e12)).replace(\"j\", \"WgtxZ\");var b14 = Boolean(s13);b14";
    var x17 = ~~ (eval("eval(e15)"));
    var e18 = "x17";
    var b19 = (eval(e18)) ? true : false;
    var x24;
    if (b19) {
        x24 = x20;
    } else {
        var l23 = (String(x21)).length;
        x24 = l23;
    }
    return x24;
}
fn25(input_I3, input_S1, input_I2);
