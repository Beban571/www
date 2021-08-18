color = ["Blue", "Green", "Red", "Orange", "Violete", "Indigo", "Yellow"]

o = ["th", "st", "nd", "rd"]

o.shift();

for (let i = 0; i < o.length; i++) {
    console.log(`${i + 1}${o[i]} choice is ${color[i]}`);
}

