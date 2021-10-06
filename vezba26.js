function  resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("resolved");
        }, 2000);
    });
}

// async function asyncCall() {
//     console.log("calling");
//     const result = await resolveAfter2Seconds();
//     console.log("drugi korak")
//     console.log("treci korak")
// }

function asyncCall() {
    console.log("calling");
    resolveAfter2Seconds()
    .then((result) => console.log(result))
    .then(() => console.log("drugi korak"))
    .then(() => console.log("treci korak"))
}

asyncCall();