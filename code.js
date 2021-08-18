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

function challenge2() {
  array = JSON.stringify(sampleArray.filter(number => number % 2 === 0));
  render(array, 2);
  return array;
}
challenge2();

function challenge3() {
  array = JSON.stringify(sampleArray.filter(number => number % 2 === 1));
  render(array, 3);
  return array;
}
challenge3();

function challenge4() {
  array = JSON.stringify(sampleArray.filter(number => number % 8 === 0));
  render(array, 4);
  return array;
}
challenge4();

function challenge5() {
  array = JSON.stringify(sampleArray.map(number => Math.pow(number, 2)));
  render(array, 5);
  return array;
}
challenge5();

////// challenge6 use stackoverflow rss
function challenge6() {
  array = JSON.stringify(sampleArray.reduce((a, b) => a + b));
  render(array, 6);
  return array;
}
challenge6();

function challenge7 () {
  array = JSON.stringify(Math.min(...sampleArray));
  render(array, 7);
  return array;
}
challenge7();

function challenge8() {
  array = JSON.stringify(Math.max(...sampleArray));
  render(array, 8);
  return array;
}
challenge8();

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

function challenge10() {
  newArray = []
  for (let i = 0; i < number; i++) {
    newArray.push(i)
    array = JSON.stringify(newArray.filter(i => i % 7 === 0));
  }
  render(array, 10)  
}
challenge10()

function challenge11() {
  newArray = []
  for (let i = 0; i < number; i++) {
    newArray.push(i)
    array = JSON.stringify(newArray.filter(i => i % 3 === 0 || i % 7 === 0));
  }
  render(array, 11)  
}
challenge11()

function challenge12() {
  newArray = []
  for (let i = 0; i < number; i++) {
    newArray.push(i)
  array = JSON.stringify(newArray.filter(i => i % 5 === 0 && i % 10 !== 0));
  }
  render(array, 12) 
}
challenge12()

function challenge13() {
  for (let i = 0; i < 20; i++) {
    newArray.push(i)
    array = JSON.stringify(newArray.reduce((a, b) => a + b));
  }
  render(array, 13);
}
challenge13();

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

function challenge15(min, max) {
  let localArray = []
  for (max; max >= min; max--) {
    localArray.push(max)
    array = (localArray + ", ")
  }
  render(array, 15)
}
challenge15(1, 6)

function challenge16(min, max) {
  let localArray = []
  for (min; min <= max; min++) {
    localArray.push(min)
      array = (min + ", ")
  }
  render(array, 16)
}
challenge16(-10, -1)

function challenge17(min, max) {
  let localArray = []
  for (max; max >= min; max--) {
    localArray.push(max)
    array = (max + ", ")
  }
  render(array, 17)
}
challenge17(-10, -1)

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