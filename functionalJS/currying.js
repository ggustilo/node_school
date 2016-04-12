
// function curry3(fun){
//       return function(one){
//         return function(two){
//           return function (three){
//             return fun(one, two, three)
//           }
//         }
//       }
//     }

function curryN(fn, n) {
	n = n || fn.length;
	return function curriedN(arg) {
		if (n <= 1) return fn(arg);
		return curryN(fn.bind(this, arg), n - 1);
	}
}

module.exports = curryN;