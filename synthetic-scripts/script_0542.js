// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((str(input_bool('B3')) in ['3DqC', 'B', '6RiQ']) === (if regex-test(str(input_int('I1')), /^(\DO|[A-Z]*YE)$/) then bool(int(str(len(input_string('S2'))))) else input_bool('B3'))) then (if bool(input_string('S1')) then int((int(bool(input_int('I3'))) < int(bool(len(input_string('S1')))))) else -28) else int(input_string('S2')))

var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);

function fn45(x40, s20, s41, b1, x19) {
    var s42 = s20;
    var b21 = b1;
    var s2 = (b1).toString();
    var opts4 = ['3DqC', 'B', '6RiQ'];
    var b3 = false;
    for (var idx5 = 0; idx5 < opts4.length; idx5++) {
        if (opts4[idx5] == s2) {
            b3 = true;
        }
    }
    var fn18 = function (x6, s10, b16) {
        var e7 = "x6";
        var s8 = '' + (eval(e7));
        var x17;
        if ((s8).match(/^(\DO|[A-Z]*YE)$/) !== null) {
            x17 = (eval("var l11 = (s10).length;var s12 = String(l11);Number(s12)")) ? true : false;
        } else {
            x17 = b16;
        }
        return x17;
    }
    var b22 = b3 === fn18(x19, s20, b21);
    var x43 = parseInt(s42, 10);
    var x44;
    if (b22) {
        x44 = (function (x27, s24) {
            var s30 = s24;
            var e26 = "!!(s24)";
            var x29 = ( !! (x27)) ? 1 : 0;
            var e34 = "+(!!((s30).length))";
            var b35;
            if (x29 < eval(e34)) {
                b35 = true;
            } else {
                b35 = false;
            }
            var x37 = Number(b35);
            var x38;
            if (eval(e26)) {
                x38 = x37;
            } else {
                x38 = -28;
            }
            return x38;
        })(x40, s41);
    } else {
        x44 = x43;
    }
    return x44;
}
fn45(input_I3, input_S2, input_S1, input_B3, input_I1);
