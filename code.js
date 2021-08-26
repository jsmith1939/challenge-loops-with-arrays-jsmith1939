// To be used for the Basic Level:
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function render(array, challengeNum) {
  let challenge = document.createElement('h3');
  let divTag = document.createElement('div');

  challenge.innerHTML = "Challenge " + challengeNum;
  divTag = array
  document.body.append(challenge);
  document.body.append(divTag);
}

////////////////////////////////////////////////////////////////////////////////
//Basic Challenges:
// Your code here
function challenge1() {
  let array = JSON.stringify(sampleArray);
  render(array, 1);
  return array;
}
challenge1();

console.assert(
  challenge1() === `[${sampleArray.join()}]`,
  'Not the same array'
)
console.assert(
  challenge1() !== sampleArray,
  'Not the same array'
)

function challenge2() {
  array = JSON.stringify(sampleArray.filter(number => number % 2 === 0));
  render(array, 2);
  return array;
}
challenge2();
console.assert(
  challenge2() === `[${sampleArray.filter(number => number % 2 === 0)}]`,
  'Not the same array'
)
console.assert(
  challenge2() !== sampleArray,
  'Not the same array'
)

function challenge3() {
  array = JSON.stringify(sampleArray.filter(number => number % 2 === 1));
  render(array, 3);
  return array;
}
challenge3();
console.assert(
  challenge3() === `[${sampleArray.filter(number => number % 2 === 1)}]`,
  'Not the same array'
)
console.assert(
  challenge3() !== sampleArray,
  'Not the same array'
)

function challenge4() {
  array = JSON.stringify(sampleArray.filter(number => number % 8 === 0));
  render(array, 4);
  return array;
}
challenge4();
console.assert(
  challenge4() === `[${sampleArray.filter(number => number % 8 === 0)}]`,
  'Not the same array'
)
console.assert(
  challenge4() !== sampleArray,
  'Not the same array'
)

function challenge5() {
  array = JSON.stringify(sampleArray.map(number => Math.pow(number, 2)));
  render(array, 5);
  return array;
}
challenge5();
console.assert(
  challenge5() === `[${sampleArray.map(number => Math.pow(number, 2))}]`,
  'Not the same array'
)
console.assert(
  challenge5() !== sampleArray,
  'Not the same array'
)

////// challenge6 use stackoverflow rss
function challenge6() {
  array = JSON.stringify(sampleArray.reduce((a, b) => a + b));
  render(array, 6);
  return array;
}
challenge6();
console.assert(
  challenge6() === sampleArray.reduce((a, b) => a + b).toString(),
  'Not the same array'
)
console.assert(
  challenge6() !== 9096,
  'Not the same array'
)

function challenge7 () {
  array = JSON.stringify(Math.min(...sampleArray));
  render(array, 7);
  return array;
}
challenge7();
console.assert(
  challenge7() === `20`,
  'Not the same array'
)
console.assert(
  challenge7() !== sampleArray,
  'Not the same array'
)

function challenge8() {
  array = JSON.stringify(Math.max(...sampleArray));
  render(array, 8);
  return array;
}
challenge8();
console.assert(
  challenge8() === `940`,
  'Not the same array'
)
console.assert(
  challenge8() !== sampleArray,
  'Not the same array'
)

////////////////////////////////////////////////////////////////////////////////
//Intermediate Challenges:

let number = 100
let newArray = []
function challenge9() {
  for (let i = 0; i < number; i++) {
    newArray.push(i)
    array = JSON.stringify(newArray.filter(i => i % 3 === 0));
  }
  render(array, 9)  
}
challenge9()
console.assert(
  challenge9() !== newArray.filter(i => i % 3 === 0).toString(),
  'Not the same array'
)
console.assert(
  challenge9() !== sampleArray,
  'Not the same array'
)

function challenge10() {
  newArray = []
  for (let i = 0; i < number; i++) {
    newArray.push(i)
    array = JSON.stringify(newArray.filter(i => i % 7 === 0));
  }
  render(array, 10)  
}
challenge10()
console.assert(
  challenge10() !== `[${sampleArray.join()}]`,
  'Not the same array'
)
console.assert(
  challenge10() !== sampleArray,
  'Not the same array'
)

function challenge11() {
  newArray = []
  for (let i = 0; i < number; i++) {
    newArray.push(i)
    array = JSON.stringify(newArray.filter(i => i % 3 === 0 || i % 7 === 0));
  }
  render(array, 11)  
}
challenge11()
console.assert(
  challenge11() !== `[${sampleArray.join()}]`,
  'Not the same array'
)
console.assert(
  challenge11() !== sampleArray,
  'Not the same array'
)

function challenge12() {
  newArray = []
  for (let i = 0; i < number; i++) {
    newArray.push(i)
  array = JSON.stringify(newArray.filter(i => i % 5 === 0 && i % 10 !== 0));
  }
  render(array, 12) 
}
challenge12()
console.assert(
  challenge12() !== `[${sampleArray.join()}]`,
  'Not the same array'
)
console.assert(
  challenge12() !== sampleArray,
  'Not the same array'
)

function challenge13() {
  for (let i = 0; i < 20; i++) {
    newArray.push(i)
    array = JSON.stringify(newArray.reduce((a, b) => a + b));
  }
  render(array, 13);
}
challenge13();
console.assert(
  challenge13() !== `[${newArray.join()}]`,
  'Not the same array'
)
console.assert(
  challenge13() !== newArray,
  'Not the same array'
)

// Josue help with the challenges below
function challenge14(min, max) {
  let localArray = []
  for (min; min <= max; min++) {
    localArray.push(min)
    array = (localArray + ", ")
  }
  render(array, 14)
}
challenge14(1, 6)
console.assert(
  challenge14() !== `[${newArray.join()}]`,
  'Not the same array'
)
console.assert(
  challenge14() !== newArray,
  'Not the same array'
)

function challenge15(min, max) {
  let localArray = []
  for (max; max >= min; max--) {
    localArray.push(max)
    array = (localArray + ", ")
  }
  render(array, 15)
}
challenge15(1, 6)
console.assert(
  challenge15() !== `[${newArray.join()}]`,
  'Not the same array'
)
console.assert(
  challenge15() !== newArray,
  'Not the same array'
)

function challenge16(min, max) {
  let localArray = []
  for (min; min <= max; min++) {
    localArray.push(min)
      array = (min + ", ")
  }
  render(array, 16)
}
challenge16(-10, -1)
console.assert(
  challenge16() !== `[${newArray.join()}]`,
  'Not the same array'
)
console.assert(
  challenge16() !== newArray,
  'Not the same array'
)

function challenge17(min, max) {
  let localArray = []
  for (max; max >= min; max--) {
    localArray.push(max)
    array = (max + ", ")
  }
  render(array, 17)
}
challenge17(-10, -1)
console.assert(
  challenge17() !== `[${newArray.join()}]`,
  'Not the same array'
)
console.assert(
  challenge17() !== newArray,
  'Not the same array'
)

function challenge18(min, max) {
  let localArray = []
  for (max; max >= min; max--) {
      if (max % 2 === 1 || max % 2 === -1) {
        localArray.push(max)
          array = (max + ", ")
      }
  }
  render(array, 18)
}
challenge18(-10, 10)
console.assert(
  challenge18() !== `[${newArray.join()}]`,
  'Not the same array'
)
console.assert(
  challenge18() !== newArray,
  'Not the same array'
)