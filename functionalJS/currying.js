
// function curry3(fun){
//       return function(one){
//         return function(two){
//           return function (three){
//             return fun(one, two, three)
//           }
//         }
//       }
//     }


function curryN(fn, n, args) {
	var num;
	var args = args || [];
	
	if (typeof n === 'undefined') {
		num = fn.length;
	}
	else {
		num = n;
	}

	console.log(num);
	console.log(args);
	console.log("++++++++++++++++++++");

	if (num >= 0) {
		args.push(num);
		return function(num) {
			return curryN(fn, num - 1, args);
		}
	}
	return fn.apply(null, args);	
}

module.exports = curryN;