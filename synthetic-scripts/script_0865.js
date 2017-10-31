// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((if not(bool(input_int('I3'))) then bool(str(input_bool('B2'))) else (int(not(input_bool('B2'))) <= len(str(bool(input_int('I3')))))) === bool(str(bool(str(input_bool('B3')))))) then str(bool(len(str(input_bool('B1'))))) else (str(len(str(int(input_string('S3'))))) + str((input_int('I3') / int(input_string('S2'))))))

var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);

var fn49 = function (x1, b27, s33, b5, b19, s40) {
    var x39 = x1;
    var b8 = b5;
    var x11 = x1;
    var b2 = (x1) ? true : false;
    var b4 = !(eval("b2"));
    var x18;
    if (b4) {
        var s6 = (b5).toString();
        x18 = !! (s6);
    } else {
        var b9 = !(b8);
        var s14 = ( !! (eval("x11"))).toString();
        var l15 = (s14).length;
        var b16 = false;
        if (~~(b9) <= l15) {
            b16 = true;
        }
        x18 = b16;
    }
    var s22 = String(Boolean((b19).toString()));
    var b24 = x18 === (s22) ? true : false;
    var l37 = (eval("var s35 = (parseInt(s33, 10)).toString();s35")).length;
    var s38 = '' + (l37);
    x43 = x39;
    x44 = eval("Number(s40)");
    var x46 = s38;
    var x47 = '' + (x43 / x44);
    var x48;
    if (eval("b24")) {
        x48 = String(Boolean((eval("'' + (b27)")).length));
    } else {
        x48 = x46 + x47;
    }
    return x48;
}
fn49(input_I3, input_B1, input_S3, input_B2, input_B3, input_S2);
