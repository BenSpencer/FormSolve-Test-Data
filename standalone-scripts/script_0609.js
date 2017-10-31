// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (bool(input_int('I2')) !== (input_bool('B2') === (bool(len(str(len(str(bool(int((input_string('S3') >= input_string('S1'))))))))) !== not((str(input_bool('B3')) in ['KJ', 'ha', 'z', '']))))) then ((if not(input_bool('B3')) then 1 else input_int('I2')) >= int(not((input_bool('B1') === not(input_bool('B3')))))) else input_bool('B3'))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);

var fn48 = function (x1, b18, s6, s7, b37, b5) {
    var x32 = x1;
    var b30 = b18;
    var b46 = b18;
    var b8 = false;
    if (s6 >= s7) {
        b8 = true;
    }
    var e11 = "(b8) ? 1 : 0";
    var l14 = ((Boolean(eval(e11))).toString()).length;
    var opts21 = ['KJ', 'ha', 'z', ''];
    var b20 = false;
    for (var idx22 = 0; idx22 < opts21.length; idx22++) {
        if (opts21[idx22] == String(b18)) {
            b20 = true;
            break;
        }
    }
    var b26 = false;
    if (b5 === (Boolean((String(l14)).length) !== !(b20))) {
        b26 = true;
    }
    var b28 = eval("var b3 = !!(eval(\"x1\"));b3") !== b26;
    var b38 = b30;
    var b31 = !(b30);
    var x35;
    if (b31) {
        x35 = 1;
    } else {
        x35 = eval("var e33 = \"x32\";eval(e33)");
    }
    var e36 = "x35";
    var b39;
    if (b38) {
        b39 = false;
    } else {
        b39 = true;
    }
    var b40 = b37 === b39;
    var x43 = (!(b40)) ? 1 : 0;
    var b44 = eval(e36) >= x43;
    return (b28 ? b44 : b46);
}
fn48(input_I2, input_B3, input_S3, input_S1, input_B1, input_B2);
