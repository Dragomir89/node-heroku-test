const express = require('express')
const app = express()

app.get('/',(req,res) =>{
    res.send({hi: 'Hello'})
})

const PORT = process.env.PORT || 3333
console.log(PORT)
app.listen(PORT )