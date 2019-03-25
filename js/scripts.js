

var sentence = prompt("Enter the sentence:");
var result = function(){
  return sentence.charAt(0).toUpperCase() + sentence.charAt(sentence.length-1).toUpperCase();

};
alert(result());


var reverse = function result(){
  return sentence.charAt(sentence.length-1).toUpperCase() + sentence.charAt(0).toUpperCase();
};

alert(reverse());
//  alert(firstLetter.toUpperCase());
//  alert(lastLetter.toUpperCase());
// //
// // var upfirst = firstLetter.toUpperCase();
// // var uplast = lastLetter.toUpperCase();
//
// var combine = function (upfirst, uplast){
//   return upfirst+ uplast;
// };
//  alert(combine(upfirst,uplast));
//
// // function reverseString(combine){
// //   return combine;
// // }
// //
// // reverseString (combine);
//   alert(combine(uplast,upfirst));
