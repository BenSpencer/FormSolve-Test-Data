// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if input_bool('B1') then (str((if input_bool('B3') then bool(input_int('I2')) else not(bool(input_string('S2'))))) in ['u78', 'bpj', 'lh6']) else not(bool(str(not(input_bool('B2')))))) then input_string('S3') else str((int(str(not((input_bool('B1') && not((not((str(not(not(not(bool(input_int('I3')))))) != str(int(str(bool((int((input_string('S2') + str(input_bool('B3')))) * int(regex-test(str(input_bool('B3')), /^lw(u|[A-Z])*JNNWzpu\r\wHm$/))))))))) == not(input_bool('B2')))))))) <= input_int('I2'))))

var input_B2 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);

(function (b16, b1, x24, b2, s30, s22, x3) {
    var b23 = b1;
    var s6 = s30;
    var x64 = x3;
    var b31 = b2;
    var b54 = b16;
    var x21;
    if (b1) {
        var b8;
        if ((s6) ? true : false) {
            b8 = false;
        } else {
            b8 = true;
        }
        var e10 = "eval(\"b8\")";
        var x11;
        if (b2) {
            x11 = eval("!!(x3)");
        } else {
            x11 = eval(e10);
        }
        var opts14 = ['u78', 'bpj', 'lh6'];
        var b13 = false;
        for (var idx15 = 0; idx15 < opts14.length; idx15++) {
            if (opts14[idx15] == String(x11)) {
                b13 = true;
                break;
            }
        }
        x21 = b13;
    } else {
        var b17;
        if (b16) {
            b17 = false;
        } else {
            b17 = true;
        }
        var s18 = '' + (b17);
        var b20;
        if ((s18) ? true : false) {
            b20 = false;
        } else {
            b20 = true;
        }
        x21 = b20;
    }
    var b26 = !((x24) ? true : false);
    var b28 = !(!(b26));
    var s29 = String(b28);
    var x48 = parseInt(eval("eval(\"var b38 = b31; var e34 = \\\"eval(\\\\\\\"var s32 = String(b31);s32\\\\\\\")\\\";var x35 = s30; var x36 = eval(e34);var x37 = Number(x35 + x36);var s39 = '' + (b38);var re40 = new RegExp(\\\"^lw(u|[A-Z])*JNNWzpu\\\\\\\\r\\\\\\\\wHm$\\\");x42 = x37; x43 = ~~(re40.test(s39));var s45 = ((x42 * x43) ? true : false).toString();s45\")"), 10);
    var s49 = '' + (x48);
    var b50;
    if (s29 != s49) {
        b50 = true;
    } else {
        b50 = false;
    }
    var b52;
    if (b50) {
        b52 = false;
    } else {
        b52 = true;
    }
    var e53 = "b52";
    var b56 = false;
    if (eval(e53) == !(b54)) {
        b56 = true;
    }
    var b59;
    if (!(b56)) {
        b59 = b23;
    } else {
        b59 = false;
    }
    var b66;
    if (parseInt(String(!(b59)), 10) <= eval("x64")) {
        b66 = true;
    } else {
        b66 = false;
    }
    var s68 = '' + (b66);
    return (x21 ? s22 : s68);
})(input_B2, input_B1, input_I3, input_B3, input_S2, input_S3, input_I2);
