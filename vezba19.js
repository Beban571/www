function najDuzaRec(str_par) {
    str_arr = str_par.split(" ");
    naj_duza_rec = str_arr[0];
    naj_kraca_rec = str_arr[0];
    for (let i = 0; i < str_arr.length; i++) {
        if(str_arr[i].length > naj_duza_rec.length) {
            naj_duza_rec = str_arr[i];
        }
        if (str_arr[i].length < naj_kraca_rec.length) {
            naj_kraca_rec = str_arr[i];
        }
    }
    return [naj_duza_rec, naj_kraca_rec]
}

console.log(
    najDuzaRec(
        "Write a Javascript function that accepts a string"
    )
)