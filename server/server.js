const express = require('express');
/* const pg = require('pg'); */

/* const db = new pg.Pool({
  host: 'localhost',
  database: 'postgres',
  user: 'postgres',
  password: 'mysecretpassword',
  port: '5432'
}) */

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  /* db.query('SELECT * FROM distributors')
    .then(dbResponse => {
      res.send(dbResponse.rows);
    }) */
    res.status(200).send('<h1>Hello World</h1>');
})

app.listen(3000, () => {
  process.stdout.write(`\n\napp listening on port ${3000}\n\n`);
});
