function repeat(operation, num) {
	// official solution
   if (num <= 0) return
    
      operation()
    
      if (num % 250 === 0) {
        setTimeout(function() {
          repeat(operation, --num)
        })
      } else {
        repeat(operation, --num)
      }

     // My solution:
     
	// if (num <= 0) return ;
	// operation();
	// setTimeout(function() {
	// 	return repeat(operation, --num);
	// });
};

module.exports = repeat;