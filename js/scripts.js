

var sentence = prompt("Enter the sentence:");
var firstLetter = sentence.charAt(0);
var lastLetter = sentence.charAt(sentence.length-1);

 alert(firstLetter.toUpperCase());
 alert(lastLetter.toUpperCase());

var upfirst = firstLetter.toUpperCase();
var uplast = lastLetter.toUpperCase();

var combine = function (upfirst, uplast){
  return upfirst+ uplast;
};
 alert(combine(upfirst,uplast));
