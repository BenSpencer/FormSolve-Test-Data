// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str((len(str(int(not((input_string('S1') >= str(int((input_bool('B1') == not(bool(str(input_int('I2')))))))))))) != (if bool(str(input_bool('B1'))) then len(str((len(str((input_bool('B1') && regex-test(str(input_int('I3')), /^(wf|[0-9])?$/)))) in [-89, 121, 0, 136, 10, 55, 0, 36, 1, -64]))) else 7))) === str(int(str(len(input_string('S3')))))) then false else input_bool('B3'))

var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);

function fn57(s48, b55, s1, x29, b23, x5) {
    var b3 = b23;
    var s21 = '' + (eval("var e15 = \"var e7 = \\\"var s6 = '' + (x5);s6\\\";var b9 = !(Boolean(eval(e7)));var b10; if (eval(\\\"b3\\\") == b9) { b10 = true; } else { b10 = false; }var s13 = String(+(b10));eval(\\\"s13\\\")\";var b16 = false; if (eval(\"s1\") >= eval(e15)) { b16 = true; }var b18 = !(b16);+(b18)"));
    var l22 = (s21).length;
    var b27 = b23;
    var x44;
    if (eval("!!(String(b23))")) {
        var e37 = "eval(\"var b32 = false; if (eval(\\\"b27\\\") && ((x29).toString()).match(/^(wf|[0-9])?$/) !== null) { b32 = true; }var s34 = (b32).toString();var l35 = (s34).length;l35\")";
        var opts39 = [-89, 121, 0, 136, 10, 55, 0, 36, 1, -64];
        var b38 = false;
        for (var idx40 = 0; idx40 < opts39.length; idx40++) {
            if (opts39[idx40] == eval(e37)) {
                b38 = true;
            }
        }
        var l42 = ('' + (b38)).length;
        x44 = eval("l42");
    } else {
        x44 = 7;
    }
    var b45 = l22;
    var b46 = x44;
    var s47 = '' + (b45 != b46);
    var x51 = parseInt(String((s48).length), 10);
    var b53 = s47;
    var b54 = '' + (x51);
    var x56;
    if (b53 === b54) {
        x56 = false;
    } else {
        x56 = b55;
    }
    return x56;
}
fn57(input_S3, input_B3, input_S1, input_I3, input_B1, input_I2);
