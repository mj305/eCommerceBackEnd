import 'dotenv/config';
import express from'express';
import mongoose from 'mongoose';

const app = express()
const port = process.env.PORT;

mongoose.connect(process.env.DBURL, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("MongoDB Connected!")
});


app.get('/', (req, res) => {
  res.send('Something else!')
})

app.listen(port, () => {
  console.log(`We are live at http://localhost:${port}`)
})