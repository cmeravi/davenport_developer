
function middleLetters(){
  //get element from html form
  let str = document.getElementById("letters").value;
  //initialize variables in endcase senario
  let pos = str.length / 2;
  let len = 1;
  //check to see if the length is even
  if (str.length % 2 === 0) {
    //reset variabls for an even length word
    pos = str.length / 2 - 1;
    len = 2;
  }
  //Print letters to webpage
  document.getElementById("newLetters").innerHTML = str.substring(pos, pos + len);
}
