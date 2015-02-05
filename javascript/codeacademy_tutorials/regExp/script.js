var regex = /Java\s*Script/ig;




var text='Java script is not Java or Script. Javascript is a language in its own right.';

//console.log(text.replace(regex, 'Check me out'));

var regex=/(is not|is)/ig;


console.log(text.replace(regex, "<em>$1</em>"))