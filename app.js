const express = require('express')
const app = express()
const port = 8000

app.use(express.static(__dirname,{fallthrough: false}))

app.use((err,req,res,next) => {
    console.log(err.stack)
    res.status('404')
    res.sendFile('404.html', {root: __dirname})
})

app.listen(port,() => {
    console.log(`App listing on port ${port}`)
})