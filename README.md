# javascript-concurrent-tasks

Javascript class that allows to register multiple callbacks to execute simulteniously(sort of) to execute a single function.

Example:
```js
function task1 (argument) {
	// body...
}

function task2 (argument) {
	// body...
}

function done (argument) {
	// body...
}

var functions = [];
functions.push(task1);
functions.push(task2);

var syncFuns = new ParellelTasks(functions, done);
```