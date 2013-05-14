(function() {
	

	var speed = 500,
		i = 0,
		doSomething = function() {
		console.log("doSomething() executed");
		i++;

		if (i < 10) {
			setTimeout(doSomething, speed);	
		}
	};

	setTimeout(doSomething, speed);

	alert("hello");
}());