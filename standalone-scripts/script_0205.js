// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (regex-test(str(int((input_int('I1') == input_int('I3')))), /^[A-Z]+(I|Y)$/) === input_bool('B1')) then not((not(input_bool('B3')) != not(not((input_bool('B2') !== input_bool('B1')))))) else not(bool(int((int(str((input_string('S1') in ['tkI', '3', 'xL9U', 'F', '', 'VxR23', '', 'sQ']))) === int(bool((input_int('I3') * input_int('I3')))))))))

var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);

var fn42 = function (b15, x2, b14, x1, b12, s23) {
    var b8 = b15;
    var x29 = x2;
    var b3 = false;
    if (x1 == x2) {
        b3 = true;
    }
    var s6 = '' + (Number(b3));
    var re7 = new RegExp("^[A-Z]+(I|Y)$");
    var e9 = "b8";
    var b13;
    if (b12) {
        b13 = false;
    } else {
        b13 = true;
    }
    var b16;
    if (b14 !== b15) {
        b16 = true;
    } else {
        b16 = false;
    }
    var b20 = b13;
    var b21 = !(!(b16));
    var x41;
    if ((re7.test(s6) === eval(e9))) {
        x41 = !(b20 != b21);
    } else {
        var opts25 = ['tkI', '3', 'xL9U', 'F', '', 'VxR23', '', 'sQ'];
        var x28 = parseInt((opts25.indexOf(s23) > -1).toString(), 10);
        var e33 = "var x30 = x29; x31 = x29 * x30;x31";
        var x35 = (Boolean(eval(e33))) ? 1 : 0;
        var b36;
        if (x28 === x35) {
            b36 = true;
        } else {
            b36 = false;
        }
        var b40 = !( !! (+(b36)));
        x41 = b40;
    }
    return x41;
}
fn42(input_B1, input_I3, input_B2, input_I1, input_B3, input_S1);
