// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (if (len(str((input_bool('B2') && not(bool(len(input_string('S3'))))))) in [121, 0, 0, 35, 7]) then input_bool('B3') else not(bool(input_int('I2')))) then input_bool('B1') else not(((int(input_string('S2')) in [0, 0, 170, -10, 1, 1]) && (if bool(int(input_string('S1'))) then (str(not((len(input_string('S3')) !== input_int('I3')))) <= input_string('S2')) else true))))

var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");
var input_B3 = J$.readInput(false);
var input_I2 = J$.readInput(0);
var input_I3 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_B2 = J$.readInput(false);

var fn19 = function (b1, b14, x15, s2) {
    var x18;
    if (eval("var b4 = ((s2).length) ? true : false;var b5 = !(b4);var opts11 = [121, 0, 0, 35, 7];opts11.indexOf((String((b1 && b5))).length) > -1")) {
        x18 = b14;
    } else {
        var b16 = Boolean(x15);
        var b17 = !(b16);
        x18 = b17;
    }
    return x18;
}
var fn52 = Function('b21', 's30', 'x38', 'b24', 'b20', 'x22', 's25', 's23', "var s35 = s23; var s44 = s25; var opts28 = [0, 0, 170, -10, 1, 1];var b27 = opts28.indexOf(parseInt(s25, 10)) > -1;var b33 = Boolean(eval(\"var x31 = parseInt(s30, 10);x31\"));var e34 = \"b33\";var l37 = (eval(\"s35\")).length;var b39; if (l37 !== x38) { b39 = true; } else { b39 = false; }var b41 = !(b39);var s43 = '' + (eval(\"b41\"));var b45 = s43; var b46 = s44;var x47; if (eval(e34)) { x47 = b45 <= b46; } else {  x47 = true; }var b50 = !((b27 && x47)); return (fn19(b20, b21, x22, s23) ? b24 : b50);");
fn52(input_B3, input_S1, input_I3, input_B1, input_B2, input_I2, input_S2, input_S3);
