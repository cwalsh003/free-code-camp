function diff(arr1, arr2) {
	var newArr = [];
	var size1, size2;
	// Same, same; but different.
if(arr2.length > arr1.length){
for(var i = 0; i < arr2.length; i++){
			if (arr1.indexOf(arr2[i]) === -1) {
				newArr.push(arr2[i]);
			    }
			if (arr2.indexOf(arr1[i]) === -1 && arr1[i] !== undefined) {
				newArr.push(arr1[i]);
			    }
	}	
}else if(arr2.length < arr1.length){
	for(var i = 0; i < arr1.length; i++){
		if (arr2.indexOf(arr1[i]) === -1) {
			newArr.push(arr1[i]);
		    }
		if (arr1.indexOf(arr2[i]) === -1 && arr2[i] !== undefined) {
			newArr.push(arr2[i]);
		    }
}
}else{
	for(var i = 0; i < arr1.length; i++){
		if (arr2.indexOf(arr1[i]) === -1) {
			newArr.push(arr1[i]);
		    }
	}
	for(var i = 0; i < arr2.length; i++){
		if (arr1.indexOf(arr2[i]) === -1) {
			newArr.push(arr2[i]);
			  }
	
	}
}
	return newArr;
}

console.log(diff([1, "calf", 3, "piglet"], [7, "filly"]));

