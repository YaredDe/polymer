// Your task is to write function which takes string and list of delimiters as an input and returns list of strings/characters after splitting given string.

// multiple_split('Hi, how are you?', [' ']) => # [Hi,', 'how', 'are', 'you?']
// multiple_split('1+2-3', ['+', '-']) => ['1', '2', '3']
// const multipleSplit = (str, del) => del ? str.split(new RegExp(del.map(el => '\\' + el).toString().replace(/,/g, '|'), 'gi')).filter(el => el) : str.split().filter(el => el);

var sentence = ("Hi, how are you?");
var numbers = ("1+2-3");

function textSplit(text) {
	var emptyList = [];
	text.split(" ").forEach(element => {
		emptyList.push(element);
	})
	console.log(emptyList);
} ;

textSplit(sentence);

function digitSplit(digit) {
	var emptyList = [];
	digit.split("").forEach(element => {
		emptyList.push(element);
	})
	emptyList.replace(/[+,-]/, "");
	console.log(emptyList);
}

digitSplit(numbers);