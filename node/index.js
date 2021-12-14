const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'desafio'
}

const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
    var retorno = '<h1>Full Cycle Rocks!</h1>'
    retorno += '<br/><br/>'
    const sql = `INSERT INTO people(name) VALUES('Zé das Couves')`
    connection.query(sql)
    const select = connection.query(`SELECT * FROM people`)
    
    select.on('result', (row) => {
        retorno += `<p>- ${row.name}`
    })
    
    select.on('end', () => {
        connection.end()
        res.send(retorno)
    })
})

app.listen(port, () => console.log(`Rodando na porta ${port}`))