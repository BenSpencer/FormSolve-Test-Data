// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(bool(int(str(bool(len(str(((str(bool(input_string('S1'))) !== input_string('S1')) === not(not(bool(len(input_string('S3'))))))))))))) == regex-replace(input_string('S1'), /(o|[0-9]+)r/, "e")) then input_int('I3') else int(not(bool(str(int(str(((bool(input_int('I1')) === (input_int('I2') >= 2)) !== bool(input_int('I1'))))))))))

var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I3 = J$.readInput(0);

var fn49 = function (x31, x28, s7, s1, x27) {
    var s22 = s1;
    var s4 = s1;
    var b5;
    if ('' + ( !! (s1)) !== s4) {
        b5 = true;
    } else {
        b5 = false;
    }
    var l8 = (s7).length;
    var b10 = !((l8) ? true : false);
    var b12 = b5 === !(b10);
    var b17 = (('' + (eval("b12"))).length) ? true : false;
    var b20 = !! (parseInt((b17).toString(), 10));
    var s21 = (b20).toString();
    var s23 = (s22).replace(/(o|[0-9]+)r/, "e");
    var b25;
    if (s21 == s23) {
        b25 = true;
    } else {
        b25 = false;
    }
    var e45 = "var x37 = x28; var b32 = x31; var b33 = 2;var b34 = eval(\"Boolean(x28)\"); var b35 = b32 >= b33;var e36 = \"b34 === b35\";var b38 = !!(x37);var x42 = parseInt('' + ((eval(e36) !== b38)), 10);var b44 = !!('' + (x42));b44";
    var b46;
    if (eval(e45)) {
        b46 = false;
    } else {
        b46 = true;
    }
    return (b25 ? x27 : ~~(b46));
}
fn49(input_I2, input_I1, input_S3, input_S1, input_I3);
