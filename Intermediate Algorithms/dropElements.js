
function dropElements(arr, func) {
  // Drop them elements.
  var shiftIt;
	var dice;
for(var i = 0; i < arr.length; i++){
	if(!func(arr[i])){
		arr.shift;
		console.log(arr[i]);
	}else{
		dice = i;break;
	}
	dice = i;

}
console.log(dice);
if(dice === arr.length - 1){
	return [];
}else{
  arr = arr.slice(dice,arr.length);
  return arr;
}
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));


