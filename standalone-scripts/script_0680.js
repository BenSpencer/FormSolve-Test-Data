// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B1') != (if (input_string('S3') in ['J', 'TU2C', '', 'vahG', 'hLbJ', 's']) then input_bool('B1') else bool(input_string('S3')))) then (if bool(input_int('I3')) then (int(input_string('S2')) in [-11, 1, 3, -67, 104]) else (if input_bool('B2') then (if input_bool('B2') then bool(int(input_string('S3'))) else not(bool(input_string('S3')))) else not(input_bool('B1')))) else input_bool('B2'))

var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

(function (s11, b22, s17, x15, b1) {
    var b38 = b22;
    var b34 = b1;
    var s25 = s11;
    var b12 = b1;

    function fn10(s2, b6) {
        var s7 = s2;
        var opts4 = ['J', 'TU2C', '', 'vahG', 'hLbJ', 's'];
        var b3 = false;
        for (var idx5 = 0; idx5 < opts4.length; idx5++) {
            if (opts4[idx5] == s2) {
                b3 = true;
                break;
            }
        }
        var b8 = !! (s7);
        var x9;
        if (b3) {
            x9 = b6;
        } else {
            x9 = b8;
        }
        return x9;
    }
    var b13;
    if (b1) {
        b13 = !fn10(s11, b12);
    } else {
        b13 = fn10(s11, b12);
    }
    var e39 = "b38";
    var x40;
    if (b13) {
        var b16 = (x15) ? true : false;
        var x37;
        if (b16) {
            var opts20 = [-11, 1, 3, -67, 104];
            var b19 = opts20.indexOf(Number(s17)) > -1;
            x37 = b19;
        } else {
            var b24 = b22;
            var e23 = "b22";
            var b35;
            if (b34) {
                b35 = false;
            } else {
                b35 = true;
            }
            var x36;
            if (eval(e23)) {
                var s30 = s25;
                var x33;
                if (b24) {
                    x33 = eval("var b28 = !!(Number(eval(\"s25\")));b28");
                } else {
                    x33 = !((s30) ? true : false);
                }
                x36 = x33;
            } else {
                x36 = b35;
            }
            x37 = x36;
        }
        x40 = x37;
    } else {
        x40 = eval(e39);
    }
    return x40;
})(input_S3, input_B2, input_S2, input_I3, input_B1);
