// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if true then input_bool('B1') else not((if (str(input_int('I3')) == input_string('S3')) then input_bool('B2') else not(bool((if input_bool('B3') then input_int('I2') else int(not(input_bool('B2')))))))))

var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn16 = function (b9, x11, b12) {
    var b13 = !(b12);
    var x14 = (b13) ? 1 : 0;
    var x15;
    if (eval("b9")) {
        x15 = x11;
    } else {
        x15 = x14;
    }
    return x15;
}
    function fn25(b17, x2, x18, b1, s4, b19) {
        var b8 = b19;
        var s3 = (x2).toString();
        var b6;
        if (s3 == eval("s4")) {
            b6 = true;
        } else {
            b6 = false;
        }
        var b20 = !! (fn16(b17, x18, b19));
        var x22;
        if (b6) {
            x22 = b8;
        } else {
            x22 = !(b20);
        }
        return (true ? b1 : !(x22));
    }
fn25(input_B3, input_I3, input_I2, input_B1, input_S3, input_B2);
