
function steamrollArray(arr) {
  // I'm a steamroller, baby
var newArr = [];

var roll = function(val){
	if(!Array.isArray(val)){
		newArr.push(val);
	}else{
		for(var a in val){
			roll(val[a]);
		}

	}
}

arr.forEach(roll);

  return newArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

