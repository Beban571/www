let person1 = {
    ime: "John",
    prezime: "Doe",
    godiste: 1987,
    opis: {
        oci: "plave",
        visina: "1.89m",
        opis2: {
            mRodjenja: "Srbija"
        }
    }
};

let person2 = {...person1, opis: { ...person1.opis }, opis2: {...person1.opis.opis2}}

person2.ime = "Jim",

person2.prezime = "Walker",

person2.godiste = 1977,

person2.opis.opis2.mRodjenja = "Nemacka",

console.log(person1.opis.opis2.mRodjenja)

console.log(person2.opis.opis2.mRodjenja)



// // let person = {
// //     firstName: 'John',
// //     lastName: 'Doe',
// //     address: {
// //         street: 'North 1st street',
// //         city: 'San Jose',
// //         state: 'CA',
// //         country: 'USA'
// //     }
// // };


// // let cPerson = Object.assign({}, person);

// // cPerson.firstName = 'Jane'; 

// // cPerson.address.street = 'Amphitheatre Parkway'; 
// // cPerson.address.city = 'Mountain View'; 

// // console.log(person.address.city);

// // console.log(cPerson.address.city);
