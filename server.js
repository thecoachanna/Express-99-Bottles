const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index')
  })

app.get('/:number', (req, res) => {
  res.render('number', { number: Number(req.params.number)})
})

app.listen(4000, () => {
  console.log("app listening on port 4000")
})