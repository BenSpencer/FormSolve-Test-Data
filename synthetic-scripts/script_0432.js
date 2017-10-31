// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B3') == input_bool('B1')) then (int(str(int(input_string('S3')))) <= (input_int('I3') / int((input_int('I1') === (int(bool(str(int(bool(int(str(input_int('I2')))))))) - int((str(input_int('I2')) <= str(regex-test(str(input_int('I3')), /^jl-\nYKBGvEY([a-z]*|h)hB$/))))))))) else not(input_bool('B2')))

var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);

(function (s5, x12, x11, b40, b2, b1, x10) {
    var b3 = false;
    if (b1 == b2) {
        b3 = true;
    }
    var e6 = "s5";
    var s8 = (Number(eval(e6))).toString();
    var x9 = parseInt(s8, 10);
    var x24 = x10;
    var x22 = x12;
    var x21 = +(eval("var x17 = Number(Boolean(Number(eval(\"'' + (x12)\"))));var s18 = '' + (x17);Boolean(s18)"));
    var s23 = String(x22);
    var s25 = '' + (x24);
    var b28 = s23;
    var b29 = String((s25).match(/^jl-\nYKBGvEY([a-z]*|h)hB$/) !== null);
    var x30 = (b28 <= b29) ? 1 : 0;
    x31 = x21;
    x32 = x30;
    var b33;
    if (x11 === x31 - x32) {
        b33 = true;
    } else {
        b33 = false;
    }
    x36 = x10 / ~~(b33);
    var b38 = x9;
    var b39 = x36;
    var b41 = !(b40);
    return (b3 ? b38 <= b39 : b41);
})(input_S3, input_I2, input_I1, input_B2, input_B1, input_B3, input_I3);
