// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str((input_int('I1') == int(bool(str(input_bool('B1')))))) in ['BKw', 'QU', 'RcmL', 'LWlBp', 'oOY']) then bool(input_int('I2')) else not(input_bool('B1')))

var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);

var fn19 = function (x13, x1, b15) {
    var b2 = b15;
    var e12 = "var s3 = (b2).toString();var b4 = (s3) ? true : false;var x5 = ~~(b4);var opts10 = ['BKw', 'QU', 'RcmL', 'LWlBp', 'oOY'];var b9 = opts10.indexOf('' + ((x1 == x5))) > -1;b9";
    var x18;
    if (eval(e12)) {
        x18 = Boolean(x13);
    } else {
        var e16 = "b15";
        var b17 = !(eval(e16));
        x18 = b17;
    }
    return x18;
}
fn19(input_I2, input_I1, input_B1);
