

//Round 1- Check

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


//round 2 Check

const transmogrifier = (one, two, three) => {
	let mult = (one * two);
	let expo = Math.pow(mult, three); 

 console.log(expo)

}

transmogrifier(4, 5, 3)

//Round 3-- Check
 
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




//Round 4- check

const wordReverse = (string) => {

	let backwards = string.split(' ').reverse();

	return backwards

}

wordReverse('here goes nothing')


// Round 5- Check

const letterReverse = (string) => {
	first = (string.split('').reverse().join(''))
	second = (first.split(' ').reverse().join(' '))
	return second
    }

letterReverse ('Here goes nothing again')

// Round 6- Check

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



//Final Round


const repMaster = (inpiut, function) => {

} 





















