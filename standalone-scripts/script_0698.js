// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(input_string('S1'))) then bool(str((if not(bool(int(str(input_bool('B1'))))) then (int(bool((if bool(input_string('S2')) then str(bool(str(int((if bool(input_int('I1')) then (len(input_string('S1')) in [167, -42, 1, 1, 78, 1, 5, 1]) else (input_int('I3') != int(str(input_int('I3'))))))))) else str(int(str(input_int('I2'))))))) in [-76, 33, 1, 58, 3]) else input_bool('B1')))) else bool(int(str((input_string('S3') in ['wYE93', 'PSL', 'EOo', 'kG2', 'nC', 'h', 'ocC5R'])))))

var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);

var fn39 = Function('x34', 'x20', 's15', 's11', 'x13', "var b14 = Boolean(x13);var x21 = x20; var e22 = \"x21\";var b25 = false; if (x20 != Number((eval(e22)).toString())) { b25 = true; }var x27; if (b14) { var l16 = (s15).length;var opts18 = [167, -42, 1, 1, 78, 1, 5, 1];var b17 = false; for (var idx19 = 0; idx19 < opts18.length; idx19++) { if (opts18[idx19] == l16) { b17 = true; break; } } x27 = b17; } else { x27 = b25; }var s30 = (eval(\"(x27) ? 1 : 0\")).toString();var s35 = '' + (x34);var s37 = String(parseInt(s35, 10));var x38; if ((s11) ? true : false) { x38 = (eval(\"Boolean(s30)\")).toString(); } else { x38 = s37; } return x38;");
(function (s43, s1, x40, x44, s54, b5, x41) {
    var s42 = s1;
    var b50 = b5;
    var s6 = (b5).toString();
    var b9 = !(Boolean(parseInt(s6, 10)));
    var e10 = "b9";
    var b45 = Boolean(fn39(x40, x41, s42, s43, x44));
    var x46 = (b45) ? 1 : 0;
    var opts48 = [-76, 33, 1, 58, 3];
    var b47 = false;
    for (var idx49 = 0; idx49 < opts48.length; idx49++) {
        if (opts48[idx49] == x46) {
            b47 = true;
        }
    }
    var x51;
    if (eval(e10)) {
        x51 = b47;
    } else {
        x51 = b50;
    }
    var s52 = '' + (x51);
    var e58 = "var opts56 = ['wYE93', 'PSL', 'EOo', 'kG2', 'nC', 'h', 'ocC5R'];var b55 = false; for (var idx57 = 0; idx57 < opts56.length; idx57++) { if (opts56[idx57] == s54) { b55 = true; } }b55";
    var x62;
    if (eval("var x2 = parseInt(s1, 10);(x2) ? true : false")) {
        x62 = Boolean(s52);
    } else {
        x62 = (parseInt((eval(e58)).toString(), 10)) ? true : false;
    }
    return x62;
})(input_S2, input_S1, input_I2, input_I1, input_S3, input_B1, input_I3);
