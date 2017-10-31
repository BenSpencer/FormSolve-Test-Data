// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if regex-test(str(input_int('I3')), /^(\dgiy|[a-z]+)$/) then not((if input_bool('B1') then bool(len(input_string('S2'))) else (input_int('I3') == (input_int('I1') / len(str((int((str(bool(str((input_string('S3') in ['apDZg', 'yXKg', '', '', '7', 'Bo'])))) + replace(str(input_bool('B1')), "vt", "VId"))) % int((input_string('S1') >= input_string('S3')))))))))) else input_bool('B2')) then ((input_bool('B3') || input_bool('B3')) && bool(str((input_string('S2') <= input_string('S3'))))) else bool(input_string('S1')))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);

var fn72 = function (b52, s45, s50, b47, x1, x49, b56, s46) {
    var s61 = s50;
    var s60 = s46;
    var s69 = s45;
    var x48 = x1;
    var e3 = "var s2 = (x1).toString();s2";
    var x53;
    if ((eval(e3)).match(/^(\dgiy|[a-z]+)$/) !== null) {
        x53 = !((function (s27, s6, b21, x10, x11, s13) {
            var b5 = b21;
            var e7 = "s6";
            var b9 = Boolean((eval(e7)).length);
            var e12 = "x11";
            x38 = eval(e12) / (eval("var s28 = s13; var opts15 = ['apDZg', 'yXKg', '', '', '7', 'Bo'];var b14 = false; for (var idx16 = 0; idx16 < opts15.length; idx16++) { if (opts15[idx16] == s13) { b14 = true; } }var s17 = '' + (b14);var s19 = '' + (!!(s17));var e20 = \"s19\";var s23 = ('' + (b21)).replace(\"vt\", \"VId\");var x24 = eval(e20); var x25 = s23;var x26 = Number(x24 + x25);var x32 = +(eval(\"var b29 = s27 >= s28;b29\"));var s35 = '' + ((x26 % x32));s35")).length;
            var x43;
            if (b5) {
                x43 = b9;
            } else {
                x43 = eval("(x10 == x38)");
            }
            return x43;
        })(s45, s46, b47, x48, x49, s50));
    } else {
        x53 = b52;
    }
    var e54 = "x53";
    var e55 = "eval(e54)";
    var x71;
    if (eval(e55)) {
        var b57 = b56;
        var b58;
        if (b57) {
            b58 = true;
        } else {
            b58 = b56;
        }
        var e66 = "var b62 = s60 <= s61;var b65 = (String(b62)) ? true : false;b65";
        var b67 = b58;
        var b68 = eval(e66);
        x71 = b67 && b68;
    } else {
        var b70 = (s69) ? true : false;
        x71 = b70;
    }
    return x71;
}
fn72(input_B2, input_S1, input_S3, input_B1, input_I3, input_I1, input_B3, input_S2);
