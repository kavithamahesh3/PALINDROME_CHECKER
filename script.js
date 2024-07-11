const checkWord = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const output = document.getElementById("result");

const cleanWord = (str) => {
  return str.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
};

const checkPalindrome = () => {
  if(checkWord.value == "")
  {
    alert("Please input a value");
  }
  const word = cleanWord(checkWord.value);
   
output.innerText = word === word.split("").reverse().join("") ?
  `${checkWord.value} is a palindrome` : `${checkWord.value} is not a palindrome`;
};

checkButton.addEventListener("click", checkPalindrome);
