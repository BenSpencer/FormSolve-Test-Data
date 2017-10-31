// Instrumented for Jalangi analysis

if (typeof window === "undefined") {
    require('../../src/js/InputManager');
    require(process.cwd()+'/inputs');
}

// (if input_bool('B2') then not(input_bool('B2')) else (if input_bool('B1') then (if (not((input_int('I2') > int(input_bool('B2')))) && bool(int(str(not(bool(str(input_bool('B1')))))))) then input_bool('B2') else (str(not(bool((if input_bool('B3') then str(bool(input_string('S2'))) else (if (input_bool('B2') !== bool(input_int('I3'))) then "HkWY" else str(not((if input_bool('B3') then (if (int(input_string('S2')) >= int(input_string('S2'))) then input_bool('B2') else not(bool(input_string('S1')))) else not(input_bool('B1')))))))))) === str(input_int('I2')))) else not(bool(input_int('I3')))))

var input_I2 = J$.readInput(0);
var input_S2 = J$.readInput("");
var input_B2 = J$.readInput(false);
var input_I3 = J$.readInput(0);
var input_B1 = J$.readInput(false);
var input_B3 = J$.readInput(false);
var input_S1 = J$.readInput("");

var fn67 = function (b12, s41, x28, b1, s24, b23, x56) {
    var b2 = b1;
    var b22 = b1;
    var x66;
    if (b1) {
        var e3 = "b2";
        x66 = !(eval(e3));
    } else {
        var b5 = b12;
        var x61 = x28;
        var b45 = b12;
        var x6 = x56;
        var b27 = b22;
        var b7 = b22;
        var b9 = x6 > +(b7);
        var b11;
        if (b9) {
            b11 = false;
        } else {
            b11 = true;
        }
        var b15 = !(((b12).toString()) ? true : false);
        var s17 = '' + (eval("b15"));
        var b20 = false;
        if (b11 && Boolean(Number(s17))) {
            b20 = true;
        }
        var x60;
        if (b20) {
            x60 = b22;
        } else {
            var s33 = s24;
            var b32 = b23;
            var b25 = Boolean(s24);
            var b40 = b27;
            var b29 = (x28) ? true : false;
            var b30 = b27 !== b29;
            var x51;
            if (b30) {
                x51 = "HkWY";
            } else {
                var x48;
                if (b32) {
                    var s35 = s33;
                    var x34 = Number(s33);
                    var x36 = parseInt(s35, 10);
                    var b37;
                    if (x34 >= x36) {
                        b37 = true;
                    } else {
                        b37 = false;
                    }
                    var b43 = !((s41) ? true : false);
                    x48 = (eval("b37") ? b40 : b43);
                } else {
                    x48 = eval("var b46 = !(b45);b46");
                }
                x51 = '' + (!(x48));
            }
            var x52;
            if (b23) {
                x52 = '' + (b25);
            } else {
                x52 = x51;
            }
            var b53 = (x52) ? true : false;
            var s55 = '' + (!(b53));
            var b58 = s55 === String(x56);
            x60 = b58;
        }
        var e62 = "x61";
        var x65;
        if (b5) {
            x65 = x60;
        } else {
            x65 = !( !! (eval(e62)));
        }
        x66 = x65;
    }
    return x66;
}
fn67(input_B1, input_S1, input_I3, input_B2, input_S2, input_B3, input_I2);
