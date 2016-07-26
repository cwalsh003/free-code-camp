
function binaryAgent(str) {
  var arr = str.split(" ");
  var newArr = [];

	for (var a in arr ) {
		console.log(arr[a]);
		newArr.push(String.fromCharCode(parseInt(arr[a],2)));

	}
  str = newArr.join('');
  return str;
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

