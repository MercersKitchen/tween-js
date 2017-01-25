var Tween = function(object) {
    this._object = object;
    this._paused = true;
    this._destroyOnComplete = false;
    this._delay = 0;
    this._yoyo = false;
    this._reversed = false;
    this._chainedTween = null;
};

Tween.prototype.constructor = Tween;
module.exports = Tween;

Tween.prototype.to = function(properties, duration) {
    this._properties = properties;
    this._duration = duration;
    return this;
};

Tween.prototype.start = function() {
    this._startValues = {};
    Object.keys(this._properties).forEach(function(property) {
        this._startValues[property] = this._object[property];
    }, this);

    this._elapsed = 0.0;
    this._paused = false;

    // Callback
    if (this._onStartCallback) {
        this._onStartCallback.call(this._object);
    }

    return this;
};

Tween.prototype.easing = function(easingFunction) {
    this._easingFunction = easingFunction;
    return this;
};

Tween.prototype.delay = function(delay) {
    this._delay = delay;
    return this;
};

Tween.prototype.yoyo = function(bool) {
    this._yoyo = bool;
    return this;
};

Tween.prototype.chain = function(chainedTween) {
    this._chainedTween = chainedTween;
    return this;
};

Tween.prototype.destroyOnComplete = function(bool) {
    this._destroyOnComplete = bool;
    return this;
};

Tween.prototype.onStart = function(callback) {
    this._onStartCallback = callback;
    return this;
};

Tween.prototype.onComplete = function(callback) {
    this._onCompleteCallback = callback;
    return this;
};

Tween.prototype.onUpdate = function(callback) {
    this._onUpdateCallback = callback;
    return this;
};

Tween.prototype.update = function(delta) {
    if (this._paused || this.isComplete()) {
        return;
    }

    this._elapsed += delta;
    this._elapsed = Math.min(this._duration + this._delay, this._elapsed);

    if (this._elapsed < this._delay) {
        return;
    }

    //Interpolate
    Object.keys(this._properties).forEach(function(property) {
        var diff;
        if (this._reversed) {
            diff = this._startValues[property] - this._properties[property];
            this._object[property] = this._properties[property] + (diff * this._easingFunction((this._elapsed - this._delay) / this._duration));
        } else {
            diff = this._properties[property] - this._startValues[property];
            this._object[property] = this._startValues[property] + (diff * this._easingFunction((this._elapsed - this._delay) / this._duration));
        }
    }, this);

    if (this.isComplete()) {
        if (this._yoyo) {
            this._reversed = !this._reversed;
            this._elapsed = 0;
        }

        // Callback
        if (this._onCompleteCallback) {
            this._onCompleteCallback.call(this._object);
        }

        if (this._chainedTween) {
            this._chainedTween.start();
        }
    }

    // Callback
    if (this._onUpdateCallback) {
        this._onUpdateCallback.call(this._object);
    }
};

Tween.prototype.isComplete = function() {
    return (this._elapsed === this._duration);
};

Tween.prototype.isPaused = function() {
    return this._paused;
};

Tween.prototype.isRunning = function() {
    return !this._paused && this._elapsed < this._duration;
};

Tween.prototype.isDestroyOnComplete = function() {
    return this._destroyOnComplete;
};