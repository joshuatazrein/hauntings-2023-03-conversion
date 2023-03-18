import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3001
const SERVER = process.env.NODE_ENV === 'production' ? '' : 'localhost:3001/'
const ORIGINS = ['localhost:3000']

app.use(
  cors({
    origin: ORIGINS
  })
)

app.listen(PORT, () => console.log('listening from', SERVER))
