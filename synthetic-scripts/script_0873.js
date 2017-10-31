// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(str(not(not(not(input_bool('B3')))))) then input_int('I1') else int((input_string('S1') == (if input_bool('B3') then str(not(input_bool('B3'))) else str((if bool(str(input_bool('B2'))) then (input_int('I2') in [0, 0, 186, -31, 0, 9, 6, 0, 23]) else (int(str(bool(str(int(input_bool('B3')))))) === (len(str(input_int('I1'))) - input_int('I3')))))))))

var input_I1 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);

(function (x16, b13, x31, b1, x27, s8) {
    var x7 = x27;
    var b10 = b1;
    var b2;
    if (b1) {
        b2 = false;
    } else {
        b2 = true;
    }
    var b3;
    if (b2) {
        b3 = false;
    } else {
        b3 = true;
    }
    var b6 = Boolean((!(b3)).toString());
    var b20 = b10;
    var b9 = b10;
    var s12 = (!(b10)).toString();
    var x40;
    if (b9) {
        x40 = s12;
    } else {
        var b15 = !! ((b13).toString());
        var opts18 = [0, 0, 186, -31, 0, 9, 6, 0, 23];
        var b17 = false;
        for (var idx19 = 0; idx19 < opts18.length; idx19++) {
            if (opts18[idx19] == x16) {
                b17 = true;
            }
        }
        var e21 = "b20";
        var x22 = ~~ (eval(e21));
        var b24 = Boolean('' + (x22));
        var s25 = '' + (b24);
        var e35 = "var e29 = \"(x27).toString()\";x32 = (eval(e29)).length - x31;eval(\"x32\")";
        var b36;
        if (parseInt(s25, 10) === eval(e35)) {
            b36 = true;
        } else {
            b36 = false;
        }
        x40 = String((b15 ? b17 : b36));
    }
    var x43 = ((s8 == x40)) | 0;
    var x44;
    if (b6) {
        x44 = x7;
    } else {
        x44 = x43;
    }
    return x44;
})(input_I2, input_B2, input_I3, input_B3, input_I1, input_S1);
