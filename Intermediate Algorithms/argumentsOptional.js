
function addTogether() {

	var check = function (num) {
		if(typeof num !== 'number'){
			return undefined;
		}else{
			return num;
		}
	};
  
  if(arguments.length > 1){
	var a = check(arguments[0]);
	var b = check(arguments[1]);
		if(a === undefined || b == undefined){
			return undefined;
		}else{
			return a + b;
		}
  }else {
		var c = arguments[0];
		if(check(c)){
			return function(val){
				if(c === undefined || check(val) === undefined){
					return undefined;
				}else{
					return c + val;
				}
			};
		}
  }

}


console.log(addTogether(2));

