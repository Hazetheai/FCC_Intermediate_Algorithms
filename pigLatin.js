//Translate the provided string to pig latin. Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".ˀ
//If a word begins with a vowel you just add "way" to the end. Input strings are guaranteed to be English words in all lowercase.

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin


function translatePigLatin(str) {
	const reFindVowel = /\b[aeiouAEIOU]/g;
	const reFindConsonant = /\b[^aeiouAEIOU]+/g;
	return reFindVowel.test(str) ? append(str) : remove(str);

	function append(str) {
		return str.concat("way");
	}

	function remove(str) {
		let start = str.match(reFindConsonant);
		return str.replace(reFindConsonant, "").concat(start + "ay");
	}
}

translatePigLatin("eight");