// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(int(((input_string('S3') < input_string('S1')) !== (if bool(input_int('I2')) then (int(input_string('S1')) in [36, 1, 8]) else not(not((len(str(input_int('I3'))) in [0, 95, 83, 9]))))))) then bool(str(len((if not((input_string('S2') in ['lk', 'dHX', 'RFvmK', 'Pp5xX', 'K', 'oHM', 'b9', 'A', 'Gx', 'r'])) then input_string('S1') else input_string('S2'))))) else bool(input_int('I2')))

var input_S1 = J$.readInput("");
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");

var fn42 = function (s2, x14, s1, x39, s28) {
    var x6 = x39;
    var s33 = s2;
    var s8 = s2;
    var b24 = eval("(s1 < s2)");
    var b25 = eval("var x22; if ((x6) ? true : false) {  x22 = eval(\"var opts11 = [36, 1, 8];var b10 = false; for (var idx12 = 0; idx12 < opts11.length; idx12++) { if (opts11[idx12] == Number(s8)) { b10 = true; } }b10\"); } else { var l16 = ((x14).toString()).length;var opts18 = [0, 95, 83, 9];var b17 = false; for (var idx19 = 0; idx19 < opts18.length; idx19++) { if (opts18[idx19] == l16) { b17 = true; break; } }var b20 = !(b17); x22 = !(b20); }x22");
    var b27 = !! (~~(b24 !== b25));
    var b40 = !! (x39);
    var x41;
    if (b27) {
        var s34 = s28;
        var opts30 = ['lk', 'dHX', 'RFvmK', 'Pp5xX', 'K', 'oHM', 'b9', 'A', 'Gx', 'r'];
        var b32 = !(opts30.indexOf(s28) > -1);
        var x35;
        if (b32) {
            x35 = s33;
        } else {
            x35 = s34;
        }
        var s37 = String((x35).length);
        x41 = !! (s37);
    } else {
        x41 = b40;
    }
    return x41;
}
fn42(input_S1, input_I3, input_S3, input_I2, input_S2);
