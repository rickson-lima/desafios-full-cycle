const express = require("express")
const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'senha_root',
  database: 'node_db'
}

const mysql = require("mysql")
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values ('Rickson Lima') ,('Jon Snow'), ('Linus Torvalds');`
connection.query(sql)

app.get('/', (req, res) => {
  connection.query('SELECT * FROM people;', function (error, results, fields) {
    if (error) throw error;
    // connected!
    const names = results.map((obj) => `<li>${obj.name}</li>`)
    
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <h3>Lista de nomes cadastrados no banco de dados:</h3>
      <ul>${names.join().replaceAll(",", "")}</ul>
    `)
  });
})

app.listen(port, () => {
  console.log('Rodando na porta: ', + port);
})