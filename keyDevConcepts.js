array = [1,2,3,4,5,5];

// Functional ES6 programming methods
const arraySquared = array.map(num => num * 2)
console.log(arraySquared)

const arrayEvened = array.filter(num => num % 2 === 0)
console.log(arrayEvened)

const arrayFindFirstFive = array.find(num => num === 5)
console.log(arrayFindFirstFive)

const arrayIncludesFive = array.includes(5);
console.log(arrayIncludesFive)

const arrayValuesTotaled = array.reduce((accumulator, currentElement) => 
  accumulator + currentElement, 0)
console.log(arrayValuesTotaled)

// Promises
const myPromise = new Promise((resolve, reject) => {
  if(true) {
    setTimeout(() => {
      resolve('I have succeeded')
    }, 1000);
  } else {
    reject('I have failed');
  }
});

myPromise
  .then(value => console.log(value))
  .catch(rejectValue => console.log(rejectValue))

// Async / Await
const myAsyncFunction = async () => {
  try {
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await usersResponse.json();
    const firstUser = users[0];
    console.log(firstUser);

    const postsResponse = await fetch(
      'https://jsonplaceholder.typicode.com/posts?usersId' + firstUser.id
    )
    const posts = await postsResponse.json();
    console.log(posts);
  } catch (err) {
    console.log('Run code in browser Developer tools. Not in Node JS!');
  }
}

myAsyncFunction();