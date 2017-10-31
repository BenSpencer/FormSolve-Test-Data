// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then not(input_bool('B3')) else (input_string('S1') in ['mVlSk', '7', 's7V', 'V5', 'D2pe', 'qhX', '0', 'MK', 'ms']))

var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);

(function (b2, b1, s4) {
    var opts6 = ['mVlSk', '7', 's7V', 'V5', 'D2pe', 'qhX', '0', 'MK', 'ms'];
    var b5 = false;
    for (var idx7 = 0; idx7 < opts6.length; idx7++) {
        if (opts6[idx7] == s4) {
            b5 = true;
            break;
        }
    }
    return (b1 ? !(b2) : b5);
})(input_B3, input_B1, input_S1);
