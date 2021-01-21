const express = require("express");
const burger = require("../models/burger.js")
const router = express.Router();

// var testObj = {
//     dog: "woof"
// }

router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        const handlebars = {
            burgers: data
        }
        res.render("index", handlebars)
    })
})

router.post("/api/newBurger", function (req, res) {
    console.log(req.body);
    burger.insertOne("burger_name", req.body.burger_name, function (data) {
        res.json({ id: data.insertId })
    })
});

router.put("/api/newBurger/:id", function (req, res) {
    let id = req.params.id
    burger.updateOne(id, function (data) {
        if (data.changedRows == 0) {
            return res.status(404).end()
        } else {
            res.status(200).end()
        }
    })
})

module.exports = router;