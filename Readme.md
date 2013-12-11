# count-request-size-middleware

    Count the content bytes received for a request.

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

    Generate a count request size middleware with custom `options`: 

```js
{
    key: '_received' // save the size as `_received`
}
```

