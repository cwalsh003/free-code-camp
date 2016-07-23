function convert(num) {
	var romNum = '';
			
	var em =  Math.floor(num / 1000);
		for(var i = 0; i < em; i++){
			romNum += 'M';
			num = num % 1000;
		}
		if(num >= 900){
			romNum += "CM";
			num %= 900;
		}
	var dee =  Math.floor(num / 500);
		for(var i = 0; i < dee; i++){
			romNum += 'D';
			num = num % 500;
		}
		if(num >= 400){
			romNum += "CD";
			num %= 400;
		}
	var hun =  Math.floor(num / 100);
		for(var i = 0; i < hun; i++){
			romNum += 'C';
            num %= 100;
		}
		
		if(num >= 90){
			romNum += "XC";
			num %= 90;
		}
		
	var fif =  Math.floor(num / 50);
		for(var i = 0; i < fif; i++){
			romNum += 'L';
			num = num % 50;
		}
		if(num >= 40){
			romNum += "XL";
			num %= 40;
		}
	var ten =  Math.floor(num / 10);
		for(var i = 0; i < ten; i++){
			romNum += 'X';
            num %= 10;
		}
		if(num >= 9){
			romNum += "IX";
			num %= 9;
		}
	var vee =  Math.floor(num / 5);
		for(var i = 0; i < vee; i++){
			romNum += 'V';
			num %= 5;
		}
  		if(num >= 4){
			romNum += "IV";
			num %= 4;
		}
	var one =  Math.floor(num / 1);
		for(var i = 0; i < one; i++){
			romNum += 'I';
		}
			 
			
return romNum;
			}

convert(2500);

