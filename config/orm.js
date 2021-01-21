const connection = require("./connection.js")

const orm = {
    selectAll: function (table, cb) {
        let query = `
        SELECT * FROM ??`;
        connection.query(query, [table], (err, data) => {
            if (err) throw err
            cb(data)
        })
    },
    insertOne: function (table, col, val, cb) {
        let query = `
        INSERT INTO ?? (??)
        VALUES (?)`
        connection.query(query, [table, col, val], (err, data) => {
            if (err) throw err;
            cb(data)
        })
    },
    updateOne: function (table, col, id, cb) {
        let query = `
        UPDATE ??
        SET ?? = true
        WHERE id = ?`
        connection.query(query, [table, col, id], (err, data) => {
            if (err) throw err;
            cb(data)
        })
    },

}

module.exports = orm;