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