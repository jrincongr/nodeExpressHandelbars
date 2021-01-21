const orm = require("../config/orm");

const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
        })
    },
    insertOne: function (col, val, cb) {
        orm.insertOne("burgers", col, val, function (data) {
            cb(data)
        })
    },
    updateOne: function (id, cb) {
        orm.updateOne("burgers", "devoured", id, function (data) {
            cb(data)
        })
    }
}

module.exports = burger;