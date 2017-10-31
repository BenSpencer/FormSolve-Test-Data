// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((replace(input_string('S2'), "QhzO", "HQIp") in ['O', 'i', 'e2z', '3', '', 'Sfv', '', '', 'DRqFL'])) then int(not(((bool(input_int('I1')) || (input_bool('B3') && (int(input_string('S1')) >= int(input_string('S1'))))) !== bool(input_int('I1'))))) else int(str(int(not((input_int('I1') < (if input_bool('B2') then input_int('I1') else int(input_string('S3')))))))))

var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn47 = function (x23, b33, s1, b11, s12, s36) {
    var x32 = x23;
    var opts4 = ['O', 'i', 'e2z', '3', '', 'Sfv', '', '', 'DRqFL'];
    var b3 = opts4.indexOf((s1).replace("QhzO", "HQIp")) > -1;
    var x46;
    if (!(b3)) {
        var x7 = x23;
        var s14 = s12;
        var e15 = "s14";
        var b17 = parseInt(s12, 10);
        var b18 = parseInt(eval(e15), 10);
        var b19 = b11 && b17 >= b18;
        var b21 = false;
        if (eval("var e9 = \"var b8 = Boolean(x7);b8\";eval(e9)") || b19) {
            b21 = true;
        }
        var e27 = "var e26 = \"eval(\\\"var b24 = (x23) ? true : false;b24\\\")\";eval(e26)";
        var b28 = b21;
        var b29 = eval(e27);
        var b30 = !(b28 !== b29);
        var x31 = (b30) | 0;
        x46 = x31;
    } else {
        var x35 = x32;
        var e34 = "b33";
        var x37 = parseInt(s36, 10);
        var e38 = "x37";
        var x39;
        if (eval(e34)) {
            x39 = x35;
        } else {
            x39 = eval(e38);
        }
        var b40 = x32;
        var b41 = x39;
        var b42;
        if (b40 < b41) {
            b42 = false;
        } else {
            b42 = true;
        }
        var x43 = (b42) | 0;
        var x45 = Number('' + (x43));
        x46 = x45;
    }
    return x46;
}
fn47(input_I1, input_B2, input_S2, input_B3, input_S1, input_S3);
