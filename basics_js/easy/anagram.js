/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  
*/


function isSorted(str) {
  var arr = str.split('');  //['r', 'a', 'c', 'e']
  var sorted = arr.sort(); // ['a', 'c', 'e', 'r']
  var sortedString = sorted.join(''); // ['acer' 'race']
  return sortedString;
}

function isAnagram(str1, str2) {
  var str1 = str1.toUpperCase();
  var str2 = str2.toUpperCase();
  if(isSorted(str1) === isSorted(str2)){
    return true;
  } else {
    return false;
  }
}

var ans = isAnagram('Poor', 'roop'); //true 
console.log(ans);
