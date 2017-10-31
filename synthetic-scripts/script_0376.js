// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then (len(input_string('S2')) != len((input_string('S2') + input_string('S3')))) else (input_bool('B1') || ((input_int('I2') > len(str((int(input_bool('B1')) in [108, 7, 2, 1, 3, 0])))) !== ((input_int('I2') % int((if bool(str(input_int('I2'))) then input_string('S2') else input_string('S2')))) < int(input_string('S1'))))))

var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);

var fn47 = function (b10, s4, s37, x11, s1) {
    var s30 = s1;
    var s3 = s1;
    var l2 = (s1).length;
    var b8 = l2;
    var b9 = ((s3 + s4)).length;
    var x46;
    if (true) {
        x46 = b8 != b9;
    } else {
        var b12 = b10;
        var b44;
        if (b10) {
            b44 = true;
        } else {
            var x24 = x11;
            var b21 = false;
            if (x11 > eval("var opts15 = [108, 7, 2, 1, 3, 0];var b14 = false; for (var idx16 = 0; idx16 < opts15.length; idx16++) { if (opts15[idx16] == +(b12)) { b14 = true; break; } }var l18 = ((b14).toString()).length;eval(\"l18\")")) {
                b21 = true;
            }
            var x25 = x24;
            var s31 = s30;
            var s26 = '' + (x25);
            var x32;
            if (Boolean(eval("eval(\"s26\")"))) {
                x32 = s30;
            } else {
                x32 = s31;
            }
            var e34 = "Number(x32)";
            var e39 = "parseInt(s37, 10)";
            var b42 = eval("b21");
            var b43 = ((x24 % eval(e34)) < eval(e39));
            b44 = b42 !== b43;
        }
        x46 = b44;
    }
    return x46;
}
fn47(input_B1, input_S3, input_S1, input_I2, input_S2);
