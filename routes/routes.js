const router = require("express").Router()
const { getAll, getById, insert, modifying, delet, deletTable, insertCollection } = require("../controllers/api")

router.route("/client")
    .get(getAll)

router.route("/client/:id")
    .get(getById)

router.route("/client/insert")
    .post(insert)

router.route("/client/collection")
    .post(insertCollection)

router.route("/client/update/:id")
    .put(modifying)

router.route("/client/delete/:id")
    .delete(delet)

router.route("/client/drop/")
    .delete(deletTable)

module.exports = router


// // inserindo uma coleção propriedades
// app.post("/client/colection", (req, res) => {
//     const dataBody = req.body
//     let arrColection = dataBody.map(p => [p.name, p.course, p.grade, p.city])

//     connection.query(`INSERT INTO persons(name, course, grade, city) VALUES ?`, [arrColection], (err, result) => {
//         if (err) console.log(err)
//         else console.log(result)

//         res.send()
//     })
// })