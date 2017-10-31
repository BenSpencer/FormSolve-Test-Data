// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_bool('B3') == input_bool('B2')) then not(input_bool('B3')) else regex-test(str((bool((input_int('I3') * (int(input_string('S2')) / len(input_string('S1'))))) == not((if bool(int(not(not(input_bool('B2'))))) then input_bool('B1') else bool(int(str((input_bool('B3') && bool(str((bool(len(str(int(input_bool('B1'))))) || (int(input_string('S2')) !== input_int('I1'))))))))))))), /^(YG|I)[0-9]nyNlbRI\r+uR$/))

var input_I1 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_B1 = J$.readInput(false);

var fn62 = Function('s11', 'b27', 'x38', 's36', 'x8', 'b19', 'b1', "var b29 = b1; var b5 = b1; var b2 = b19; var b3; if (b1) { b3 = b2; } else { b3 = !b2; }var b7 = !(eval(\"b5\"));var x61; if (b3) { x61 = b7; } else { x61 = eval(\"var s9 = s36; var x10 = Number(s9);x13 = x10; x14 = (s11).length;x16 = x8 * eval(\\\"x13 / x14\\\");var b18 = Boolean(x16);var b55; if (b18) { b55 = eval(\\\"eval(\\\\\\\"var b30 = b27; var x51; if (eval(\\\\\\\\\\\\\\\"eval(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"var x22 = Number(!(!(b19)));var b24 = (eval(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"x22\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")) ? true : false;b24\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")\\\\\\\\\\\\\\\")) { x51 = eval(\\\\\\\\\\\\\\\"b27\\\\\\\\\\\\\\\"); } else { var x37 = Number(s36);var b41; if (Boolean((eval(\\\\\\\\\\\\\\\"var x31 = Number(b30);(x31).toString()\\\\\\\\\\\\\\\")).length) || (x37 !== x38)) { b41 = true; } else { b41 = false; }var b44 = Boolean(String(b41));var b45 = b29 && b44;var x48 = parseInt('' + (b45), 10);var e49 = \\\\\\\\\\\\\\\"x48\\\\\\\\\\\\\\\"; x51 = !!(eval(e49)); }var b52 = !(x51);b52\\\\\\\")\\\"); } else { b55 = !eval(\\\"eval(\\\\\\\"var b30 = b27; var x51; if (eval(\\\\\\\\\\\\\\\"eval(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"var x22 = Number(!(!(b19)));var b24 = (eval(\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"x22\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")) ? true : false;b24\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")\\\\\\\\\\\\\\\")) { x51 = eval(\\\\\\\\\\\\\\\"b27\\\\\\\\\\\\\\\"); } else { var x37 = Number(s36);var b41; if (Boolean((eval(\\\\\\\\\\\\\\\"var x31 = Number(b30);(x31).toString()\\\\\\\\\\\\\\\")).length) || (x37 !== x38)) { b41 = true; } else { b41 = false; }var b44 = Boolean(String(b41));var b45 = b29 && b44;var x48 = parseInt('' + (b45), 10);var e49 = \\\\\\\\\\\\\\\"x48\\\\\\\\\\\\\\\"; x51 = !!(eval(e49)); }var b52 = !(x51);b52\\\\\\\")\\\"); }var re58 = new RegExp(\\\"^(YG|I)[0-9]nyNlbRI\\\\\\\\r+uR$\\\");eval(\\\"re58.test(String(b55))\\\")\"); } return x61;");
fn62(input_S1, input_B1, input_I1, input_S2, input_I3, input_B2, input_B3);
