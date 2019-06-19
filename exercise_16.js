// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

// const solution = str => str.match(/.{1,2}/g).map(element => element.length % 2 == 0 ? element : element.concat('_'));

var sentence1 = "abc";
var sentence2 = "abcd";

function wordFinder(word) {
	var emptyList = [];
	word.split("").forEach((element, index) => {
		if((index+1) % 2 === 0) {
			emptyList.push(word[index-1]+element);
        }
    }) 
	if(word.length % 2 != 0) {
		emptyList.push(word[word.length - 1] + "_");
    };
    console.log(emptyList);
};

wordFinder(sentence1);
wordFinder(sentence2);