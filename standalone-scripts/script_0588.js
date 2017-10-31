// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if bool(input_string('S2')) then int(str(bool(input_int('I3')))) else (len(str(regex-test(str(int(str(int(not(input_bool('B1')))))), /^Li\r?p[a-z]\n(\d|Izm-q)$/))) % (if ((if (input_string('S3') in ['XDM8', '', 'P5fVN', '0r', 'RMI']) then (bool(int(input_string('S1'))) === (input_bool('B2') || not(bool(input_int('I1'))))) else input_bool('B1')) != bool((int(input_bool('B2')) * len(input_string('S1'))))) then input_int('I2') else input_int('I2'))))

var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_S3 = J$.readInput("");
var input_S2 = J$.readInput("");
var input_S1 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_I2 = J$.readInput(0);
var input_B1 = J$.readInput(false);

(function (b27, s1, b37, x3, x49, s20, x28, s24) {
    var b7 = b37;
    var re17 = new RegExp("^Li\\r?p[a-z]\\n(\\d|Izm-q)$");
    var l19 = ((re17.test(eval("var s15 = String(Number('' + (~~(eval(\"var b10 = !(eval(\\\"eval(\\\\\\\"b7\\\\\\\")\\\"));b10\")))));s15"))).toString()).length;
    var x50 = x49;
    var b40 = b27;
    var s42 = s24;
    var opts22 = ['XDM8', '', 'P5fVN', '0r', 'RMI'];
    var b21 = opts22.indexOf(s20) > -1;
    var x39;
    if (b21) {
        var b31;
        if ( !! (eval("x28"))) {
            b31 = false;
        } else {
            b31 = true;
        }
        var e32 = "b31";
        var b33 = false;
        if (b27 || eval(e32)) {
            b33 = true;
        }
        var b35;
        if (Boolean(Number(s24)) === b33) {
            b35 = true;
        } else {
            b35 = false;
        }
        x39 = b35;
    } else {
        x39 = eval("b37");
    }
    var x41 = +(b40);
    var l43 = (s42).length;
    x44 = x41;
    x45 = l43;
    var b46 = !! (x44 * x45);
    var b47 = x39 != b46;
    var x51;
    if (b47) {
        x51 = x49;
    } else {
        x51 = x50;
    }
    x52 = l19;
    x53 = x51;
    var x54;
    if ((s1) ? true : false) {
        var b4 = !! (x3);
        var s5 = (b4).toString();
        x54 = parseInt(s5, 10);
    } else {
        x54 = x52 % x53;
    }
    return x54;
})(input_B2, input_S2, input_B1, input_I3, input_I2, input_S3, input_I1, input_S1);
