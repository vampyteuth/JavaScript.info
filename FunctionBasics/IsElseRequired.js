//#1 is 'else' required?
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }
//Will the function work differently if else is removed?
  function checkAge(age) {
    if (age > 18) {
      return true;
    }
    return confirm('Did parents allow you?');
  }

  //you do not need the else in this circumstance
