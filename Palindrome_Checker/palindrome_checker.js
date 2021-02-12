/*The function checks if a given string is a palindrome, 
excluding not alphanumerical characters and ignoring upper or lower case.
If the string is a palindrome, the function returns "true", if not, returns "false".*/

function palindrome(str) {
    
    let result = str.toLowerCase().replace((/([^a-zA-Z0-9])/g), "");
    
    if (result == result.split("").reverse().join("")) {
        return true
    } else {
        return false
    }  
}
  
palindrome("race car");