// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(bool(input_string('S2'))) then (if bool(len(input_string('S1'))) then str(bool((if not(not((int(not((len(input_string('S1')) == (if false then input_int('I1') else len(input_string('S3')))))) === (if bool(str(input_bool('B1'))) then len(str(int(bool(int(input_bool('B1')))))) else input_int('I1'))))) then len(str(bool(str(int((input_string('S1') !== input_string('S1'))))))) else int(not((str(input_int('I3')) in ['RC', 'lUxO2', 'wp3Pm', 'u', 'wp2'])))))) else str(len(str(input_bool('B1'))))) else str(int(input_string('S2'))))

var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);

(function (x59, s4, s1, x57, b58, s55) {
    var s67 = s1;
    var b2 = (s1) ? true : false;
    var b3 = !(b2);
    var b62 = b58;
    var s56 = s4;
    var e7 = "var l5 = (s4).length;!!(l5)";
    var fn54 = Function('s11', 's36', 'x10', 'b19', 'x46', "var s8 = s36; var x29 = x10; var e18 = \"var l9 = (s8).length;var l12 = (s11).length;var b14 = false; if (l9 == (false ? x10 : l12)) { b14 = true; }var b16 = !(b14);var x17 = +(b16);x17\";var b22 = b19; var s20 = String(b19);var b21 = Boolean(s20);var x26 = Number(eval(\"(Number(b22)) ? true : false\"));var l28 = (String(x26)).length;var b32 = eval(e18) === eval(\"(b21 ? l28 : x29)\");var b34; if (b32) { b34 = false; } else { b34 = true; }var b35; if (b34) { b35 = false; } else { b35 = true; }var s47 = String(x46);var opts49 = ['RC', 'lUxO2', 'wp3Pm', 'u', 'wp2'];var b48 = false; for (var idx50 = 0; idx50 < opts49.length; idx50++) { if (opts49[idx50] == s47) { b48 = true; break; } }var b51; if (b48) { b51 = false; } else { b51 = true; }var x52 = (b51) ? 1 : 0;var x53; if (b35) { var e43 = \"var s37 = s36; var b38 = s36; var b39 = s37;var x40 = ~~(b38 !== b39);var s41 = '' + (x40);!!(s41)\";var s44 = String(eval(e43)); x53 = (s44).length; } else { x53 = x52; } return x53;");
    var x66;
    if (eval(e7)) {
        x66 = String((fn54(s55, s56, x57, b58, x59)) ? true : false);
    } else {
        x66 = String(('' + (b62)).length);
    }
    var x70;
    if (b3) {
        x70 = x66;
    } else {
        var x68 = parseInt(s67, 10);
        x70 = String(x68);
    }
    return x70;
})(input_I3, input_S1, input_S2, input_I1, input_B1, input_S3);
