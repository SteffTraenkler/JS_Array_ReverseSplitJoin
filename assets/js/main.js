//Lev1_1 Array Sort
console.log('%c Lev1_1 Array sort', 'color: yellowgreen; font-weight:900; text-decoration: underline');

let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];
let sortierung = languages.sort();

console.log(sortierung);

//Lev1_13 Join()
console.log(' ');
console.log('%c Lev1_13 Array join', 'color: yellowgreen; font-weight:900; text-decoration: underline');

let meinText1 = ["Hello", "World"];
let meinText2 = ["Anass", "Elaine", "Eric", "Georg"];
let meinText3 = ["Superman", "Wonderwoman", "Hulk", "Batman", "Spiderman"];

console.log('this is join1, meinText1: ' + meinText1.join());
console.log('this is join2, meinText1: ' + meinText1.join(''));
console.log('this is join3, meinText1: ' + meinText1.join(' '));
console.log('this is join4, meinText1: ' + meinText1.join('+'));

console.log('this is join1, meinText2: ' + meinText2.join());
console.log('this is join2, meinText2: ' + meinText2.join(''));
console.log('this is join3, meinText2: ' + meinText2.join(' '));
console.log('this is join4, meinText2: ' + meinText2.join('+'));

console.log('this is join1, meinText3: ' + meinText3.join());
console.log('this is join2, meinText3: ' + meinText3.join(''));
console.log('this is join3, meinText3: ' + meinText3.join(' '));
console.log('this is join4, meinText3: ' + meinText3.join('+'));

//Lev1_2 Array reverse
console.log(' ');
console.log('%c Lev1_2 Array reverse', 'color: yellowgreen; font-weight:900; text-decoration: underline');

let sortierung2 = sortierung.reverse();
console.log(sortierung2);


//Lev2_2 sort bigger number
console.log(' ');
console.log('%c Lev2_2 sort bigger numbers', 'color: yellowgreen; font-weight:900; text-decoration: underline');

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];
console.log(numArray2.sort((a, b) => a - b));

//Lev3_1 reverse words
console.log(' ');
console.log('%c Lev3_1 reverse words', 'color: yellowgreen; font-weight:900; text-decoration: underline');

let arrName1 = 'Sergio';
let arrName2 = 'Hannah';
let arrName3 = 'Regallager';
let arrName4 = 'Reliefpfeiler';
let arrName5 = 'Renter';
let arrsent1 = 'Ella mag alle Bohnen';
let arrsent2 = 'han nesaH has ennaH';

let rev1 = arrName1.split('').reverse().join('');
console.log(rev1);
let rev2 = arrName2.split('').reverse().join('');
console.log(rev2);
let rev3 = arrName3.split('').reverse().join('');
console.log(rev3);
let rev4 = arrName4.split('').reverse().join('');
console.log(rev4);
let rev5 = arrName5.split('').reverse().join('');
console.log(rev5);

let revs1 = arrsent1.split('').reverse().join('');
console.log(revs1);
let revs2 = arrsent2.split('').reverse().join('');
console.log(revs2);