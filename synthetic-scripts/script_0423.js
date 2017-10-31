// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(len(input_string('S3')))) then str(input_bool('B2')) else str(bool((if bool(int(str((if (input_string('S3') === str((bool(input_string('S1')) || input_bool('B3')))) then int((input_string('S3') > input_string('S2'))) else input_int('I3'))))) then input_string('S2') else str(len(str(int((input_string('S2') == str(int(bool(str(input_int('I3'))))))))))))))

var input_B3 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");

var fn46 = function (x23, b12, s1, s10, b6, s19) {
    var s18 = s1;
    var s3 = '' + ((s1).length);
    var s7 = '' + (b6);
    var x45;
    if ((eval("s3")) ? true : false) {
        x45 = eval("s7");
    } else {
        var s28 = s19;
        var s29 = s19;
        var x30 = x23;
        var s9 = s18;
        var b13;
        if (b12) {
            b13 = true;
        } else {
            var b11 = !! (s10);
            b13 = b11;
        }
        var b20 = s18;
        var b21 = s19;
        var x22 = +(b20 > b21);
        var x24;
        if ((s9 === (b13).toString())) {
            x24 = x22;
        } else {
            x24 = x23;
        }
        var b27 = !! (Number('' + (x24)));
        var x41;
        if (b27) {
            x41 = s28;
        } else {
            var x33 = ~~ ( !! ('' + (x30)));
            var b35 = s29;
            var b36 = (x33).toString();
            var s38 = '' + ((b35 == b36) ? 1 : 0);
            var l39 = (s38).length;
            var s40 = (l39).toString();
            x41 = s40;
        }
        var e42 = "x41";
        x45 = String(Boolean(eval(e42)));
    }
    return x45;
}
fn46(input_I3, input_B3, input_S3, input_S1, input_B2, input_S2);
