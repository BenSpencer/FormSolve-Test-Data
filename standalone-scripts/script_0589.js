// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (not(input_bool('B2')) === (bool(int(bool((input_int('I2') + (int(input_string('S3')) - input_int('I3')))))) !== bool(int(str(not((if input_bool('B1') then bool((input_int('I2') - input_int('I3'))) else input_bool('B2')))))))) then int(not((input_string('S1') in ['gzvM', 'Cu5HN', '3', 'grDF', 'OmiUf', '', '', 'kr', '']))) else int(str(int((input_int('I1') <= input_int('I2'))))))

var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S1 = J$.readInput("");

function fn50(s36, s5, b1, b18, x42, x19, x20) {
    var x43 = x19;
    var b24 = b1;
    var b2;
    if (b1) {
        b2 = false;
    } else {
        b2 = true;
    }
    var x3 = x19;
    var x7 = x20;
    var b17 = (~~(eval("eval(\"var e4 = \\\"x3\\\";var b12 = !!((eval(e4) + (parseInt(s5, 10) - x7)));var e13 = \\\"b12\\\";eval(e13)\")"))) ? true : false;
    var e31 = "var x25; if (b18) { x21 = x19 - x20; x25 = !!(x21); } else {  x25 = b24; }var e29 = \"parseInt('' + (!(x25)), 10)\";var b30 = (eval(e29)) ? true : false;b30";
    var b34 = b2 === (b17 !== eval(e31));
    var opts38 = ['gzvM', 'Cu5HN', '3', 'grDF', 'OmiUf', '', '', 'kr', ''];
    var b37 = false;
    for (var idx39 = 0; idx39 < opts38.length; idx39++) {
        if (opts38[idx39] == s36) {
            b37 = true;
            break;
        }
    }
    var x41 = (!(b37)) ? 1 : 0;
    var x46 = +((x42 <= x43));
    var s47 = '' + (x46);
    var x48 = parseInt(s47, 10);
    var x49;
    if (b34) {
        x49 = x41;
    } else {
        x49 = x48;
    }
    return x49;
}
fn50(input_S1, input_S3, input_B2, input_B1, input_I1, input_I2, input_I3);
