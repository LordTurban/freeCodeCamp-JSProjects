/*  This function takes a number (between 1 to 3999) and convert it to its Roman Numeral form.
    It takes the number from the given argument and takes some values from it (the ammount of
    how much thousands, hundreds, tens and single units are in the number). The process looks
    a little clumsy and it may be more efficient ways to solve this problem. */

function convertToRoman(num) {

    let number = num;
    let romanNumber = "";

    let thousands = Math.floor(number / 1000);    
    let nextNumber = (number % 1000);    
    let hundreds = Math.floor(nextNumber / 100);    
    nextNumber = (nextNumber % 100);    
    let tens = Math.floor(nextNumber / 10);    
    let units = (nextNumber % 10);    
//  This dictionary is used to access the Roman Numeral form of each value (thousands, hundreds...) //
    let romanNumberCatalog = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M"
    };
//  These "if else" are used to form from the dictionary the Roman Numeral form of the given number in the argument //
    if (thousands != 0) {
        for (let i = 0; i < thousands; i++) {
           romanNumber +=  romanNumberCatalog[1000];
           console.log(romanNumber);
        }
    }

    if (hundreds == 5) {        
        romanNumber +=  romanNumberCatalog[500];
        console.log(romanNumber);
    } else if (hundreds == 4) {
        romanNumber += romanNumberCatalog[100] + romanNumberCatalog[500];
        console.log(romanNumber);
    } else if (hundreds == 6) {
        romanNumber += romanNumberCatalog[500] + romanNumberCatalog[100];
        console.log(romanNumber);
    } else if (hundreds == 7) {
        romanNumber += romanNumberCatalog[500] + romanNumberCatalog[100] + romanNumberCatalog[100];
        console.log(romanNumber);
    } else if (hundreds == 8) {
        romanNumber += romanNumberCatalog[500] + romanNumberCatalog[100] + romanNumberCatalog[100] + romanNumberCatalog[100];
        console.log(romanNumber);
    } else if (hundreds == 9) {
        romanNumber += romanNumberCatalog[100] + romanNumberCatalog[1000];
        console.log(romanNumber);
    } else {
        for (let i = 0; i < hundreds; i++) {
            romanNumber += romanNumberCatalog[100];
            console.log(romanNumber);
        }
    }

    if (tens == 5) {        
        romanNumber +=  romanNumberCatalog[50];
        console.log(romanNumber);
    } else if (tens == 4) {
        romanNumber += romanNumberCatalog[10] + romanNumberCatalog[50];
        console.log(romanNumber);
    } else if (tens == 6) {
        romanNumber += romanNumberCatalog[50] + romanNumberCatalog[10];
        console.log(romanNumber);
    } else if (tens == 7) {
        romanNumber += romanNumberCatalog[50] + romanNumberCatalog[10] + romanNumberCatalog[10];
        console.log(romanNumber);
    } else if (tens == 8) {
        romanNumber += romanNumberCatalog[50] + romanNumberCatalog[10] + romanNumberCatalog[10] + romanNumberCatalog[10];
        console.log(romanNumber);
    } else if (tens == 9) {
        romanNumber += romanNumberCatalog[10] + romanNumberCatalog[100];
        console.log(romanNumber);
    } else {
        for (let i = 0; i < tens; i++) {
            romanNumber += romanNumberCatalog[10];
            console.log(romanNumber);
        }
    }

    if (units == 5) {        
        romanNumber +=  romanNumberCatalog[5];
        console.log(romanNumber);
    } else if (units == 4) {
        romanNumber += romanNumberCatalog[1] + romanNumberCatalog[5];
        console.log(romanNumber);
    } else if (units == 6) {
        romanNumber += romanNumberCatalog[5] + romanNumberCatalog[1];
        console.log(romanNumber);
    } else if (units == 7) {
        romanNumber += romanNumberCatalog[5] + romanNumberCatalog[1] + romanNumberCatalog[1];
        console.log(romanNumber);
    } else if (units == 8) {
        romanNumber += romanNumberCatalog[5] + romanNumberCatalog[1] + romanNumberCatalog[1] + romanNumberCatalog[1];
        console.log(romanNumber);
    } else if (units == 9) {
        romanNumber += romanNumberCatalog[1] + romanNumberCatalog[10];
        console.log(romanNumber);
    } else {
        for (let i = 0; i < units; i++) {
            romanNumber += romanNumberCatalog[1];
            console.log(romanNumber);
        }
    }    
 // The code passes a cicle of "if else" for each step (thousands, hundreds...), to form the end result //
 return romanNumber;
}
// You put the number you wish to convert to its Roman Numeral form //
convertToRoman(2);