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
