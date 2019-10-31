const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

const decks = 18;
const sunrooms = 19;
const covers = 30;
const pergolas = 2;

app.get('/', (req, res) => { res.render('home'); });
app.get('/about', (req, res) => { res.render('about'); });
app.get('/contact', (req, res) => { res.render('contact'); });
app.get('/decks', (req, res) => { res.render('decks'); });
app.get('/sunrooms', (req, res) => { res.render('sunrooms'); });
app.get('/covers', (req, res) => { res.render('covers'); }); 
app.get('/pergolas', (req, res) => { res.render('pergolas'); });

for (let i = 1; i <= covers; i++) {
    app.get(`/covers/${i}`, (req, res) => { res.render(`covers/${i}`); });
}

for (let i = 1; i <= decks; i++) {
    app.get(`/decks/${i}`, (req, res) => { res.render(`decks/${i}`); });
}

for (let i = 1; i <= sunrooms; i++) {
    app.get(`/sunrooms/${i}`, (req, res) => { res.render(`sunrooms/${i}`); });
}

for (let i = 1; i <= pergolas; i++) {
    app.get(`/pergolas/${i}`, (req, res) => { res.render(`pergolas/${i}`); });
}

app.listen(process.env.PORT || 3000, () => { console.log('PPC server initialized... '); });