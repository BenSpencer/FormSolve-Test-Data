// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then str((str(input_bool('B2')) > str(input_int('I2')))) else str(int((if bool(replace(input_string('S3'), "8yh", "")) then (int(input_string('S3')) != int(not((input_string('S2') !== str(input_bool('B2')))))) else bool(str((input_string('S2') in ['bcOz', 'PzvKJ', 'B63A', '', 'KVh45', 'ShOV5'])))))))

var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);

function fn42(x5, b1, s20, s14) {
    var b2 = b1;
    var b21 = b1;
    var s32 = s20;
    var s18 = s14;
    var x38;
    if ((eval("(s14).replace(\"8yh\", \"\")")) ? true : false) {
        x38 = eval("var e29 = \"var x19 = parseInt(s18, 10);var s22 = (b21).toString();var b23 = s20 !== s22;var b27 = x19 != (!(b23)) ? 1 : 0;b27\";var e30 = \"eval(e29)\";eval(e30)");
    } else {
        var opts34 = ['bcOz', 'PzvKJ', 'B63A', '', 'KVh45', 'ShOV5'];
        var b33 = opts34.indexOf(s32) > -1;
        x38 = (String(b33)) ? true : false;
    }
    var x39 = +(x38);
    var s40 = '' + (x39);
    var x41;
    if (b1) {
        x41 = eval("eval(\"eval(\\\"var s4 = (eval(\\\\\\\"b2\\\\\\\")).toString();var s10 = String((s4 > eval(\\\\\\\"(x5).toString()\\\\\\\")));s10\\\")\")");
    } else {
        x41 = s40;
    }
    return x41;
}
fn42(input_I2, input_B2, input_S2, input_S3);
