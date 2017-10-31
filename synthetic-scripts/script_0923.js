// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((if regex-test(input_string('S3'), /^n(xXy_|[0-9])?$/) then true else (int((int(str(input_int('I2'))) > (if not((input_bool('B1') === (input_string('S2') > input_string('S2')))) then input_int('I1') else input_int('I3')))) !== input_int('I2')))) then input_bool('B2') else not((str(input_bool('B1')) in ['05Dq', 'rzyT', '4', '', '6', 'mC3Tj', 'rZUiy', 'dGRq', ''])))

var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);

(function (s28, b27, s29, x31, b33, x26, x30) {
    var b34 = b27;
    var fn25 = Function('x16', 'b6', 's1', 's8', 'x15', 'x21', "var re2 = new RegExp(\"^n(xXy_|[0-9])?$\");var x3 = x21; var x5 = parseInt(String(x3), 10);var s9 = s8; var b10; if (s8 > s9) { b10 = true; } else { b10 = false; }var b12 = eval(\"b6\") === b10;var x17; if (!(b12)) { x17 = x15; } else {  x17 = x16; }var b18 = x5; var b19 = x17;var x20 = (b18 > b19) ? 1 : 0;var b22 = x20 !== x21; return (re2.test(s1) ? true : b22);");
    var x40;
    if (!(fn25(x26, b27, s28, s29, x30, x31))) {
        x40 = b33;
    } else {
        var s35 = (b34).toString();
        var opts37 = ['05Dq', 'rzyT', '4', '', '6', 'mC3Tj', 'rZUiy', 'dGRq', ''];
        var b36 = false;
        for (var idx38 = 0; idx38 < opts37.length; idx38++) {
            if (opts37[idx38] == s35) {
                b36 = true;
                break;
            }
        }
        var b39;
        if (b36) {
            b39 = false;
        } else {
            b39 = true;
        }
        x40 = b39;
    }
    return x40;
})(input_S3, input_B1, input_S2, input_I2, input_B2, input_I3, input_I1);
