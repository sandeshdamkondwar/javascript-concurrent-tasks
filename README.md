# javascript-concurrent-tasks

Javascript class that allows to register multiple callbacks to execute simulteniously(sort of) to execute a single function.

Example:
```js
var syncFuncs = new SyncFuncs();

syncFuncs.registerTask(function() {
    $.ajax({
        url: 'http://www.coupondunia.in',
    })
    .always(function() {
        console.log("Task 1 done");
        syncFuncs.markOneDone({
            id: 1
        });
    });
});

syncFuncs.registerTask(function() {
    $.ajax({
        url: 'http://www.coupondunia.in',
    })
    .always(function() {
        console.log("Task 2 done");
        syncFuncs.markOneDone({
            id: 2
        });
    });
});

syncFuncs.registerTask(function() {
    $.ajax({
        url: 'http://www.coupondunia.in',
    })
    .always(function() {
        console.log("Task 3 done");
        syncFuncs.markOneDone({
            id: 3
        });
    });
});

syncFuncs.timout = 3000;

syncFuncs.registerFinalTask(function(outputs) {
    console.log(outputs);
});

syncFuncs.start();
```
