// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(len(input_string('S2')))) then int(str(input_bool('B3'))) else int(str((if true then (input_string('S1') !== str(bool(str((int(input_bool('B1')) >= int(bool(int(input_bool('B2'))))))))) else (int(str((if bool(input_string('S3')) then true else not(input_bool('B1'))))) in [0, 10, 1, 71, -94, 0])))))

var input_B3 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

function fn45(s29, b13, s9, b10, b6, s1) {
    var e5 = "var b4; if (!!((s1).length)) { b4 = false; } else { b4 = true; }b4";
    var s7 = (b6).toString();
    var x8 = Number(s7);
    var b31 = b10;
    var b27;
    if (s9 !== eval("var s23 = ((String(eval(\"var e11 = \\\"b10\\\";var x14 = ~~(b13);var e19 = \\\"(~~(eval(e11)) >= (!!(x14)) | 0)\\\";eval(e19)\"))) ? true : false).toString();var e24 = \"s23\";eval(\"eval(e24)\")")) {
        b27 = true;
    } else {
        b27 = false;
    }
    var x41;
    if (true) {
        x41 = b27;
    } else {
        var x34;
        if (Boolean(s29)) {
            x34 = true;
        } else {
            var e32 = "b31";
            x34 = !(eval(e32));
        }
        var s35 = String(x34);
        var opts38 = [0, 10, 1, 71, -94, 0];
        var b37 = false;
        for (var idx39 = 0; idx39 < opts38.length; idx39++) {
            if (opts38[idx39] == parseInt(s35, 10)) {
                b37 = true;
            }
        }
        x41 = eval("b37");
    }
    var s42 = String(x41);
    var x43 = parseInt(s42, 10);
    return (eval(e5) ? x8 : x43);
}
fn45(input_S3, input_B2, input_S1, input_B1, input_B3, input_S2);
