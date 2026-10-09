import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Node API',
    service: '02-node-api',
    time: new Date().toISOString(),
  })
})

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() })
})

app.get('/echo', (req, res) => {
  res.json({ youSent: req.query.q ?? null })
})

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`)
})
