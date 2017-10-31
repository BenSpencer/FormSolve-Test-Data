// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B1') then (if bool(input_int('I1')) then (if input_bool('B1') then not((input_string('S2') !== str(input_bool('B2')))) else (if bool(int(input_bool('B2'))) then (input_string('S3') <= "G6eXD") else not(input_bool('B1')))) else input_bool('B2')) else (str(input_bool('B2')) <= str(not(bool(input_string('S3'))))))

var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_S3 = J$.readInput("");

var fn25 = Function('b19', 'b11', 's15', "var e22 = \"!(eval(\\\"b19\\\"))\";var e23 = \"eval(e22)\";var x24; if (eval(\"(~~(b11)) ? true : false\")) { var b17 = eval(\"s15\") <= \"G6eXD\"; x24 = b17; } else { x24 = eval(e23); } return x24;");
var fn45 = function (b27, s5, x2, b1, s28) {
    var b32 = b27;
    var b26 = b1;
    var s37 = s28;
    var e34 = "var e33 = \"b32\";eval(e33)";
    var b38 = !! (s37);
    var b39;
    if (b38) {
        b39 = false;
    } else {
        b39 = true;
    }
    var e40 = "b39";
    var s41 = '' + (eval(e40));
    var b42 = eval("'' + (eval(e34))");
    var b43 = s41;
    var x44;
    if (b1) {
        var b30 = b27;
        var x31;
        if ( !! (x2)) {
            var b4 = b26;
            var b6 = b27;
            var s7 = (b6).toString();
            var b8;
            if (s5 !== s7) {
                b8 = true;
            } else {
                b8 = false;
            }
            x31 = (b4 ? !(b8) : fn25(b26, b27, s28));
        } else {
            x31 = b30;
        }
        x44 = x31;
    } else {
        x44 = b42 <= b43;
    }
    return x44;
}
fn45(input_B2, input_S2, input_I1, input_B1, input_S3);
