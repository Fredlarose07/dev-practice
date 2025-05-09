function isPalindrome(arg) {

    const reverse = arg.split("").reverse().join("")
    
    if(arg === reverse){
        console.log(arg + " est un palindrome")
    } else {
        console.log(arg + " n'est pas un palindrome")
    }
}

isPalindrome("kayak")
isPalindrome("javascript")