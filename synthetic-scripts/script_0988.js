// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_string('S3') in ['', 'ZSIKT', 'A1', 'vjP', '']) then str(not((bool(str(int(not(not(not(((3 !== int(input_bool('B1'))) || (bool(str(input_bool('B2'))) === (regex-test(input_string('S3'), /^(b|Nx[A-Z]mq)J\W*$/) !== bool((input_int('I1') % (input_int('I2') % int(input_bool('B3')))))))))))))) || input_bool('B2')))) else input_string('S2'))

var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B2 = J$.readInput(false);
var input_S2 = J$.readInput("");

(function (s1, b10, s45, b6, x16, x17, b18) {
    var s14 = s1;
    var b40 = b10;
    var e33 = "var b13 = !!((eval(\"b10\")).toString());x22 = x17; x23 = (eval(\"eval(\\\"b18\\\")\")) | 0;var b27 = (s14).match(/^(b|Nx[A-Z]mq)J\\W*$/) !== null !== !!((x16 % x22 % x23));var b29 = false; if (b13 === b27) { b29 = true; }var b31; if (b29) { b31 = true; } else { var b8 = false; if (3 !== (b6) ? 1 : 0) { b8 = true; } b31 = b8; }b31";
    var b34;
    if (eval(e33)) {
        b34 = false;
    } else {
        b34 = true;
    }
    var b35;
    if (b34) {
        b35 = false;
    } else {
        b35 = true;
    }
    var b36 = !(b35);
    var s38 = String((b36) ? 1 : 0);
    var b41 = (s38) ? true : false;
    var b42 = b40;
    return (eval("var opts3 = ['', 'ZSIKT', 'A1', 'vjP', ''];opts3.indexOf(s1) > -1") ? (!(b41 || b42)).toString() : eval("s45"));
})(input_S3, input_B2, input_S2, input_B1, input_I1, input_I2, input_B3);
