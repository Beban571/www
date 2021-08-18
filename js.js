const a = ["Google", "Youtube", "Facebook"];

const list = document.querySelector(".list");

let newList = '';

for(let i = 0; i < a.length; i++){
    newList += `<li class='list-item'>${a[i]}</li>`
}