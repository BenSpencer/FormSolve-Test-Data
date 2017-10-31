// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_int('I1')) then str(int(str((int(input_string('S3')) + int(str(bool(int(input_string('S1'))))))))) else str(int(bool(str(not(((if regex-test(str(input_bool('B1')), /^(\w+Z|n)-[0-9]iRBS$/) then int(str((input_string('S2') !== str(input_int('I2'))))) else len(input_string('S3'))) === int(input_string('S2')))))))))

var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);

function fn45(s21, s5, x1, x22, s29, b18) {
    var s3 = s29;
    var b2 = (x1) ? true : false;
    var x44;
    if (b2) {
        var x12 = Number(eval("eval(\"var e6 = \\\"s5\\\";var x7 = parseInt(eval(e6), 10);(!!(x7)).toString()\")"));
        var x16 = parseInt('' + ((parseInt(s3, 10) + x12)), 10);
        x44 = '' + (x16);
    } else {
        var s33 = s21;
        var s19 = (b18).toString();
        var l31 = (eval("s29")).length;
        var x32;
        if ((s19).match(/^(\w+Z|n)-[0-9]iRBS$/) !== null) {
            var e23 = "x22";
            var b25 = s21 !== (eval(e23)).toString();
            var s27 = '' + (b25);
            x32 = Number(s27);
        } else {
            x32 = l31;
        }
        var x34 = parseInt(s33, 10);
        var b35 = false;
        if (x32 === x34) {
            b35 = true;
        }
        var b37;
        if (b35) {
            b37 = false;
        } else {
            b37 = true;
        }
        var e39 = "(b37).toString()";
        var e40 = "eval(e39)";
        var b41 = Boolean(eval(e40));
        var x42 = ~~ (b41);
        var s43 = (x42).toString();
        x44 = s43;
    }
    return x44;
}
fn45(input_S2, input_S1, input_I1, input_I2, input_S3, input_B1);
