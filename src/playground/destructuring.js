// object destructuring
const person = {
    name: 'Liangcai',
    age:'22',
    location: {
        city: 'cardiff',
        temp: '3'
    }
};

// set default name = 'Anonymous'
const {name = 'Anonymous', age} = person;

console.log(`${name} is ${age}.`);

// rename: temp:temperature
const {city, temp:temperature} = person.location;

if(city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
}

// array destructuring
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania','19147'];

const [, yourCity, state = 'New York'] = address;

console.log(`You are in ${yourCity} ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName,,mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);