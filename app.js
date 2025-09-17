const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/fapi/:symbol', async (req, res) => {
    const {symbol} = req.params;
    const response = await fetch(`https://fapi.binance.com/fapi/v1/ticker/24hr?symbol=${symbol}`);
    const data = await response.json();
    const lastPrice = data.lastPrice;
    return res.send(lastPrice);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})