function number(busStops) {
    num_pass = 0;
    for (let i = 0; i < busStops.length; i++) {
        num_pass += busStops[i][0];
        num_pass -= busStops[i][i];
    }
    return num_pass
}
console.log(number([
    [10,0],
    [3,5],
    [5,8],
])
)