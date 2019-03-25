$(document).ready(function() {
  $("h1").click(function() {
    alert(sentence);
  });

  $("p").click(function() {
    alert(reverseString(upper));
  });


});

  var sentence = prompt("Enter the sentence:");
  var result = function(){
    return sentence.charAt(0).toUpperCase() + sentence.charAt(sentence.length-1).toUpperCase();

  };
  alert(result());


  var reverse = function result(){
    return sentence.charAt(sentence.length-1).toUpperCase() + sentence.charAt(0).toUpperCase();
  };

  alert(reverse());

  var third = function(){
    return sentence + reverse ();

  };

  alert(third());

  var four = function(){
    return sentence.charAt(Math.floor(sentence.length / 2))+third();

  };

  alert(four());

  var upper = sentence.charAt(Math.floor(sentence.length / 2))+third();
  var k = upper.toUpperCase();
  alert(k);


  function reverseString(upper){
    var splitString = upper.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  };

  alert(reverseString(upper));


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
