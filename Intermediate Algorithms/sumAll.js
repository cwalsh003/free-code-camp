function sumAll(arr) {
	function getMaxOfArray(numArray) {
		return Math.max.apply(null, numArray);
	}
	function getMinOfArray(numArray) {
		return Math.min.apply(null, numArray);
	}
	
	var sum = 0;
	var max = getMaxOfArray(arr);
	var min = getMinOfArray(arr);
	var dif = (max - min) + 1;
		for(var i = 0; i < dif; i++){
			sum += min;
			min++;
		}
	
	return sum;
}

sumAll([1, 4]);