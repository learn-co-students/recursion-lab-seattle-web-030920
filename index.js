function printString(myString) {
    console.log(myString[0]);
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }

  function reverseString(myString) {
    if (myString.length > 1) {
      return reverseString(myString.slice(1))+myString[0];
    } else {
      return myString[0];
    }
  }

  function isPalindrome(myString) {
    if (myString.length > 1) {
      if(myString[0]===myString[myString.length-1]){
        let mySubString = myString.substring(1, myString.length-1);
        return isPalindrome(mySubString);
      }
      else {
          return false
      }
    } else {
      return true;
    }
  }

  function addUpTo(array, index) {
    if (index>0) {
      return addUpTo(array.slice(1), index-1)+array[0];
    } else {
      return array[0];
    }
  }

  function maxOf(array) {
    if (array.length > 1) {
        if (array[0]> array[1]){
            array[1]=array[0]
        }
        return maxOf(array.slice(1));
    } else {
      return array[0];
    }
  }

  function includesNumber(array, ele) {
    if (array.length >= 1) {
        if (array[0]=== ele){
            return true
        }
        else {
            return includesNumber(array.slice(1), ele);
        }
    } else {
      return false;
    }
  }