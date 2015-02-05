
//Regular expression which looks for all "java (any amount of space) script" with case insensativity
var regex = /Java\s*Script/ig;

var text='Java script is not Java or Script. Javascript is a language in its own right.';
//console.log(text.replace(regex, 'Check me out'));

//Regex which retains the specific words found
//Useful for replacing differing words
var regex=/(is not|is)/ig;

//Italicize either 'is' or 'is not'
//Able to target each match specifically
console.log(text.replace(regex, "<em>$1</em>"))