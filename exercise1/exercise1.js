//This is the first exercise written in Javascript
var text = "It is a long established fact that a reader \nwill be distracted by the readable content \nof a page when looking at its layout. \nThe point of using Lorem Ipsum is \nthat it has a more-or-less normal \ndistribution of letters.";
//splitting the strings in break lines
const para = text.split("\n");
//reverse the lines
const reversed = para.reverse();
//from an array to string
const joined = reversed.join('\n');
console.log(joined);

