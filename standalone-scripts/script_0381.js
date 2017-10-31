// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(((if ((input_string('S2') + input_string('S1')) >= input_string('S1')) then (str(int(input_string('S2'))) > input_string('S1')) else (bool(input_string('S3')) !== (int(str(int((input_string('S3') >= "UeY")))) in [1, 1, 92, 90, 79, 0, 1, 0]))) && true)) < (input_int('I2') - 1)) then input_int('I3') else int(input_string('S1')))

var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");

var fn50 = function (s33, x40, s35, x46, s34) {
    var s47 = s34;
    var b36;
    if (true) {
        var fn32 = function (s16, s13, s1) {
            var s10 = s1;
            var s3 = s13;
            var s7 = s3;
            var b8 = eval("(eval(\"s1\") + s3)");
            var b9 = s7;
            var x31;
            if (b8 >= b9) {
                x31 = ('' + (parseInt(s10, 10)) > s13);
            } else {
                var s18 = s16;
                var b17 = (s16) ? true : false;
                var e28 = "var opts26 = [1, 1, 92, 90, 79, 0, 1, 0];var b25 = opts26.indexOf(parseInt(eval(\"var b19 = s18 >= \\\"UeY\\\";var s22 = '' + ((b19) ? 1 : 0);s22\"), 10)) > -1;b25";
                var b29 = b17;
                var b30 = eval(e28);
                x31 = b29 !== b30;
            }
            return x31;
        }
        b36 = fn32(s33, s34, s35);
    } else {
        b36 = false;
    }
    var x39 = ~~ (eval("b36"));
    var b44 = x39 < (eval("x40") - 1);
    var x49;
    if (b44) {
        x49 = x46;
    } else {
        x49 = parseInt(s47, 10);
    }
    return x49;
}
fn50(input_S3, input_I2, input_S2, input_I3, input_S1);
