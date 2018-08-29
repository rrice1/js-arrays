const cats = ['fluffy', 'spike', 'killer'];
console.log('1st cat', cats[0]);

const favoriteAnimal = 'cow,bear,dog,cat';
const favoriteAnimalArray = favoriteAnimal.split(','); //['c', 'o', 'w']
console.log('favoriteAnimalArray', favoriteAnimalArray);

const numArray = [1,2,3,4,5];
const newNum = numArray.join('cow');
console.log('newNum', newNum);

// mini challenges

const palChecker = (word) => {
    const wordArray = word.split('').join('');
    const reverseArray = word.split('').reverse().join('');

 if(wordArray === reverseArray){
     console.log(`${word} IS a palindrome`);
 } else {
     console.log(`${word} is NOT a palindrome`);
 }
};

palChecker('mom');
palChecker('hgfdsfgn');

let animals = ['fish','dog','cat','fox','bunny']

const lastItem = animals.pop(); //last
const firstItem = animals.shift(); //first
animals.push('bat');
animals.unshift('baby hippo');

console.log(lastItem);
console.log(firstItem);
console.log(animals);


// 1. what is your starting value - 0
// 2. what is your stopping value - something.length
// 3. how are you incrementing - +1

for(let i = 0; i<animals.length; i++){
     console.log(animals[i]);//do something here
}



