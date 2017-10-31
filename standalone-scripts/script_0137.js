// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if (str(input_int('I3')) < str(not(not(bool(int((str((str((input_int('I3') - int(bool((input_int('I3') % input_int('I2')))))) in ['vS', 'i', 'WucM', 'cYaS5', '4'])) != str(bool(int(bool((if input_bool('B2') then str(len(input_string('S1'))) else "qrDmg")))))))))))) then (input_bool('B3') && input_bool('B1')) else not((if bool(input_int('I1')) then input_bool('B3') else input_bool('B2'))))

var input_B3 = J$.readInput(false);
var input_B1 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B2 = J$.readInput(false);
var input_S1 = J$.readInput("");
var input_I2 = J$.readInput(0);
var input_I1 = J$.readInput(0);

function fn52(x6, x44, b40, b25, x1, s24, b39) {
    var b47 = b39;
    var b48 = b25;
    var x4 = x1;
    var e2 = "x1";
    var x5 = x4;
    x11 = x4;
    x12 = +(((x5 % x6)) ? true : false);
    var s13 = '' + (x11 - x12);
    var opts15 = ['vS', 'i', 'WucM', 'cYaS5', '4'];
    var s17 = String(opts15.indexOf(s13) > -1);

    function fn23(s19, b18) {
        var x22;
        if (b18) {
            var l20 = (s19).length;
            x22 = String(l20);
        } else {
            x22 = "qrDmg";
        }
        return x22;
    }
    var b26 = !! (fn23(s24, b25));
    var x27 = (b26) ? 1 : 0;
    var s29 = (Boolean(x27)).toString();
    var b30 = s17;
    var b31 = s29;
    var b34;
    if ( !! (~~(b30 != b31))) {
        b34 = false;
    } else {
        b34 = true;
    }
    var b37 = String(eval(e2));
    var b38 = '' + (!(b34));
    var x51;
    if (b37 < b38) {
        var b42 = b39;
        var b43 = eval("b40");
        x51 = b42 && b43;
    } else {
        var e46 = "(x44) ? true : false";
        var x49;
        if (eval(e46)) {
            x49 = b47;
        } else {
            x49 = b48;
        }
        x51 = !(x49);
    }
    return x51;
}
fn52(input_I2, input_I1, input_B1, input_B2, input_I3, input_S1, input_B3);
