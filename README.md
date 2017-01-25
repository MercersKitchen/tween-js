# tween-js

Simple javaScript tweening engine, heavily inspired by [tween.js](https://github.com/tweenjs/tween.js)

```javascript
var time = 0;
var coords = { x: 0, y: 0 };
TweenJS.add(new TweenJS.Tween(coords)
    .to({ x: 100, y: 100 }, 1000)
    .easing(TweenJS.Easing.Elastic.Out)
    .onUpdate(function () {
        console.log(this.x, this.y);
    }).start()
);

requestAnimationFrame(animate);

function animate(time) {
	requestAnimationFrame(animate);
	TweenJS.update(time - last);
	last = time;
}
```

## Installation

#### Download

Download the [library](https://raw.githubusercontent.com/tweenjs/tween.js/master/src/Tween.js), or [minified](https://raw.githubusercontent.com/tweenjs/tween.js/master/src/Tween.js)
and include it in your code:

```html
<script src="js/tween-js.js"></script>
```

Or:

```html
<script src="js/tween-js.min.js"></script>
```

#### Use `npm`

```bash
npm install git://github.com/byrdal/tween-js.git#v0.1.0
```

#### Use `bower`

```bash
bower install git://github.com/byrdal/tween-js.git#v0.1.0
```

## Features

* Does one thing and one thing only: tween properties
* Doesn't take care of CSS units (e.g. appending `px`)
* Doesn't interpolate colours
* Use custom easing functions

## Documentation

See the examples in `/examples`