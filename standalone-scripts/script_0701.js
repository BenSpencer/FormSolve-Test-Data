// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str((if input_bool('B2') then (not(bool((if not(input_bool('B1')) then int(input_string('S1')) else int(str(bool(int(((int(str(bool(int(str(int(((str(len(input_string('S3'))) in ['zF40M', '', '', 'cEtAT', '', '', 'OHCv']) != not(bool(input_int('I2')))))))))) in [95, 1, 1, 16, 28]) || bool(input_int('I1')))))))))) && (if not(input_bool('B1')) then input_bool('B1') else regex-test(input_string('S3'), /^([a-z]?|Z)$/))) else not(bool(int(bool(input_string('S2')))))))) then len(str(input_int('I1'))) else 0)

var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");

(function (x12, b2, x29, s46, s4, b1, s51) {
    var x60 = x29;
    var x57;
    if (b1) {
        var s6 = s46;
        var b41 = b2;
        var b3;
        if (b2) {
            b3 = false;
        } else {
            b3 = true;
        }
        var x38;
        if (b3) {
            var x5 = Number(s4);
            x38 = x5;
        } else {
            x38 = parseInt(eval("var l7 = (s6).length;var s8 = String(l7);var opts10 = ['zF40M', '', '', 'cEtAT', '', '', 'OHCv'];var b9 = opts10.indexOf(s8) > -1;var e17 = \"var b16; if (eval(\\\"eval(\\\\\\\"Boolean(x12)\\\\\\\")\\\")) { b16 = false; } else { b16 = true; }b16\";var b18; if (b9) { b18 = !eval(e17); } else { b18 = eval(e17); }var s21 = '' + ((b18) ? 1 : 0);var x22 = Number(s21);var opts27 = [95, 1, 1, 16, 28];var b26 = false; for (var idx28 = 0; idx28 < opts27.length; idx28++) { if (opts27[idx28] == Number((!!(x22)).toString())) { b26 = true; } }var b30 = !!(x29);var x33 = ~~((b26 || b30));var s35 = (Boolean(x33)).toString();s35"), 10);
        }
        var b40 = !((x38) ? true : false);
        var b43 = b41;
        var e45 = "eval(\"b43\")";
        var re47 = /^([a-z]?|Z)$/;
        var x48;
        if (!(b41)) {
            x48 = eval(e45);
        } else {
            x48 = re47.test(s46);
        }
        var b49;
        if (b40) {
            b49 = x48;
        } else {
            b49 = false;
        }
        x57 = b49;
    } else {
        var b52 = (s51) ? true : false;
        var x53 = ~~ (b52);
        var e54 = "x53";
        var b55 = Boolean(eval(e54));
        var b56 = !(b55);
        x57 = b56;
    }
    var s58 = (x57).toString();
    var b59 = !! (s58);
    var s61 = (x60).toString();
    var x63;
    if (b59) {
        x63 = (s61).length;
    } else {
        x63 = 0;
    }
    return x63;
})(input_I2, input_B1, input_I1, input_S3, input_S1, input_B2, input_S2);
