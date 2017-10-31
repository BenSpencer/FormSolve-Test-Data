// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(input_string('S3')) in [13, 55, 9, -68, 1, 121]) then input_int('I3') else int(bool(len(str(int(str(int((if input_bool('B3') then not(input_bool('B3')) else not(input_bool('B3')))))))))))

var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn22 = function (b11, x7, s1) {
    var opts4 = [13, 55, 9, -68, 1, 121];
    var b3 = false;
    for (var idx5 = 0; idx5 < opts4.length; idx5++) {
        if (opts4[idx5] == Number(s1)) {
            b3 = true;
        }
    }
    var x21;
    if (eval("b3")) {
        x21 = x7;
    } else {
        var b8 = b11;
        var b9 = b11;
        var x13;
        if (b8) {
            x13 = !(b9);
        } else {
            var b12 = !(b11);
            x13 = b12;
        }
        var s15 = '' + (+(x13));
        var x16 = parseInt(s15, 10);
        var l18 = ('' + (x16)).length;
        var x20 = Number((l18) ? true : false);
        x21 = x20;
    }
    return x21;
}
fn22(input_B3, input_I3, input_S3);
