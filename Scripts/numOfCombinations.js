const numOfCombinations = (n) => {
	let result = 0;
	for(i = 1; i < n; i++) {
		result += n-i;
	}
	return result;
}

console.log(numOfCombinations(4));
