// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((int((input_int('I3') in [-69, 6, 185, 7, 0, 74, -96, 2])) !== len(str(((not((str(input_int('I2')) > input_string('S1'))) !== (int(input_string('S2')) > input_int('I3'))) != input_bool('B2')))))) then input_bool('B2') else regex-test(input_string('S2'), /^(b|[-_ ]?)$/))

var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);

var fn33 = function (b20, x6, x1, s8, s13) {
    var s29 = s13;
    var b28 = b20;
    var x15 = x1;
    var opts3 = [-69, 6, 185, 7, 0, 74, -96, 2];
    var b2 = false;
    for (var idx4 = 0; idx4 < opts3.length; idx4++) {
        if (opts3[idx4] == x1) {
            b2 = true;
        }
    }
    var x5 = +(b2);
    var e12 = "var b11 = !(('' + (x6) > s8));b11";
    var x14 = Number(s13);
    var b18 = eval(e12);
    var b19 = (x14 > x15);
    var b25 = x5 !== ('' + ((b18 !== b19 != b20))).length;
    return (!(b25) ? b28 : eval("var re30 = new RegExp(\"^(b|[-_ ]?)$\");re30.test(s29)"));
}
fn33(input_B2, input_I2, input_I3, input_S1, input_S2);
