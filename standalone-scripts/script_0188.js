// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S3')) then (str(input_int('I2')) in ['z', '2dpK3', 'Y8Xh5', 'tjx']) else not(((str((if (not(bool(input_int('I1'))) == (input_bool('B1') !== (str(input_int('I2')) in ['v', 'W6', 'R5', 'JYLCH', '', 'Rn1X']))) then input_int('I1') else input_int('I2'))) === str((input_string('S1') <= str(not(input_bool('B2')))))) && (str(int(str(int(input_bool('B2'))))) < str(bool(str(int(input_bool('B1')))))))))

var input_B1 = J$.readInput(false);
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_S3 = J$.readInput("");

function fn59(b11, s28, x12, b29, x24, s1) {
    var x3 = x12;
    var opts6 = ['z', '2dpK3', 'Y8Xh5', 'tjx'];
    var b39 = b29;
    var b47 = b11;
    var x8 = x24;
    var x25 = x12;
    var e16 = "var e13 = \"x12\";var e14 = \"eval(e13)\";(eval(e14)).toString()";
    var opts18 = ['v', 'W6', 'R5', 'JYLCH', '', 'Rn1X'];
    var b17 = false;
    for (var idx19 = 0; idx19 < opts18.length; idx19++) {
        if (opts18[idx19] == eval(e16)) {
            b17 = true;
            break;
        }
    }
    var b22 = !(Boolean(x8));
    var b23 = (b11 !== b17);
    var s27 = ((b22 == b23 ? x24 : x25)).toString();
    var e32 = "'' + (!(b29))";
    var s35 = ((s28 <= eval(e32))).toString();
    var b37 = false;
    if (s27 === eval("s35")) {
        b37 = true;
    }
    var e52 = "var x48 = +(b47);var s49 = '' + (x48);var b50 = (s49) ? true : false;(b50).toString()";
    var b53 = eval("var e42 = \"var x40 = +(b39);var s41 = String(x40);s41\";var x43 = parseInt(eval(e42), 10);var s45 = String(eval(\"x43\"));s45") < eval(e52);
    var b55;
    if (b53) {
        b55 = b37;
    } else {
        b55 = false;
    }
    var b57;
    if (b55) {
        b57 = false;
    } else {
        b57 = true;
    }
    return ( !! (s1) ? opts6.indexOf('' + (x3)) > -1 : b57);
}
fn59(input_B1, input_S1, input_I2, input_B2, input_I1, input_S3);
