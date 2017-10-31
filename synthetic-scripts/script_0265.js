// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not(input_bool('B3')) !== (if not(input_bool('B3')) then bool(input_int('I2')) else input_bool('B2'))) then int(str(int((if input_bool('B1') then true else (if not(input_bool('B1')) then input_bool('B3') else (if input_bool('B1') then bool(int(input_bool('B2'))) else not(not((int(str(not(bool(str(not(not(input_bool('B1')))))))) in [0, 51, 91, 139, 98, 5, 159, 1, 10]))))))))) else int(str(len((if input_bool('B3') then str(bool(input_string('S1'))) else str(bool(len(input_string('S3')))))))))

var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn41 = function (b20, b18, b14) {
    var b16 = b14;
    var x40;
    if (eval("b14")) {
        x40 = true;
    } else {
        var b19 = b16;
        var b17;
        if (b16) {
            b17 = false;
        } else {
            b17 = true;
        }
        var x39;
        if (b17) {
            x39 = b18;
        } else {
            var b23 = b19;
            var b25 = !(!(b23));
            var s26 = String(b25);
            var e28 = "!!(s26)";
            var b29 = !(eval(e28));
            var s30 = (b29).toString();
            var opts33 = [0, 51, 91, 139, 98, 5, 159, 1, 10];
            var e36 = "!(opts33.indexOf(parseInt(s30, 10)) > -1)";
            var b37;
            if (eval(e36)) {
                b37 = false;
            } else {
                b37 = true;
            }
            var x38;
            if (b19) {
                x38 = Boolean((b20) ? 1 : 0);
            } else {
                x38 = b37;
            }
            x39 = x38;
        }
        x40 = x39;
    }
    return x40;
}
    function fn61(s55, s51, b50) {
        var x60;
        if (b50) {
            x60 = eval("var b52 = Boolean(s51);var s53 = '' + (b52);s53");
        } else {
            x60 = eval("var l56 = (s55).length;var b57 = (l56) ? true : false;var s58 = (b57).toString();s58");
        }
        return x60;
    }(function (b42, s63, b1, x5, b44, s62) {
        var b43 = b1;
        var b64 = b1;
        var b7 = b42;
        var b3 = b1;
        var b2;
        if (b1) {
            b2 = false;
        } else {
            b2 = true;
        }
        var e11 = "var b4 = !(b3);var x10; if (b4) {  x10 = Boolean(x5); } else { x10 = eval(\"var e8 = \\\"b7\\\";eval(e8)\"); }x10";
        var l65 = (fn61(s62, s63, b64)).length;
        var x69;
        if ((b2 !== eval(e11))) {
            var e45 = "fn41(b42, b43, b44)";
            var e46 = "eval(e45)";
            var x47 = (eval(e46)) ? 1 : 0;
            var x49 = Number('' + (x47));
            x69 = x49;
        } else {
            x69 = parseInt((eval("l65")).toString(), 10);
        }
        return x69;
    })(input_B2, input_S1, input_B3, input_I2, input_B1, input_S3);
