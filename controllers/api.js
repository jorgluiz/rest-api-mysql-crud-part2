var dbConnection = require("../dbConnection")

// obter todos clientes
exports.getAll = (req, res) => {
    dbConnection.query("SELECT * FROM persons", (err, result) => {
        if (err) console.log(err)
        // else console.log(result)

        res.send(result)
    })
}

// obter um cliente específico
exports.getById = (req, res) => {
    const id = req.params.id
    dbConnection.query("SELECT * FROM persons WHERE id=?", id, (err, result) => {
        if (err) console.log(err)
        // else console.log(result)

        res.send(result)
    })
}

// inserindo um cliente
exports.insert = (req, res) => {
    const dataBody = req.body
    dbConnection.query(`INSERT INTO persons (name, course, grade, city) VALUES('${dataBody.name}','${dataBody.course}','${dataBody.grade}','${dataBody.city}')`, (err, result) => {
        if (err) console.log(err)
        // else console.log(result)

        res.send()
    })
}

// inserindo uma coleção propriedades
exports.insertCollection = (req, res) => {
    const dataBody = req.body
    let arrColection = dataBody.map(p => [p.name, p.course, p.grade, p.city])
    dbConnection.query(`INSERT INTO persons(name, course, grade, city) VALUES ?`, [arrColection], (err, result) => {
        if (err) console.log(err)
        // else console.log(result)

        res.send()
    })
}

// modificando um cliente
exports.modifying = (req, res) => {
    const id = req.params.id
    const bodyData = req.body
    dbConnection.query(`UPDATE persons SET name='${bodyData.name}', course='${bodyData.course}', grade='${bodyData.grade}', city='${bodyData.city}'  WHERE id=${id}`, (err, result) => {
        if (err) console.log(err)
        // else console.log(result)

        res.send()
    })
}

// deletando um cliente
exports.delet = (req, res) => {
    const id = req.params.id
    dbConnection.query(`DELETE FROM persons WHERE id=${id}`, (err, result) => {
        if (err) console.log(err)
        // else console.log('Successfully deleted. Affected row: ', result)

        res.send()
    })
}

// deletando uma tabela
exports.deletTable = (req, res) => {
    dbConnection.query(`DROP TABLE persons`, (err, result) => {
        if (err) console.log(err)
        // else console.log('table deleted.', result)

        res.send()
    })
}
