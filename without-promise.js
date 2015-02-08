function upperCase(str, cb) {
	setTimeout(function() { 
		cb(str.toUpperCase()); 
	}, 1000);
}

function addName(str, name, cb) {
	setTimeout(function() { 
		cb(str + " " + name); 
	}, 1000);
}

function addQuestionMark(str, cb) {
	setTimeout(function () { 
		cb(str + "?"); 
	}, 2000);
}

addName("Hello", "Theo", function(str) {
	upperCase(str, function(str) {
		addQuestionMark(str, function(str) {
			console.log(str);
		});
	});
});