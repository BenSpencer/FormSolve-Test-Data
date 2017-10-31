// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (((if bool(input_string('S1')) then int(str(bool(len(str((input_string('S3') in ['TeHuk', 'vWA0w', 'lhFN', '38F', 'EJk'])))))) else input_int('I2')) <= int(input_bool('B3'))) && (input_string('S3') in ['dSWOv', 'yVb8Z', 'axt1k', 'qARBj', 'R', 'Jk', '3m', 'EG', 'IR'])) then int(input_string('S3')) else int(input_bool('B3')))

var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");

(function (s19, x13, b15, s1) {
    var b27 = b15;
    var s25 = s19;
    var s3 = s19;
    var x14;
    if ((s1) ? true : false) {
        x14 = Number((eval("var opts5 = ['TeHuk', 'vWA0w', 'lhFN', '38F', 'EJk'];var b4 = false; for (var idx6 = 0; idx6 < opts5.length; idx6++) { if (opts5[idx6] == s3) { b4 = true; } }var s7 = (b4).toString();var l8 = (s7).length;(l8) ? true : false")).toString());
    } else {
        x14 = x13;
    }
    var b17 = x14 <= +(b15);
    var opts21 = ['dSWOv', 'yVb8Z', 'axt1k', 'qARBj', 'R', 'Jk', '3m', 'EG', 'IR'];
    var b20 = false;
    for (var idx22 = 0; idx22 < opts21.length; idx22++) {
        if (opts21[idx22] == s19) {
            b20 = true;
        }
    }
    var b23 = false;
    if (b17 && b20) {
        b23 = true;
    }
    var x26 = parseInt(s25, 10);
    var x29;
    if (b23) {
        x29 = x26;
    } else {
        x29 = (b27) ? 1 : 0;
    }
    return x29;
})(input_S3, input_I2, input_B3, input_S1);
