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
      let endIndex = myString.length - 1
  
    if (endIndex > 0) {
      let mySubString = myString.substring(0, endIndex);
      let revString = reverseString(mySubString);
      return myString[endIndex] + revString
    } else {
        return myString[endIndex]
    }
  }

  function isPalindrome(myString) {
      let length = myString.length
      let endIndex =  length - 1;
      let output;
        if (myString[0] !== myString[endIndex]) {
            output = false
        } else if (length > 1) {
            let mySubString = myString.substring(1, endIndex);
            output = isPalindrome(mySubString);
        } else {
            output = true
        }
    return output;
  }

  function addUpTo(array, index) {
        let sum = array[index];
        if (index !== 0) {
            sum += addUpTo(array, index - 1)
        } 
        return sum
  }

  function maxOf(array, max=0) {
      let length = array.length
      console.log(length)
    if (array[0] > max) {
        max = array[0]
    }
    if (length > 1) {
        array.shift()
        max = maxOf(array, max)
    }
    return max
  }

  function includesNumber(array, element) {
      let output = false;
      if (array[0] === element) {
          output = true;
      } else if (array.length > 1) {
        array.shift();
        output = includesNumber(array, element)
    } 
        return output
  }


