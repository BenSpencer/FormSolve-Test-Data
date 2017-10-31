// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_string('S2') != str((if (int((int(bool((len(input_string('S1')) - input_int('I3')))) >= input_int('I2'))) in [4, 13, 1, 0, 0, 4, 1, 4, 97, 0]) then input_int('I1') else input_int('I2')))) then (int((str((input_int('I3') - input_int('I2'))) + str(input_bool('B2')))) === int(str(bool(input_string('S3'))))) else true)

var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);

var fn41 = function (s2, x22, s34, b29, x16, x17, s1) {
    var x24 = x17;
    var x4 = x22;
    var x9 = x17;
    var l3 = (s2).length;
    x5 = l3 - x4;
    var b7 = (x5) ? true : false;
    var b10 = false;
    if ((b7) | 0 >= x9) {
        b10 = true;
    }
    var opts14 = [4, 13, 1, 0, 0, 4, 1, 4, 97, 0];
    var b13 = opts14.indexOf((b10) ? 1 : 0) > -1;
    var x18;
    if (b13) {
        x18 = x16;
    } else {
        x18 = x17;
    }
    var b20 = false;
    if (s1 != '' + (x18)) {
        b20 = true;
    }
    x26 = eval("x22") - eval("x24");
    var s30 = '' + (b29);
    var x31 = String(x26);
    var x32 = s30;
    var x33 = parseInt(x31 + x32, 10);
    var b35 = (s34) ? true : false;
    var x37 = Number((b35).toString());
    var b38;
    if (x33 === x37) {
        b38 = true;
    } else {
        b38 = false;
    }
    var x40;
    if (b20) {
        x40 = b38;
    } else {
        x40 = true;
    }
    return x40;
}
fn41(input_S1, input_I3, input_S3, input_B2, input_I1, input_I2, input_S2);
