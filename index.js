import express from 'express'
import { PORT } from './config.js'
import { appDataSource } from './data-source.js'

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
  res.send('Sbancario')
})

appDataSource.initialize().then(() => {
  console.log('Database is connect')
  app.listen(PORT, () => {
    console.log(`Listening on Port localhost:${PORT}`)
  })
}).catch((error) => {
  console.error(error)
})
