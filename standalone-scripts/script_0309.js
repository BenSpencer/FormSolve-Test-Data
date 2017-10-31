// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((input_string('S1') in ['0EF', 'dAKH7', '3', 'um', 'vz', 'olCgr', 'hij6', '', 'N5ZVt']) && input_bool('B3')) then (44 / int(str(int(input_string('S3'))))) else (if bool(str(not(input_bool('B3')))) then (len(input_string('S1')) - int(regex-replace(str(input_bool('B2')), /([A-Z]|bGOt\s?)/, "Cem"))) else (if bool(str(not((input_string('S1') != str(input_bool('B1')))))) then input_int('I2') else (input_int('I3') % int(not(input_bool('B3')))))))

var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);

var fn53 = function (x43, b32, x42, b24, s9, s1, b15) {
    var b5 = b15;
    var s22 = s1;
    var opts3 = ['0EF', 'dAKH7', '3', 'um', 'vz', 'olCgr', 'hij6', '', 'N5ZVt'];
    var b7;
    if (eval("b5")) {
        b7 = opts3.indexOf(s1) > -1;
    } else {
        b7 = false;
    }
    var b45 = b15;
    var s31 = s22;
    var b21 = (String(eval("var e18 = \"var b16 = !(b15);var e17 = \\\"b16\\\";eval(e17)\";eval(e18)"))) ? true : false;
    var l23 = (s22).length;
    var s25 = '' + (b24);
    var s26 = (s25).replace(/([A-Z]|bGOt\s?)/, "Cem");
    var x28 = parseInt(s26, 10);
    var x51;
    if (b21) {
        x51 = (l23 - x28);
    } else {
        var e44 = "x43";
        var b46;
        if (b45) {
            b46 = false;
        } else {
            b46 = true;
        }
        x51 = ((eval("var e38 = \"var s34 = '' + (eval(\\\"b32\\\"));var b35 = s31; var b36 = s34;!(b35 != b36)\";var s39 = '' + (eval(e38));s39")) ? true : false ? x42 : (eval(e44) % Number(b46)));
    }
    var x52;
    if (b7) {
        var x10 = parseInt(s9, 10);
        x52 = (44 / parseInt('' + (x10), 10));
    } else {
        x52 = x51;
    }
    return x52;
}
fn53(input_I3, input_B1, input_I2, input_B2, input_S3, input_S1, input_B3);
