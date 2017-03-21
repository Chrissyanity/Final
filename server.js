var express = require('express');
var pg = require('pg');
var app = express();
var password = require('./password');
var connectionString = 'postgres://uucfqjmvphfcff:' + password + '@ec2-50-17-236-15.compute-1.amazonaws.com:5432/de5hv9qg2ieort?ssl=true';
var bodyParser = require('body-parser');
var client = new pg.Client(connectionString);

var config = {
    user: 'uucfqjmvphfcff',
    database: 'de5hv9qg2ieort',
    password: password,
    host: 'ec2-50-17-236-15.compute-1.amazonaws.com',
    port: 5432,
    max: 100,
    idleTimeoutMillis: 30000,
    ssl: true
};

var pool = new pg.Pool(config);

app.use(bodyParser.json({
    extended: true
}));
app.use(express.static(__dirname + '/public'));

app.get('/get-student', function (req, res) {
    var results = [];
    pool.connect(function (err, client, done) {

        var query = client.query('select * from studentsinfo');

        query.on('row', function (row) {
            results.push(row);
        });
        query.on('end', function () {
            client.end();
            return res.json(results);
        });
    });
});

app.post('/add-student', function (req, res, next) {
    var results = [];
    var data = {
        studentname: req.body.studentname
    };

    pool.connect(function (err, client, done) {
        var insertQuery = client.query('INSERT INTO studentsinfo(studentname, booksread, thirtymin, sixtymin, trip, overfifty, overonehundred, overtwohundred) values($1, $2, $3, $4, $5, $6, $7, $8)', [data.studentname, 0, false, false, false, false, false, false]);

        insertQuery.on('end', function () {
            var query = client.query('SELECT * FROM studentsinfo');

            query.on('row', function (row) {
                results.push(row);
            });
            query.on('end', function () {
                client.end();
                return res.json(results);
                console.log(results);
            });
        });
    });
});

app.put('/update-books-read/:id', function (req, res, next) {
            var results = [];
            var id = req.params.id;
            var data = {
                booksread: req.body.booksread,
                thirtymin: req.body.thirtymin,
                sixtymin: req.body.sixtymin,
                trip: req.body.trip,
                overfifty: req.body.overfifty,
                overonehundred: req.body.overonehundred,
                overtwohundred: req.body.overtwohundred
            };


            pool.connect(function (err, client, done) {
                    var updateQuery = client.query('UPDATE studentsinfo SET booksread = ($1), thirtymin = ($2), sixtymin = ($3), trip = ($4), overfifty = ($5), overonehundred = ($6), overtwohundred = ($7) WHERE id = ($8)', [data.booksread, data.thirtymin, data.sixtymin, data.trip, data.overfifty, data.overonehundred, data.overtwohundred, id]);

                        updateQuery.on('end', function () {
                            var query = client.query('SELECT * FROM studentsinfo');

                            query.on('row', function (row) {
                                results.push(row);

                            });
                            query.on('end', function () {
                                client.end();
                                return res.json(results);

                            });

                        })

                    });
            });

        var server = app.listen(3000, function () {
            var port = server.address().port;
            console.log('PostgreSQL server running at http://localhost:%s', port);
        });
