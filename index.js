// Code your solution here!

function printString(str) {
    console.log(str[0])
    if (str.length > 1) {
        printString(str.substring(1, str.length))
    } else {
        return
    }
}

function reverseString(str) {
    let string = ""
    if (str.length > 1) {
        string += str[str.length - 1] + reverseString(str.substring(0, str.length - 1))
    } else {
        return str[0]
    }
    return string
}

function isPalindrome(str) {
    if (str[0] !== str[str.length - 1]) {
        return false
    } else if (str.length > 2) {
        return isPalindrome(str.substring(1, str.length - 1))
    } else {
        return true
    }
}

function addUpTo(arr, ind) {
    if (ind > 0) {
        return arr[0] + addUpTo(arr.slice(1), ind - 1)
    } else {
        return arr[0]
    }
}

function maxOf(arr) {
    if (arr.length > 1) {
        const ret = maxOf(arr.slice(1))
        return ret > arr[0] ? ret : arr[0]
    } else {
        return arr[0]
    }
}

function includesNumber(arr, num) {
    if (arr[0] === num) {
        return true
    } else if (arr.length > 1) {
        return includesNumber(arr.slice(1), num)
    } else {
        return false
    }
}
