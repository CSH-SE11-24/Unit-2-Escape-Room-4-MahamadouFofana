const prompt = require('prompt-sync')()


let guess = prompt("Password:")

while(guess !== "SE!!") {
  let guess = prompt("Try again:")
}

let compentenc