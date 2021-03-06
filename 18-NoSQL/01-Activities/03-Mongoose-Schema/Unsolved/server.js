const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

const { User } = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/userdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set('debug', true);

app.post('/submit', ({ body }, res) => {
  User.create(body)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get('/users', (req, res) => {
  User.find()
    .then(dbuser => {
      res.json(dbuser)
    })
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
