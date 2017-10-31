// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (input_int('I1') >= int((bool(str(((input_string('S2') in ['ZICAB', 'R', 'vFa5', 'ahPT', '7lH', '4yA9K', 'UWnNd', 'MjZ', 'o', 'B']) || (bool(input_int('I1')) != input_bool('B1'))))) !== not((if input_bool('B1') then (input_string('S2') in ['bv7', '', '', 'kfU', 'gplK', 'e', 'm', '1agcz']) else bool(str(bool(input_int('I2'))))))))) then input_bool('B3') else input_bool('B1'))

var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_I1 = J$.readInput(0);
var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);

(function (x22, x1, b17, s18, b33) {
    var b34 = b17;
    var x6 = x1;
    var s2 = s18;
    var b9 = b17;
    var opts4 = ['ZICAB', 'R', 'vFa5', 'ahPT', '7lH', '4yA9K', 'UWnNd', 'MjZ', 'o', 'B'];
    var b3 = opts4.indexOf(s2) > -1;
    var e12 = "var e7 = \"x6\";var b10 = (eval(e7)) ? true : false != b9;b10";
    var b16 = (String((b3 || eval(e12)))) ? true : false;
    var opts20 = ['bv7', '', '', 'kfU', 'gplK', 'e', 'm', '1agcz'];
    var b23 = (x22) ? true : false;
    var s24 = String(b23);
    var b28 = b16 !== !((b17 ? opts20.indexOf(s18) > -1 : !! (s24)));
    var b31;
    if (x1 >= Number(b28)) {
        b31 = true;
    } else {
        b31 = false;
    }
    var x35;
    if (b31) {
        x35 = b33;
    } else {
        x35 = b34;
    }
    return x35;
})(input_I2, input_I1, input_B1, input_S2, input_B3);
