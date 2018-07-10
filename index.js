/**
 * @fileOverview Contains logic of Deaf Grandma
 */
const isUppercase = require('./isUpperCase');
const getRandomValue = require('./getRandomValue');
const { prompt, print } = require('./prompt-print');

/**
 * Put all the code here which would facilitate your conversation
 * with the Deaf Grandma.
 *
 * You can make use of the
 * 1. prompt function to get input from the user
 * 2. print function to print text on to the console
 */
let byecount = 0;
print('What do you want to say to Grandma!!');
let msg = prompt();
while (byecount < 2) {
  if (isUppercase(msg)) {
    if (msg === 'BYE') {
      byecount += 1;
    }
    print('NO, NOT SINCE '.concat(getRandomValue(1930, 1950)));
  } else {
    byecount = 0;
    print('HUH?! SPEAK UP, SONNY!');
  }
  msg = prompt();
}
