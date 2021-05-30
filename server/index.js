const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

//Подключение к БД
let db = new sqlite3.Database('server/dataBase.sqlite', (err) => {
    if (err) {
        return console.log(err.message);
    }
    console.log('Connected to server/dataBase.sqlite');
});

app.get('/api/getBurgerList', function (request, response) {
    let array = [];
    let burger = request.query.burger;
    console.log(burger);
    if (burger == 'All') {
        db.all("select name from sqlite_master where type='table'", (err, tables) => {
            console.log(tables);
        });
        db.all('SELECT * FROM burger_list', (err, rows) => {
            if (err) {
                throw err;
            }
            console.log('hi');
            rows.forEach((row) => {
                array.push(JSON.parse(row.jsonIngredients)['ingredients']);
            });
            response.write(JSON.stringify(array));
            response.end();
        });
    }
});
