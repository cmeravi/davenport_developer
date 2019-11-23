
function pigLatin(){
  //Get orginal String and split into array
  let strArray = document.getElementById("str").value.split(" ");
  //Declare empty array to put answer in
  let newArray = []

  //Cycle through each word in the array to test for punctuation and move first letter to the end while adding "ay"
  strArray.forEach(function(element){
    //split word into an array for testing
    let word = Array.from(element);
    //test last character in word to see if it is a punctuation mark, if it is remove and save to new variable
    let punctuation = (word[word.length - 1].match(/[A-Z|a-z|ü|é]/i) === null ) ? word.pop() : '';
    //test if the first character of word is a letter, if it is, move to end and add punctuation variable (which is either empty or a punctuation mark)
    let letter1 = (typeof(word[0]) != "undefined") ? word[0]+"ay"+punctuation : punctuation;
    // remove the first character of the word
    word.shift();
    // add the new character(s) to the end of the word
    word.push(letter1);
    // merge array back into a string
    newArray.push(word.join(''));
  });

  // print back out to webpage while turning array into string separated by spaces
  document.getElementById("newStr").innerHTML = newArray.join(' ');
}
