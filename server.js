const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const db = process.env.DATABASE.replace('<password>', process.env.DB_PASSWORD);

console.log(db);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('db connection successful');
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`app run on ${port}...`);
});
