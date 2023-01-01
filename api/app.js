import express from 'express'


const app = express()

app.get('/', (req, res) => {
    console.log("app is in route /")
    res.send('Hello app')
})

app.listen(5000, () => {
    console.log('SERVER IS RUNNING')
})