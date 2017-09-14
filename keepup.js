

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

//Round 3-  NEEDS WORK
 
const toonify = (accent, sentence) => {


	if(accent ='daffy') {
			for(let i = 0; i <= sentence.length; i ++){
				if (i === 's') {
					sentence[i].replace('s', 'th')
				} 
		}
	} else if (accent === 'elmer') {
			for(let i = 0; i <= sentence.length; i ++) {
				if (i === 'r') {
				sentence[i].replace('r', 'w')
		}
	} else {
		console.log(toonify)
	}


	return sentence
	}
}

tonnify ('daffy', "so you smell like sausage")




