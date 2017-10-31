// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if ((len(input_string('S2')) === int(input_bool('B3'))) && (bool(input_string('S3')) && (if ((int(input_bool('B2')) != ((if (if bool(input_string('S1')) then not(input_bool('B2')) else regex-test(str(input_bool('B2')), /^\DR\t+k[a-z]uB\S(\t|e)\d$/)) then int(str(bool(int(not((str(len(regex-replace(input_string('S2'), /bwA([-_ ]?|D)QTVmR/, "Is"))) === input_string('S1'))))))) else input_int('I1')) - input_int('I2'))) == input_bool('B1')) then (len(input_string('S2')) == input_int('I1')) else input_bool('B1')))) then input_int('I2') else int(input_string('S2')))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B2 = J$.readInput(false);

function fn66(s11, b43, s1, b13, x37, s7, x35, b3) {
    var s62 = s1;
    var x61 = x37;
    var s21 = s1;
    var b5 = false;
    if ((s1).length === ~~(b3)) {
        b5 = true;
    }
    var b8 = !! (s7);
    var b55 = b43;
    var x52 = x35;
    var s48 = s21;
    var e42 = "var b9 = b13; var s27 = s11; var b17 = b13; var b15 = !(eval(\"b13\"));var e16 = \"b15\";var x20; if (!!(s11)) { x20 = eval(e16); } else { var re19 = /^\\DR\\t+k[a-z]uB\\S(\\t|e)\\d$/; x20 = re19.test('' + (b17)); }var l24 = ((s21).replace(/bwA([-_ ]?|D)QTVmR/, \"Is\")).length;var s26 = '' + (eval(\"l24\"));var b28 = s26 === s27;var s33 = (!!(~~(!(b28)))).toString();var x34 = parseInt(s33, 10);x38 = (x20 ? x34 : x35); x39 = x37;var b40 = false; if (+(b9) != x38 - x39) { b40 = true; }b40";
    var b44 = eval(e42) == b43;
    var e46 = "b44";
    var e49 = "s48";
    var e51 = "(eval(e49)).length";
    var b53 = false;
    if (eval(e51) == x52) {
        b53 = true;
    }
    var b59;
    if (b5 && (b8 && (eval("eval(e46)") ? b53 : b55))) {
        b59 = true;
    } else {
        b59 = false;
    }
    var e63 = "s62";
    var x65;
    if (b59) {
        x65 = x61;
    } else {
        x65 = parseInt(eval(e63), 10);
    }
    return x65;
}
fn66(input_S1, input_B1, input_S2, input_B2, input_I2, input_S3, input_I1, input_B3);
