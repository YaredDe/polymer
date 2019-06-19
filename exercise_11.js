var phrase = "The greatest victory is that which requires no battle";

var createArray = (phrase) => { 
    return phrase.split(" ");
};

var phraseArray = createArray(phrase);

var backwardsArray = (storedArray) => {
    var newArray = storedArray.reverse();
    console.log(newArray);
};

backwardsArray(phraseArray);