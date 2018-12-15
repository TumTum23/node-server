const express = require ('express');

var app = express();

app.get('/', (req, res) => {
 // res.send('<h2>Hello Express!</h2>');
 res.send({
  name: 'Jonny',
  likes: [
    'Biking',
    'Cities'
  ]
 });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Cant do that'
  });
});


app.listen(3000);
