

//Round 1

const example = (object) => {
 	let numbers = '';

 for(let i = 0; i < object.length; i++) {
 	if(object[i].length >= 0){

 		numbers += object[i].length;
 	}
 }
 return numbers

}



example(['apple','orange','mesopotamia','surethang'])


//round 2 ----NEEDS WORK

const transmogrifier = (one, two, three) => {
	const mult = (one * two);
	const expo = Math.pow(three); 

	let result = expo.mult;
	}

 return result

}


transmogrifier(4, 5, 3)

//Round 3
 
const toonify = (accent, sentence) => {

newSentence = ''; 

	if(accent === 'daffy') {

		newSentence = sentence.replace(/s/g, 'th')
	} if (accent === 'elmer') {
			newSentence = sentence.replace(/r/g, 'w')
	} else{ 
		alert(sentence)}
	return newSentence
};

toonify('daffy', 'so you smell like sausage');




//Round 4

const wordReverse = (string) => {

	let backwards = string.split(' ').reverse();

	return backwards

}

wordReverse('here goes nothing')


// Round 5- NEEDS WORK

const letterReverse = (string) => {
	string.split(' ');

	for (i = 0; i <= string.length; i++) {
		let result = reverse(i);
	}

	return result
}

letterReverse ('Here goes nothing again')

// Round 6

const longest = (array) => {
	let longestWord = '';

	for (i = 0;  i < array.length; i++) {
		if (array[i].length > longestWord.length) {
		longestWord = array[i]
		}
	}

	return longestWord
}

longest(['I', 'will', 'be', 'visiting', 'Mesopotamia', 'soon', 'Nesopotania'])

























