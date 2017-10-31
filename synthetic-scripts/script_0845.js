// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then str((input_bool('B3') || (input_string('S2') === input_string('S2')))) else str((if bool(str(input_int('I2'))) then (int(bool(int(input_string('S1')))) * int(input_bool('B1'))) else int((int(input_string('S3')) in [0, 1, 65, 114, 82, 0, 1])))))

var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");

function fn39(b19, b1, s13, s27, s3, x10) {
    var b2 = b1;
    var x38;
    if (b1) {
        var s4 = s3;
        var b5 = s3;
        var b6 = s4;
        x38 = '' + ((b2 || b5 === b6));
    } else {
        var x36;
        if (((x10).toString()) ? true : false) {
            x36 = eval("var b16 = Boolean(eval(\"var x14 = parseInt(s13, 10);x14\"));var e18 = \"(b16) | 0\";var x23 = +(eval(\"eval(\\\"eval(\\\\\\\"b19\\\\\\\")\\\")\"));x24 = eval(e18) * x23;x24");
        } else {
            var e28 = "s27";
            var e29 = "eval(e28)";
            var e30 = "eval(e29)";
            var x31 = parseInt(eval(e30), 10);
            var opts33 = [0, 1, 65, 114, 82, 0, 1];
            var b32 = false;
            for (var idx34 = 0; idx34 < opts33.length; idx34++) {
                if (opts33[idx34] == x31) {
                    b32 = true;
                }
            }
            var x35 = ~~ (b32);
            x36 = x35;
        }
        x38 = String(x36);
    }
    return x38;
}
fn39(input_B1, input_B3, input_S1, input_S3, input_S2, input_I2);
