const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
var morgan = require('morgan');

app.use(morgan('short'));

app.get('/', (req, res) => {
    res.send('Hello World! test');
}
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);