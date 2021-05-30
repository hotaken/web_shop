const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
});
console.log(__dirname);
if (process.env.NODE_ENV === 'production') {
    console.log(__dirname);
    // Serve any static files
    app.use(express.static('client/build'));

    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join('client/build/index.html'));
    });
}
//Подключение к БД
let db = new sqlite3.Database(path.join('server/dataBase.sqlite'), (err) => {
    if (err) {
        console.log('-------------------------------');
        console.log(__dirname);
        console.log(err.message);
        return console.log(err.message);
    }
    console.log('Connected to server/dataBase.sqlite');
    console.log(__dirname);
});

app.get('/api/getBurgerList', function (request, response) {
    let array = [];
    let burger = request.query.burger;
    if (burger == 'All') {
        console.log('SELECT * FROM burger_list');
        db.all('SELECT * FROM burger_list', (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                array.push({
                    name: row.name,
                    ingredients: JSON.parse(row.jsonIngredients)['ingredients'],
                    description: row.description,
                });
            });
            response.write(JSON.stringify(array));
            response.end();
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
