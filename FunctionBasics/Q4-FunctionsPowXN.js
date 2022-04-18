//#4 Functions pow(x,n)
// Write a function pow(x,n) that returns x in power n. Or, in other words, 
// multiplies x by itself n times and returns the result.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Create a web-page that prompts for x and n, and 
// then shows the result of pow(x,n).

// Run the demo

// P.S. In this task the function should support only natural values of 
// n: integers up from 1.
//my answer:
let x = prompt('choose an integer > 0 ')
let n = prompt('choose another integer > 0')

function pow(x,n){
    return x**n
}

console.log(pow(x,n))

//js.info's answer
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }
