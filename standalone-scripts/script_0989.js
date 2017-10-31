// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(input_string('S1'))) then (if bool(int((input_string('S1') in ['A', 'pYrTn', 'ZY', 'OrSu', 'IX', '5', '', 'dD', '']))) then input_bool('B1') else (str((input_string('S3') >= str((str((int(input_bool('B1')) <= int(str(input_int('I1'))))) == str((if (0 === input_int('I1')) then bool(input_string('S1')) else input_bool('B3'))))))) > "")) else (not((str(bool(str(input_bool('B2')))) <= input_string('S2'))) === not(input_bool('B2'))))

var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn56 = function (b29, b11, s1, b42, x15, s46, s12) {
    var s24 = s1;
    var x3 = Number(eval("s1"));
    var b4 = !! (x3);
    var b51 = b42;
    var b52 = !(b51);
    var b53 = eval("var s43 = '' + (b42);var s45 = '' + ((s43) ? true : false);var b47 = s45 <= s46;!(b47)");
    var b54 = b52;
    var x55;
    if (b4) {
        var b13 = b11;
        var s5 = s24;
        var opts7 = ['A', 'pYrTn', 'ZY', 'OrSu', 'IX', '5', '', 'dD', ''];
        var b6 = false;
        for (var idx8 = 0; idx8 < opts7.length; idx8++) {
            if (opts7[idx8] == s5) {
                b6 = true;
                break;
            }
        }
        var x9 = ~~ (b6);
        var b10 = Boolean(x9);
        var x21 = x15;
        var x14 = (b13) | 0;
        var s16 = (x15).toString();
        var s20 = '' + ((x14 <= Number(s16)));
        var x30;
        if ((0 === x21)) {
            x30 = eval("var e25 = \"s24\";var e27 = \"!!(eval(e25))\";eval(e27)");
        } else {
            x30 = b29;
        }
        var s31 = String(x30);
        var b32 = s20 == s31;
        var e34 = "b32";
        var b39 = false;
        if ('' + ((s12 >= String(eval(e34)))) > "") {
            b39 = true;
        }
        x55 = (b10 ? b11 : b39);
    } else {
        x55 = b53 === b54;
    }
    return x55;
}
fn56(input_B3, input_B1, input_S1, input_B2, input_I1, input_S2, input_S3);
