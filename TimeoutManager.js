function TimeoutManager() {
    this.timeouts = {};
}

TimeoutManager.prototype.setTimeout = function(callback, delay) {
    var that = this;
    var id = setTimeout(function() {
        that.timeouts[id] = false;
        callback();
    }, delay);
    this.timeouts[id] = true;
}

TimeoutManager.prototype.clearAll = function() {
    for (var i in this.timeouts) {
        if (this.timeouts[i]) {
            this.timeouts[i] = false;
            clearTimeout(Number(i));
        }
    }
}
