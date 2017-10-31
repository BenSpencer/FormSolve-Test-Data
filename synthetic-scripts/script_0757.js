// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then not(not(bool(input_int('I3')))) else (input_bool('B2') === (if bool(int(input_bool('B3'))) then not(input_bool('B2')) else (str(input_bool('B1')) in ['6E7', 'u', '4kl']))))

var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn23 = function (b1, b12, x2, b8) {
    var b14 = b1;
    var b7 = b12;
    var b13 = !(b12);
    var x19;
    if ( !! (eval("Number(b8)"))) {
        x19 = b13;
    } else {
        var s15 = '' + (b14);
        var opts17 = ['6E7', 'u', '4kl'];
        x19 = opts17.indexOf(s15) > -1;
    }
    var b20 = b7 === x19;
    var x22;
    if (b1) {
        x22 = !(!(eval("Boolean(x2)")));
    } else {
        x22 = b20;
    }
    return x22;
}
fn23(input_B1, input_B2, input_I3, input_B3);
