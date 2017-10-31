// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I1') !== int(str((bool(int(str(int(bool(int((input_string('S3') <= str((input_int('I1') === input_int('I3')))))))))) == bool(len(input_string('S3'))))))) then (len(str(input_int('I3'))) * int(input_bool('B3'))) else 77)

var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn36 = function (s18, b30, x27, x1) {
    var x4 = x27;
    var x3 = x1;
    var s2 = s18;
    var e13 = "var b6; if (x3 === eval(\"x4\")) { b6 = true; } else { b6 = false; }var b9 = false; if (s2 <= '' + (b6)) { b9 = true; }var x11 = (b9) ? 1 : 0;!!(x11)";
    var x14 = Number(eval(e13));
    var s15 = (x14).toString();
    var l19 = (s18).length;
    var b20 = Boolean(l19);
    var b21 = (parseInt(s15, 10)) ? true : false == b20;
    var b25 = x1;
    var b26 = Number((b21).toString());
    var x35;
    if (b25 !== b26) {
        var x31 = Number(b30);
        x35 = (((x27).toString()).length * eval("x31"));
    } else {
        x35 = 77;
    }
    return x35;
}
fn36(input_S3, input_B3, input_I3, input_I1);
