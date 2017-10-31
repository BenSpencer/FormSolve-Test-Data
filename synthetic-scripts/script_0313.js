// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (int(((input_int('I3') in [47, 1, 1, 1, 0]) != ((input_int('I3') === 1) === (input_bool('B3') !== input_bool('B3'))))) == input_int('I3')) then input_bool('B2') else (bool(str(len(input_string('S2')))) && input_bool('B3')))

var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S2 = J$.readInput("");

(function (s22, b10, x1, b21) {
    var b27 = b10;
    var x18 = x1;
    var x6 = x1;
    var opts4 = [47, 1, 1, 1, 0];
    var b3 = false;
    for (var idx5 = 0; idx5 < opts4.length; idx5++) {
        if (opts4[idx5] == eval("x1")) {
            b3 = true;
        }
    }
    var b9 = b10;
    var b11 = b9 !== b10;
    var b13 = (x6 === 1);
    var b14 = b11;
    var b15 = b3;
    var b16 = b13 === b14;
    var b19 = (b15 != b16) ? 1 : 0;
    var b20 = x18;
    var b28;
    if (('' + (eval("var l23 = (s22).length;l23"))) ? true : false) {
        b28 = b27;
    } else {
        b28 = false;
    }
    return (b19 == b20 ? b21 : b28);
})(input_S2, input_B3, input_I3, input_B2);
