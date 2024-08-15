// Sum of Two Numbers
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  return a + b;
}


// Factorial of a Number
function factorial(n) {
  if (typeof n !== 'number') {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  else{
    return n === 0 ? 1 : n * factorial(n - 1);
  } 
}

// Find the Largest Number
function findLargest(arr) {
  if (arr.some(isNaN)) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  else{
    return Math.max(...arr);
  }
}

// Count Vowels in a String
function countVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
     if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}


function isPrime(n) {
  // Add your code 
    if (n <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false; 
    }
    return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
