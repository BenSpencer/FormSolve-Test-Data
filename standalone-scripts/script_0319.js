// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if (input_string('S2') in ['Y', 'P', '2pkT', '76tuI', 'caMw', '', '1C', '5erg']) then input_bool('B3') else (str(int(bool(input_string('S1')))) >= str((input_string('S1') >= str((int(str((len(str((input_string('S1') >= str(input_int('I1'))))) + len(str(input_int('I3')))))) == len(str(int(input_string('S1')))))))))) then input_string('S3') else str(len(str(input_int('I1')))))

var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");

function fn53(s46, s1, x14, x21, s11, b5) {
    var x47 = x14;
    var opts3 = ['Y', 'P', '2pkT', '76tuI', 'caMw', '', '1C', '5erg'];
    var e44 = "var s6 = s11; var e8 = \"!!(s6)\";var s12 = s11; var s29 = s12; var e13 = \"s12\";var b16; if (eval(e13) >= String(x14)) { b16 = true; } else { b16 = false; }var s18 = (b16).toString();var e19 = \"s18\";var e22 = \"x21\";var s23 = (eval(e22)).toString();x25 = (eval(e19)).length + (s23).length;var s27 = '' + (x25);var e34 = \"var e33 = \\\"var e31 = \\\\\\\"parseInt(s29, 10)\\\\\\\";var s32 = '' + (eval(e31));s32\\\";eval(e33)\";var b36 = Number(s27) == (eval(e34)).length;var b39 = false; if (s11 >= '' + (b36)) { b39 = true; }((~~(eval(e8))).toString() >= (b39).toString())";
    var x45;
    if (opts3.indexOf(s1) > -1) {
        x45 = b5;
    } else {
        x45 = eval(e44);
    }
    var e51 = "String((String(x47)).length)";
    return (x45 ? s46 : eval(e51));
}
fn53(input_S3, input_S2, input_I1, input_I3, input_S1, input_B3);
