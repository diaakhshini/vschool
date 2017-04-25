function find_FirstRepeat(str) {
    var arra = str.split('');
    var result = '';
    var ctr = 0;

    for (var i = 0; i < arra.length; i++) {
        ctr = 0;

        for (var j = 0; j < arra.length; j++) {
            if (arra[i] === arra[j]) {
                ctr += 1;
            }
        }

        if (ctr < 2) {
            result = arra[i];
            break;
        }
    }
    return result;
}
console.log(find_FirstRepeat('ggggggggxkljfvlsjkfg'));