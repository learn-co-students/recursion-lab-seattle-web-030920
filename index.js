// Code your solution here!
function printString(str){
    console.log(str[0])
    if (str.length > 1){
        let substring = str.substring(1, str.length)
        printString(substring);
    } else {
        return true;
    }
}

function reverseString(str){
    if (str.length === 0){
        return "";
    }
    return str[str.length - 1] + reverseString(str.substring(0, str.length - 1));
}

// function isPalindrome(str){
//     if (str.length < 2) {
//         return true;
//     } 
//     else if (str[str.length - 1] === str[0]) {
//         isPalindrome(str.substring(1, str.length - 1))
//     } else {
//         return false;
//     }
// }
function isPalindrome(myString) {
    let l = myString.length;
  
    if (l < 2) {
      return true;
    } else if (myString[l - 1] === myString[0]) {
      return isPalindrome(myString.substring(1, l - 1));
    } else {
      return false;
    }
  }

function addUpTo(arr, index){
    if (index) {
        return arr[index] + addUpTo(arr, index--);
    } else {
        return arr[index]
    }
}

function maxOf(arr){

}

function includesNumber(str){

}