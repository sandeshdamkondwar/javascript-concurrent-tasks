require(['jQuery', 'underscore', 'concurrent-tasks'], function($, _, SyncFuncs) {
    var syncFuncs = new SyncFuncs();

    syncFuncs.registerTask(function() {
        setTimeout(function () {
            console.log("Task 1 completed");
            syncFuncs.markOneDone("Task 1 output");
        }, 400);
    });

    syncFuncs.registerTask(function() {
        setTimeout(function () {
            console.log("Task 2 completed");
            syncFuncs.markOneDone("Task 2 output");
        }, 300);
    });

    syncFuncs.registerTask(function() {
        setTimeout(function () {
            console.log("Task 3 completed");
            syncFuncs.markOneDone("Task 3 output");
        }, 200);
    });

    syncFuncs.registerTask(function() {
        setTimeout(function () {
            console.log("Task 4 completed");
            syncFuncs.markOneDone("Task 4 output");
        }, 100);
    });

    syncFuncs.timout = 3000;

    syncFuncs.registerFinalTask(function(outputs) {
        console.log(outputs);
    });

    syncFuncs.start();
});