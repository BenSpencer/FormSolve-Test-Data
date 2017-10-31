// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I2') !== int(not(bool(input_int('I1'))))) then int((str(input_bool('B3')) === str(bool(input_int('I1'))))) else int(input_bool('B3')))

var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);

(function (x10, b16, x1) {
    var x2 = x10;
    var b8 = b16;
    var x18;
    if ((x1 !== (!((x2) ? true : false)) | 0)) {
        var b11 = (x10) ? true : false;
        var s12 = (b11).toString();
        x18 = (('' + (b8) === s12)) ? 1 : 0;
    } else {
        var x17 = (b16) ? 1 : 0;
        x18 = x17;
    }
    return x18;
})(input_I1, input_B3, input_I2);
