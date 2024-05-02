
//Sum of elements in an array


const array = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

console.log("Sum of elements:", sum); 


//Print unique values from an array


const Numbers = [1, 2, 3, 3, 4, 5, 5];

const SeparateNumber = new Set(Numbers);

const SeparateArray = [...SeparateNumber];


console.log("The Array are:", SeparateArray); 

//Concat two arrays

const value1=[1,2,3];

const value2=[4,5];

const AddValue= (value1 + ","+ value2);

console.log(AddValue);

// Intersection of two arrays



const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const SameValue = array1.filter(element => array2.includes(element));

console.log(SameValue); 



//Check given string is palindrome or not



function isPalindrome(str) {
    
    const lowerCaseStr = str.toLowerCase();
    
    
    const reversedStr = lowerCaseStr.split('').reverse().join('');
    
    
    return lowerCaseStr === reversedStr;
  }
  
 
  console.log("Madam " +isPalindrome("Madam")+" is palindrome");
  console.log("Peace " + isPalindrome("Peace")+" is not a palindrome"); 
  

