// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I2')) then input_string('S1') else str(not((not(bool(input_int('I3'))) == ((str(not(bool(int(bool(input_int('I1')))))) + str((input_int('I1') === len(str(bool(input_string('S3'))))))) >= str(regex-test(str(input_int('I3')), /^zO(rDK|[A-Z]*)lPG\nLCu$/)))))))

var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");

function fn38(s3, x1, x25, s15, x14) {
    var b2 = Boolean(x1);
    var x37;
    if (b2) {
        x37 = s3;
    } else {
        var x4 = x25;
        var x7 = x14;
        var e10 = "(!!(x7)) ? 1 : 0";
        var b12 = !( !! (eval(e10)));
        var s13 = String(b12);
        var b16 = (s15) ? true : false;
        var s18 = '' + (eval("b16"));
        var l19 = (s18).length;
        var b20 = x14 === l19;
        var s22 = String(b20);
        var re27 = new RegExp("^zO(rDK|[A-Z]*)lPG\\nLCu$");
        var s28 = (re27.test('' + (x25))).toString();
        var b29 = false;
        if ((s13 + s22) >= s28) {
            b29 = true;
        }
        var b32 = !((x4) ? true : false);
        var b33 = eval("b29");
        var e34 = "b32 == b33";
        var s36 = '' + (!(eval(e34)));
        x37 = s36;
    }
    return x37;
}
fn38(input_S1, input_I2, input_I3, input_S3, input_I1);
