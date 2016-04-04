var numArr = process.argv.slice(2);
var total = 0;
numArr.forEach(function(num){
	total += Number(num);
});
console.log(total);