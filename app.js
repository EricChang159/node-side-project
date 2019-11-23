const express = require('express');
const request = require('request')
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', (req, res) => {
    request.post({
        url: 'https://account.kkbox.com/oauth2/token',
        form: { //一定要用表格
            grant_type: 'client_credentials',
            client_id: '9fbb49a26e36fb0cbeb7feb1a41851b9',
            client_secret: '384cdd949c32b5e832be9004bfb62f14'
        },
        headers: {
            "Accept": "application/x-www-form-urlencoded",
            "Content-Type": "application/x-www-form-urlencoded"
        }

    }, (err, respond, body) => {
        if (err) {
            return res.send(err)
        }
        res.send(body)
    })

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));