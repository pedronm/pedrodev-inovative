const path = require('path')
const express = require('express')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'dist')))
    .set('view engine', 'ejs')
//    .set('views', path.join(__dirname, 'views'))
  .get('/', (req,res) => res.render('index') )
//    .get('/', (req, res) => main.index)
    .listen( PORT, () => {
        console.log(`Listening on Port ${PORT}`)
    }, )

