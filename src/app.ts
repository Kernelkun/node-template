import express from 'express'
import './db/mongoose'
import getRouter from './routers'

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use('/api', getRouter())

export { app, port }
