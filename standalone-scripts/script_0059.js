// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not((input_string('S3') === (str(int(bool(int(bool((if bool(input_string('S2')) then str(bool(input_string('S1'))) else str(bool(str(input_bool('B2')))))))))) + input_string('S3')))) then bool(int(((input_int('I1') % int(input_bool('B2'))) >= (if bool(input_string('S1')) then len(input_string('S3')) else int(input_string('S1')))))) else regex-test(input_string('S1'), /^m Q[A-Z]\w?(bZ|\n)P$/))

var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);

var fn52 = function (s33, x27, s2, b28, s1) {
    var b8 = b28;
    var s38 = s1;
    var s49 = s33;
    var s5 = s33;
    var s21 = s1;
    var e16 = "var e4 = \"var b3 = Boolean(s2);b3\";var s7 = '' + ((s5) ? true : false);var e11 = \"var b10 = ((b8).toString()) ? true : false;b10\";var x13; if (eval(e4)) { x13 = s7; } else { x13 = '' + (eval(e11)); }var b14 = (x13) ? true : false;~~(b14)";
    var e17 = "eval(e16)";
    var x19 = ~~ ( !! (eval(e17)));
    var x22 = (x19).toString() + s21;
    var b24 = false;
    if (s1 === x22) {
        b24 = true;
    }
    var b26 = !(b24);
    var e30 = "(b28) | 0";
    x31 = x27;
    x32 = eval(e30);
    var s42 = s33;
    var e36 = "var e34 = \"s33\";(eval(e34)) ? true : false";
    var e37 = "eval(e36)";
    var x44;
    if (eval(e37)) {
        var e41 = "var l39 = (s38).length;var e40 = \"l39\";eval(e40)";
        x44 = eval(e41);
    } else {
        x44 = Number(s42);
    }
    var b45 = x31 % x32 >= x44;
    var x47 = +(b45);
    var b48 = Boolean(x47);
    var x51;
    if (b26) {
        x51 = b48;
    } else {
        x51 = (s49).match(/^m Q[A-Z]\w?(bZ|\n)P$/) !== null;
    }
    return x51;
}
fn52(input_S1, input_I1, input_S2, input_B2, input_S3);
