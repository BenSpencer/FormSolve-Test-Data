// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if bool(regex-replace(input_string('S3'), /\D([0-9]|w)?/, "KgG")) then (bool(int((if not(not(not(bool(len(input_string('S2')))))) then (if bool(str(bool(len(input_string('S3'))))) then str(bool(len(input_string('S2')))) else input_string('S3')) else input_string('S3')))) !== bool(int(input_string('S2')))) else input_bool('B3')) then input_bool('B2') else bool(int(not(input_bool('B3')))))

var input_S2 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);

var fn47 = function (b36, s17, b38, s1) {
    var b40 = b36;
    var s12 = s1;
    var re3 = new RegExp("\\D([0-9]|w)?");
    var s2 = (s1).replace(re3, "KgG");
    var b4 = !! (s2);
    var x37;
    if (b4) {
        var s28 = s17;
        var e26 = "var s5 = s17; var s23 = s12; var s21 = s12; var b19 = ((s17).length) ? true : false;var x22; if (Boolean('' + (!!((s12).length)))) { x22 = (b19).toString(); } else { x22 = s21; }var x24; if (!(eval(\"var b7 = !!((s5).length);var b9 = !(!(b7));b9\"))) { x24 = x22; } else { x24 = s23; }Number(x24)";
        var b27 = Boolean(eval(e26));
        var e33 = "var x29 = Number(s28);var e30 = \"x29\";var b31 = !!(eval(e30));eval(\"b31\")";
        x37 = (b27 !== eval(e33));
    } else {
        x37 = b36;
    }
    var x46;
    if (x37) {
        var e39 = "b38";
        x46 = eval(e39);
    } else {
        var e43 = "var e41 = \"b40\";var b42; if (eval(e41)) { b42 = false; } else { b42 = true; }b42";
        x46 = (~~(eval(e43))) ? true : false;
    }
    return x46;
}
fn47(input_B3, input_S2, input_B2, input_S3);
