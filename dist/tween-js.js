(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Easing = {
    Linear: function (k) {
        return k;
    },
    Quadratic: {
        In: function (k) {
            return k * k;
        },
        Out: function (k) {
            return k * (2 - k);
        },
        InOut: function (k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k;
            }

            return -0.5 * (--k * (k - 2) - 1);
        }
    },
    Cubic: {
        In: function (k) {
            return k * k * k;
        },
        Out: function (k) {
            return --k * k * k + 1;
        },
        InOut: function (k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k * k;
            }

            return 0.5 * ((k -= 2) * k * k + 2);
        }
    },
    Quartic: {
        In: function (k) {
            return k * k * k * k;
        },
        Out: function (k) {
            return 1 - (--k * k * k * k);
        },
        InOut: function (k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k * k * k;
            }

            return -0.5 * ((k -= 2) * k * k * k - 2);
        }
    },
    Quintic: {
        In: function (k) {
            return k * k * k * k * k;
        },
        Out: function (k) {
            return --k * k * k * k * k + 1;
        },
        InOut: function (k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k * k * k * k;
            }

            return 0.5 * ((k -= 2) * k * k * k * k + 2);
        }
    },
    Sinusoidal: {
        In: function (k) {
            return 1 - Math.cos(k * Math.PI / 2);
        },
        Out: function (k) {
            return Math.sin(k * Math.PI / 2);
        },
        InOut: function (k) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
        }
    },
    Exponential: {
        In: function (k) {
            return k === 0 ? 0 : Math.pow(1024, k - 1);
        },
        Out: function (k) {
            return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
        },
        InOut: function (k) {
            if (k === 0) {
                return 0;
            }

            if (k === 1) {
                return 1;
            }

            if ((k *= 2) < 1) {
                return 0.5 * Math.pow(1024, k - 1);
            }

            return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
        }
    },
    Circular: {
        In: function (k) {
            return 1 - Math.sqrt(1 - k * k);
        },
        Out: function (k) {
            return Math.sqrt(1 - (--k * k));
        },
        InOut: function (k) {
            if ((k *= 2) < 1) {
                return -0.5 * (Math.sqrt(1 - k * k) - 1);
            }

            return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
        }
    },
    Elastic: {
        In: function (k) {
            if (k === 0) {
                return 0;
            }

            if (k === 1) {
                return 1;
            }

            return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
        },
        Out: function (k) {
            if (k === 0) {
                return 0;
            }

            if (k === 1) {
                return 1;
            }

            return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
        },
        InOut: function (k) {
            if (k === 0) {
                return 0;
            }

            if (k === 1) {
                return 1;
            }

            k *= 2;

            if (k < 1) {
                return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
            }

            return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
        }
    },
    Back: {
        In: function (k) {
            var s = 1.70158;

            return k * k * ((s + 1) * k - s);
        },
        Out: function (k) {
            var s = 1.70158;

            return --k * k * ((s + 1) * k + s) + 1;
        },
        InOut: function (k) {
            var s = 1.70158 * 1.525;

            if ((k *= 2) < 1) {
                return 0.5 * (k * k * ((s + 1) * k - s));
            }

            return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
        }
    },
    Bounce: {
        In: function (k) {
            return 1 - TweenJS.Easing.Bounce.Out(1 - k);
        },
        Out: function (k) {
            if (k < (1 / 2.75)) {
                return 7.5625 * k * k;
            } else if (k < (2 / 2.75)) {
                return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
            } else if (k < (2.5 / 2.75)) {
                return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
            } else {
                return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
            }
        },
        InOut: function (k) {
            if (k < 0.5) {
                return TweenJS.Easing.Bounce.In(k * 2) * 0.5;
            }

            return TweenJS.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
        }
    }
};

module.exports = Easing;
},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
(function (global){
var Tween  = require('Tween.js'),
    Easing = require('Easing.js');

var TweenJS = {
    Tween: Tween,
    Easing: Easing,
    _tweens: [],
    add: function(tween) {
        TweenJS._tweens.push(tween);
        return tween;
    },
    remove: function(tween) {
        var index = TweenJS._tweens.indexOf(tween);
        if (index > -1) {
            TweenJS._tweens.splice(index, 1);
        }
    },
    update: function(delta) {
        TweenJS._tweens.forEach(function(tween) {
            tween.update(delta);
            if (tween.isComplete() && tween.isDestroyOnComplete()) {
                var index = TweenJS._tweens.indexOf(tween);
                TweenJS._tweens.splice(index, 1);
            }
        }, this)
    }
};

//Export globally
global.TweenJS = TweenJS;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"Easing.js":1,"Tween.js":2}]},{},[1,2,3]);
