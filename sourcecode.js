const characterlist = [[" ", "░"], ["q", "ɷ"], ["w", "ʎ"], ["e", "ʥ"], ["r", "ʩ"], ["t", "ʯ"], ["y", "ɉ"], ["u", "ɻ"], ["ı", "ʦ"], ["o", "ʫ"], ["p", "Ϡ"], ["ğ", "Љ"], ["ü", "ϑ"], ["a", "Ϫ"], ["s", "ϧ"], ["d", "ϡ"], ["f", "Ѿ"], ["g", "Җ"], ["h", "҉"], ["j", "Ԃ"], ["k", "Ք"], ["l", "ᾞ"], ["ş", "ᾥ"], ["i", "ﬗ"], ["z", "ﬠ"], ["x", "ﬣ"], ["c", "₫"], ["v", "ᵫ"], ["b", "ԫ"], ["n", "Ԭ"], ["m", "ԭ"], ["ö", "ԇ"], ["ç", "Ԋ"], ["\n", "Ѩ"]];

function encode(data) {
    for (let i = 0; i < characterlist.length; i++) {
        const [o, n] = characterlist[i];
        data = data.replace(new RegExp(o, "g"), n);
    }
    return data;
}

function decode(data) {
    for (let i = 0; i < characterlist.length; i++) {
        const [o, n] = characterlist[i];
        data = data.replace(new RegExp(n, "g"), o);
    }
    return data;
}
