const express = require('express');
const app = express();
const bp = require('body-parser');
const PORT = process.env.EXPRESS_CONTAINER_PORT;

app.use(bp.urlencoded({extended: true}))
app.use(bp.json());

app.listen(PORT, () => {
    console.log(`Started app on port ${PORT}`)
})