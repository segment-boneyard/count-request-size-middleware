# count-request-size-middleware

  Count the request size of each [express](https://github.com/visionmedia/express) request.

## Example

```js
var countRequestSize = require('count-request-size-middleware');

var app = express();
app.use(countRequestSize());

app.use(function (req, res, next) {
  console.log('Received ' + req._received + ' bytes');
  next();
});
```

## API

### countRequestSize(options)

  Generate a count request size middleware with `options` defaulting to:

```js
{
    key: '_received' // save the size as `_received`
}
```

## License

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

