
function truthCheck(collection, pre) {
  // Is everyone being true?
var flag = true;
	for( var a in collection){
		if((collection[a][pre] && collection[a][pre] !== null  && collection[a][pre] !== undefined && collection[a][pre] !== 0) ||  collection[a][pre] === "yes"){
			flag = true;
		}else{
			flag = false;
			break;
		}
		
		
		console.log(collection[a][pre]);
	}
	
  return flag;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));

