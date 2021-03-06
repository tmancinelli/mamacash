//This is the first exercise written in Javascript
var text = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.";
//splitting the strings in break lines
const para = text.split("\n");
//reverse the lines
const reversed = para.reverse();
//from an array to string
const joined = reversed.join('\n');
console.log(joined);

