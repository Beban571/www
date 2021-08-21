function secondGreat(niz) {
    niz.sort(function (a, b) {
        return a - b;
    });
    niz = Array.from(new Set(niz));
    console.log(niz[1], niz[niz.length - 2]);
}

myArr = [25, 10, 5, 2, 1, 25, 10, 2, 1]

secondGreat([...myArr]);