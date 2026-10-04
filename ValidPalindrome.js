var isPalindrome = function (s) {
  let cleaned = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  let left = 0,
    right = cleaned.length - 1;
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); //true
console.log(isPalindrome("race a car")); //false
console.log(isPalindrome(" ")); //true
