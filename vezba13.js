function expandedForm(num) {
    num = num.toString();
    resenje = "";
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== "0") {
            resenje += num[i] + "0".repeat(num.length - 1 - i) + " + ";
        }
    }
    return resenje.slice(0, resenje.length - 3)
}

console.log(expandedForm(7034))