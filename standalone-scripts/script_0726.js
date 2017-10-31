// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B3') then (str(input_bool('B1')) in ['FwU', 'a', '', 'GX', 'L7gr', 'FyNpz', '']) else (true && bool(str((if bool(input_string('S1')) then (int(input_string('S2')) - (if not(input_bool('B1')) then len((if not(bool(int(str(input_bool('B3'))))) then input_string('S3') else str(input_bool('B2')))) else int(input_bool('B1')))) else int(not(input_bool('B3'))))))))

var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn41 = function (s7, s11, b13, b22, b1, s21) {
    var b2 = b13;
    var b15 = b1;
    var opts5 = ['FwU', 'a', '', 'GX', 'L7gr', 'FyNpz', ''];
    var b32 = b15;
    var e9 = "eval(\"s7\")";
    var b10 = (eval(e9)) ? true : false;
    var x35;
    if (b10) {
        var b27 = b13;
        var b14;
        if (b13) {
            b14 = false;
        } else {
            b14 = true;
        }
        var x29;
        if (b14) {
            var e25 = "var b20; if (Boolean(parseInt(eval(\"var s16 = (b15).toString();s16\"), 10))) { b20 = false; } else { b20 = true; }var x24; if (b20) { x24 = s21; } else { x24 = '' + (b22); }x24";
            var l26 = (eval(e25)).length;
            x29 = l26;
        } else {
            x29 = Number(b27);
        }
        x35 = (Number(s11) - x29);
    } else {
        var x34 = (!(b32)) ? 1 : 0;
        x35 = x34;
    }
    var b38 = true;
    var b39 = !! ((x35).toString());
    return (b1 ? opts5.indexOf(String(b2)) > -1 : b38 && b39);
}
fn41(input_S1, input_S2, input_B1, input_B2, input_B3, input_S3);
