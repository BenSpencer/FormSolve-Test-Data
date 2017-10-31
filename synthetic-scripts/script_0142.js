// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if not(((input_string('S2') + input_string('S2')) in ['d2TCh', 'tkvn', 'n2', 'NTX', '6', 'dvDyx', 'DziY', 'KAz'])) then ((int(input_bool('B1')) - len(regex-replace(str(input_bool('B3')), /(sGUCKzHEZ[a-z]+|A)/, ""))) < int(bool(int(input_string('S1'))))) else input_bool('B1'))

var input_S1 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);

function fn31(s1, s19, b28, b11) {
    var b9 = b28;
    var s2 = s1;
    var opts6 = ['d2TCh', 'tkvn', 'n2', 'NTX', '6', 'dvDyx', 'DziY', 'KAz'];
    var b8 = !(opts6.indexOf((s1 + s2)) > -1);
    var x10 = ~~ (b9);
    var re15 = new RegExp("(sGUCKzHEZ[a-z]+|A)");
    var s14 = ((eval("b11")).toString()).replace(re15, "");
    var l16 = (s14).length;
    x17 = x10;
    x18 = l16;
    var e25 = "var b22 = Boolean(Number(eval(\"s19\")));var x23 = (b22) | 0;eval(\"x23\")";
    var b26 = x17 - x18 < eval(e25);
    return (b8 ? b26 : eval("b28"));
}
fn31(input_S2, input_S1, input_B1, input_B3);
