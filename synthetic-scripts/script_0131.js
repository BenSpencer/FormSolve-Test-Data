// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then (if not(regex-test(str(bool(str(input_int('I3')))), /^(\dF[-_ ]|zSdKDFexpjS)*$/)) then regex-test(str((bool(input_int('I2')) && (int(bool(int(str(int(("Ilu" <= str(bool(str(input_int('I1')))))))))) < input_int('I3')))), /^F\rxPbtf_Q(A|[A-Z])_\d*$/) else input_bool('B2')) else bool(int(str(len(input_string('S3'))))))

var input_I3 = J$.readInput(0);
var input_I1 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);

(function (x11, x2, x9, b1, s34) {
    var b32 = b1;
    var l35 = (s34).length;
    var s36 = '' + (l35);
    var x37 = parseInt(s36, 10);
    var b38 = (x37) ? true : false;
    var x39;
    if (b1) {
        var x24 = x2;
        var e3 = "x2";
        var s4 = '' + (eval(e3));
        var x33;
        if (!(('' + ((s4) ? true : false)).match(/^(\dF[-_ ]|zSdKDFexpjS)*$/) !== null)) {
            var s14 = '' + (Boolean(String(x11)));
            var e15 = "s14";
            var b16 = false;
            if ("Ilu" <= eval(e15)) {
                b16 = true;
            }
            var x18 = (b16) | 0;
            var s20 = (eval("x18")).toString();
            var b25 = false;
            if (+((Number(s20)) ? true : false) < x24) {
                b25 = true;
            }
            var b27;
            if (b25) {
                b27 = !! (x9);
            } else {
                b27 = false;
            }
            var re30 = new RegExp("^F\\rxPbtf_Q(A|[A-Z])_\\d*$");
            x33 = eval("re30.test('' + (b27))");
        } else {
            x33 = b32;
        }
        x39 = x33;
    } else {
        x39 = b38;
    }
    return x39;
})(input_I1, input_I3, input_I2, input_B2, input_S3);
