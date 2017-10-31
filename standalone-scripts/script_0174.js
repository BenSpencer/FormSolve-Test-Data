// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S2')) then not((int((bool(input_int('I1')) || (input_string('S2') in ['', 'GH8m', 'N', 'D0x', '', 'L']))) < 1)) else (if bool(input_string('S1')) then (if ((len(input_string('S2')) > int(bool(str(input_bool('B2'))))) !== bool(int(str(input_bool('B1'))))) then (int(bool(input_string('S3'))) in [144, 149, 2, 88]) else regex-test(input_string('S3'), /^(Wdp.*|[0-9]_)o$/)) else input_bool('B2')))

var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn47 = function (b28, s36, b22, s20) {
    var s44 = s36;
    var l21 = (s20).length;
    var b24 = ((b22).toString()) ? true : false;
    var b26 = false;
    if (l21 > +(b24)) {
        b26 = true;
    }
    var b33 = !! (eval("var s30 = String(eval(\"b28\"));var x31 = parseInt(s30, 10);x31"));
    var b34 = b26;
    var b35 = b33;
    var e42 = "var b37 = !!(s36);var opts40 = [144, 149, 2, 88];var b39 = false; for (var idx41 = 0; idx41 < opts40.length; idx41++) { if (opts40[idx41] == +(b37)) { b39 = true; } }b39";
    var x46;
    if (b34 !== b35) {
        x46 = eval("eval(e42)");
    } else {
        var re45 = /^(Wdp.*|[0-9]_)o$/;
        x46 = re45.test(s44);
    }
    return x46;
}
    function fn55(s49, s18, b48, b50, s1, x3) {
        var s5 = s1;
        var s51 = s1;
        var b2 = !! (s1);
        var e11 = "var b4 = Boolean(x3);var opts7 = ['', 'GH8m', 'N', 'D0x', '', 'L'];var b6 = false; for (var idx8 = 0; idx8 < opts7.length; idx8++) { if (opts7[idx8] == s5) { b6 = true; break; } }var b9; if (b4) { b9 = true; } else { b9 = b6; }b9";
        var b14 = false;
        if (eval("Number(eval(e11))") < 1) {
            b14 = true;
        }
        var b17 = !(eval("b14"));
        var b52 = b50;
        var b19 = (s18) ? true : false;
        var x53;
        if (b19) {
            x53 = fn47(b48, s49, b50, s51);
        } else {
            x53 = b52;
        }
        return (b2 ? b17 : x53);
    }
fn55(input_S3, input_S1, input_B1, input_B2, input_S2, input_I1);
