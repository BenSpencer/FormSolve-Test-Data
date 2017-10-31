// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then input_string('S3') else str((int(str(int(not((((input_int('I1') in [1, 0, 0, 1, 99, 137]) !== ((if input_bool('B2') then (if input_bool('B3') then input_string('S3') else "tq") else (input_string('S2') + str(input_bool('B1')))) in ['Nxis9', 'Ard', '', 'gnGpj', 'FlYnd', 'lnpt', 'HF', 'cGl'])) === not(bool(input_int('I1')))))))) % int(str((input_int('I3') == input_int('I3')))))))

var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);

var fn20 = function (b9, s11, s13, b14, b10) {
    var x19;
    if (b9) {
        x19 = (b10 ? s11 : "tq");
    } else {
        var e16 = "var s15 = '' + (b14);s15";
        x19 = (s13 + eval(e16));
    }
    return x19;
}
    function fn52(b25, b1, x3, s2, b24, x42, s23) {
        var s22 = s2;
        var b21 = b1;
        var e41 = "var e37 = \"var x31 = x3; var opts27 = ['Nxis9', 'Ard', '', 'gnGpj', 'FlYnd', 'lnpt', 'HF', 'cGl'];var b26 = false; for (var idx28 = 0; idx28 < opts27.length; idx28++) { if (opts27[idx28] == fn20(b21, s22, s23, b24, b25)) { b26 = true; } }var b29 = eval(\\\"var e7 = \\\\\\\"var opts5 = [1, 0, 0, 1, 99, 137];opts5.indexOf(x3) > -1\\\\\\\";eval(e7)\\\"); var b30 = b26;var b34; if (b29 !== b30 === !((x31) ? true : false)) { b34 = true; } else { b34 = false; }var b36 = !(b34);b36\";var x38 = (eval(e37)) ? 1 : 0;var s39 = (x38).toString();var x40 = Number(s39);x40";
        var x43 = x42;
        var b44 = x42;
        var b45 = x43;
        var s46 = '' + (b44 == b45);
        var x47 = parseInt(s46, 10);
        x48 = eval(e41) % x47;
        return (b1 ? s2 : String(x48));
    }
fn52(input_B3, input_B2, input_I1, input_S3, input_B1, input_I3, input_S2);
