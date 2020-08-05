import 'dotenv/config';
import express from'express';

const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Something else!')
})

app.listen(port, () => {
  console.log(`We are live at http://localhost:${port}`)
})