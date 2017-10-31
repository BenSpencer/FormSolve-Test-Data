// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(not(not((input_int('I3') !== input_int('I2'))))) then not(not(not((int(str((len(str(input_bool('B1'))) != (if bool(input_int('I3')) then input_int('I3') else int(bool(input_int('I3'))))))) == int(str(input_bool('B1'))))))) else (int(not(input_bool('B2'))) < int(input_bool('B1'))))

var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn48 = function (x2, b36, x1, b27) {
    var x20 = x1;
    var b40 = b27;
    var b3 = x1;
    var b4 = x2;
    var b7 = !(!(!(b3 !== b4)));
    var e46 = "var b37; if (b36) { b37 = false; } else { b37 = true; }var e38 = \"b37\";var e42 = \"(b40) ? 1 : 0\";var e43 = \"eval(e42)\";var b44 = ~~(eval(e38)); var b45 = eval(e43);b44 < b45";
    var x47;
    if (b7) {
        var b8 = b27;
        var e25 = "var fn19 = function(x11) { var x13 = x11; var x15 = x11; var b12 = (x11) ? true : false;var b16 = (x15) ? true : false;var x18; if (b12) { x18 = eval(\"x13\"); } else { x18 = Number(b16); } return x18; } var b22 = false; if ((String(b8)).length != eval(\"fn19(x20)\")) { b22 = true; }var s24 = String(b22);s24";
        var s28 = '' + (b27);
        var e30 = "parseInt(s28, 10)";
        var b31 = Number(eval(e25));
        var b32 = eval(e30);
        var b33 = !(b31 == b32);
        var b35;
        if (!(b33)) {
            b35 = false;
        } else {
            b35 = true;
        }
        x47 = b35;
    } else {
        x47 = eval(e46);
    }
    return x47;
}
fn48(input_I2, input_B2, input_I3, input_B1);
