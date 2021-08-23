function kreirati_niz(duz_niza) {
    result_arr = []

    for (let i = 0; i < duz_niza; i++) {

        input_el = Math.floor(Math.random() * 100);

        result_arr.push(input_el)

    }
    return result_arr
}

nn = kreirati_niz(20)

console.log(nn)