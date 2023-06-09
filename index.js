// Code your solutions in this file
function writeCards(names, eventName) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      messages.push(message);
    }
  
    return messages;
  }
const names = ["Ada", "Brendan", "Ali"];
const eventName = "birthday";

const thankYouMessages = writeCards(names, eventName);
console.log(thankYouMessages);


function countDown(count) {
    while (count >= 0) {
      console.log(count);
      count--;
    }
  }
  
  let count = 10;
  countDown(count);
