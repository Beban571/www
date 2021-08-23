function findNb(m) {
    num = 1;
    res = 0;
    while (res < m) {
        res += num ** 3;
        num += 1;
    }
    if (res === m) {
        return num - 1;
    }
    return - 1;
}


console.log(findNb(1071225))