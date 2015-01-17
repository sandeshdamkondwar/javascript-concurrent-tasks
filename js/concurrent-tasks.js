define([], function () {
    var SyncFuncs = function () {
        this.functions = [];
        this.isAllDone = false;
        this.outputs = [];
        this.pendingTasks = 0;
        this.defaultTimeout = 3000;
    };

    // Registering new synchronous callback
    SyncFuncs.prototype.registerTask = function(callback) {
        this.functions.push(callback);
        this.pendingTasks++;
    };

    // Registeing the final task
    SyncFuncs.prototype.registerFinalTask = function(callback) {
        this.allDone = callback;
    };

    SyncFuncs.prototype.start = function() {
        for (var i = 0;  i < this.functions.length; i++) {
            this.functions[i](this);
        }

        this.timeout = this.timeout || this.defaultTimeout;

        setTimeout(function () {
            if(this.isAllDone === false) {
                console.log('Timed Out .....');
                this.isAllDone = true;
                this.allDone(this.outputs);
            }
        }, this.timeout);
    };

    // This one will get called after every single task done
    SyncFuncs.prototype.markOneDone = function(data) {
        this.pendingTasks--;
        this.outputs.push(data);

        if (!this.isAllDone && this.pendingTasks === 0) {
            this.allDone(this.outputs);
            this.isAllDone = true;
        }
    };

    return SyncFuncs;
});