import express, { NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use((req: Request, _res: Response, next: NextFunction) => {
  console.log('✅ Someone just sent a request: ', req.method, req.url)
  next()
})

app.get('/api/message', (_req: Request, res: Response) => {
  res.json({ message: process.env.SECRET_MESSAGE || 'Hello from backend! (code)' })
})

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})
