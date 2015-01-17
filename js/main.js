require(['jQuery', 'underscore', 'concurrent-tasks'], function($, _, SyncFuncs) {
    var syncFuncs = new SyncFuncs();

    syncFuncs.registerTask(function() {
        $.ajax({
            url: 'data/a.json',
        })
        .always(function(data) {
            console.log("Task 1 done");
            syncFuncs.markOneDone(data);
        });
    });

    syncFuncs.registerTask(function() {
        $.ajax({
            url: 'data/b.json',
        })
        .always(function(data) {
            console.log("Task 2 done");
            syncFuncs.markOneDone(data);
        });
    });

    syncFuncs.registerTask(function() {
        $.ajax({
            url: 'data/c.json',
        })
        .always(function(data) {
            console.log("Task 3 done");
            syncFuncs.markOneDone(data);
        });
    });

    syncFuncs.registerTask(function() {
        $.ajax({
            url: 'data/d.json',
        })
        .always(function(data) {
            console.log("Task 4 done");
            syncFuncs.markOneDone(data);
        });
    });

    syncFuncs.timout = 3000;

    syncFuncs.registerFinalTask(function(outputs) {
        console.log(outputs);
    });

    syncFuncs.start();
});